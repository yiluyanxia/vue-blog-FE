<template>
  <div class="admwhole">
    <v-sider></v-sider>
    <div class="admwrapper"><router-view></router-view></div>
  </div>
</template>

<script>
    import vSider from './sider.vue';

    export default {
        components:{
            vSider
        }
    }
</script>
