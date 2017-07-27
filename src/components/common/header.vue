<template>
  <header class="header">
    <div class="head">
      <router-link :to="{name:'index'}">
        <!-- <img class="logo" src="../../assets/images/logo.png"> -->
        <span class="logotxt">HYX</span>
      </router-link>
      <ul class="navbox">
        <router-link :to="{name:'index'}"><li>主页</li></router-link>
        <router-link :to="{name:'articles'}"><li>文字</li></router-link>
        <router-link :to="{name:'photographs'}"><li>图片</li></router-link>
        <router-link :to="{name:'collections'}"><li>种草</li></router-link>
        <router-link :to="{name:'about'}"><li>关于</li></router-link>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {

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
