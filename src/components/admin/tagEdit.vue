<template>
  <div class="articleedit">
    <Input v-model="tag.tagName" placeholder="请输入标签" style="width: 300px"></Input>
    <!-- <Input v-model="getTag.tag.tagName" placeholder="请输入标签" style="width: 300px"></Input> -->
    <!-- <input v-model="tag.tagName" class="txt" type="text" placeholder="请输入标签"> -->
    <Button type="primary" @click="tagSub">添加</Button>
  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'

export default {
  data () {
    return {
      tag:{
        tagName:''
      }

    }
  },
  computed:{
    ...mapGetters({
      getTag: 'getTag'
    }),
    ...mapActions({
      addTag: 'addTag',
      anTag: 'anTag'
    }),

  },
  methods: {
    tagSub(){
      this.$store.dispatch('addTag', this.tag);
      this.$Message.success('添加成功');
      // this.tag.tagName = '';
    }

  },
  mounted() {
    const id = this.$route.query.id;
    console.log(id);
    if(id){
      this.$store.dispatch('anTag', id);
    }

  },
  // watch: {
  //     getTag: function () {
  //         const id = this.$route.query.id;
  //         if(id) {
  //           this.$store.dispatch('anTag', id);
  //         }
  //     }
  // }
}
</script>
