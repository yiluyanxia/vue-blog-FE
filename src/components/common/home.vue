<template>
  <div class="whole">
    <v-header></v-header>
    <v-bg></v-bg>
    <!-- <v-bg v-if="$route.path.indexOf('/about') < 0"></v-bg> -->
    <div class="wrapper"><router-view></router-view></div>
    <v-footer></v-footer>
    <v-tool></v-tool>
  </div>
</template>

<script>
    import vHeader from './header.vue';
    import vFooter from './footer.vue';
    import vBg from './bg.vue';
    import vTool from './tool.vue';
    export default {
        components:{
            vHeader, vFooter, vBg, vTool
        }
    }
</script>
