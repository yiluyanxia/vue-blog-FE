<template>
  <div class="w1280 articledetail">
    <div class="sidebox">
      <Menu :open-names="['0']" width="320" accordion>
        <Submenu :name="index" v-for="(item, index) in getTagList.tagList" :key="item.tagName">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            {{ item.tagName }}   {{ index }}
          </template>
          <Menu-item name="0-2">记一次难忘的事</Menu-item>
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
import { mapGetters , mapActions } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed:{
    ...mapGetters({
      getTagList:'getTagList'
    }),
    ...mapActions({
      tagList:'tagList'
    })

  },
  methods: {


  },
  mounted() {
    this.$store.dispatch('tagList');
  }
}
</script>
