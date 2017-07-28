<template>
  <div class="w1280 articledetail">
    <div class="sidebox">
      <Menu :theme="theme2" active-name="1-2" :open-names="['1']" width="320">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
              乱七八糟
          </template>
          <Menu-item name="1-1">记一次难忘的事</Menu-item>
          <Menu-item name="1-2">关于你</Menu-item>
          <Menu-item name="1-3">锄禾日当午</Menu-item>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
              大前端
          </template>
          <Menu-item name="2-1">js论</Menu-item>
          <Menu-item name="2-2">css+html</Menu-item>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
              后台
          </template>
            <Menu-item name="3-1">牛逼哄哄的node</Menu-item>
            <Menu-item name="3-2">牛逼哄哄的node</Menu-item>
            <Menu-item name="3-3">牛逼哄哄的node</Menu-item>
        </Submenu>
      </Menu>
    </div>
    <div class="mainbox">
      <div class="articlemain">
        <div class="articletitle">
          <h3>锄禾日当午</h3>
        </div>
        <div class="articleconten">
          <p>锄禾日当午,锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午锄禾日当午</p>
        </div>
      </div>
    </div>
    <!--mainbox end-->

  </div>
</template>

<script>


export default {


  data () {
    return {
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
