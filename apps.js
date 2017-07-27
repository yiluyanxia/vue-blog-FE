var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');
//X
var mongoose = require('mongoose')
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/expBlog';
var _db;

var routes = require('./routes/index');
var users = require('./routes/users');


var http = require('http')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
app.use('/users', users);

//x
var ObjectID = require('mongodb').ObjectID

MongoClient.connect(mongoUrl, function (err, db) {
  if(err) {
    console.error(err);
    return;
  }

  console.log('connected to mongo');
  _db = db;
  app.listen(3000, function () {
    console.log('server is running...');
  });
});

app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.post('/api/addArticle', function(req, res, next) {
  var article = req.body;
  var collection = _db.collection('article');
  if(!article.title || !article.content || !article.tag ) {
    res.send({errcode:-1,errmsg:"params missed"});
    return;
  }
  collection.insert({title: article.title, content: article.content,tag:article.tag}, function (err, ret) {
    if(err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.send({errcode:0,errmsg:"ok"});
    }
  });
});

module.exports = app;
