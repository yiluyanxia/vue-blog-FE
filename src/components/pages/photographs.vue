<template>
  <div class="w1280">
    <div class="articleList clearfix">
      <div v-masonry transition-duration="0.3s" item-selector=".item">
        <div v-masonry-tile class="item" v-for="(item, index) in blocks">

          <router-link :to="{name:'articleDetail'}">
            <div class="waterfall-item">
             <img v-bind:src="item.bgPic"/>
             <div class="info">
               <!-- <h3>{{item.title}}</h3> -->
               <p>{{item.content}}</p>
             </div>
            </div>
          </router-link>

        </div>
      </div>

    </div>
  </div>
</template>

<script>


export default {


  data () {
    var cc = Math.round(Math.random() * 10);
    return {
      // bgPic1: require('../../assets/images/waterfall1.jpg'),
      // bgPic2: require('../../assets/images/waterfall2.jpg'),
      // bgPic3: require('../../assets/images/waterfall3.jpg'),
      // bgPic4: require('../../assets/images/waterfall4.jpg'),
      // bgPic5: require('../../assets/images/waterfall5.jpg'),
      // bgPic6: require('../../assets/images/waterfall6.jpg'),
      // bgPic7: require('../../assets/images/waterfall7.jpg'),
      // bgPic8: require('../../assets/images/waterfall8.jpg'),
      // bgPic9: require('../../assets/images/waterfall9.jpg'),
      // bgPic0: require('../../assets/images/waterfall0.jpg'),
      bgPic: "bgPic" + cc,
      // bgPic:"../../assets/images/waterfall1.jpg",
      blocks:[
        {
          title:'111',
          content:'遇到的问题是item.img中的路径并不会被 webpack 编译，还保持着相对路径的状态，最终产生 404 错误。请问应该如何解决？',
          bgPic: require('../../assets/images/waterfall1.jpg')
        },
        {
          title:'111',
          content:'遇到的问题是item.img中的路径并不会被 webpack 编译，还保持着相对路径的状态，最终产生 404 错误。请问应该如何解决？',
          bgPic: require('../../assets/images/waterfall2.jpg')
        },
        {
          title:'111',
          content:'遇到的问题是item.img中的路径并不会被 webpack 编译，还保持着相对路径的状态，最终产生 404 错误。请问应该如何解决？',
          bgPic: require('../../assets/images/waterfall3.jpg')
        },
        {
          title:'111',
          content:'11111',
          bgPic: require('../../assets/images/waterfall4.jpg')
        },
        {
          title:'111',
          content:'11111',
          bgPic: require('../../assets/images/waterfall5.jpg')
        },
        {
          title:'111',
          content:'11111',
          bgPic: require('../../assets/images/waterfall6.jpg')
        },
        {
          title:'111',
          content:'11111',
          bgPic: require('../../assets/images/waterfall7.jpg')
        },
        {
          title:'111',
          content:'11111',
          bgPic: require('../../assets/images/waterfall8.jpg')
        },
        {
          title:'111',
          content:'11111',
          bgPic: require('../../assets/images/waterfall9.jpg')
        },
      ]

    }
  },
  computed:{

  },
  methods: {


  },
  mounted() {

  }
}
</script>
