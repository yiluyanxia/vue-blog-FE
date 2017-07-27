<template>
  <div class="articlelist articletable">
    <div class="title">
      <h3>文章列表</h3>
    </div>
    <Table border :columns="tagColumns" :data="getArticleList.alist"></Table>
  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'

export default {
  data () {
    return {
      tagColumns: [
        {
          title: '标题',
          key: 'title'
       },
       {
         title: '标签',
         key: 'tag'
      },
       {
          title: '发布时间',
          key: 'created'
       },
       {
          title: '操作',
          key: 'action',
          align: 'center',
          render: (h, params) => {
              return h('div', [
                  h('Button', {
                      props: {
                          type: 'primary',
                          size: 'small'
                      },
                      style: {
                          marginRight: '5px'
                      },
                      on: {
                          click: () => {
                              this.editArticle(params.index)
                          }
                      }
                  }, '编辑'),
                  h('Button', {
                      props: {
                          type: 'error',
                          size: 'small'
                      },
                      on: {
                          click: () => {
                              this.removeAticle(params.index)
                          }
                      }
                  }, '删除')
              ]);
          }
      }
  ],

    }
  },
  computed:{
    ...mapGetters({
      getArticleList:'getArticleList'
    }),
    ...mapActions({
      articleList:'articleList',
      deleteArticle:'deleteArticle'
    })

  },
  methods: {
    editArticle(index){
      this.$router.push({ name: 'articleUpdate', query: {id: this.getArticleList.alist[index]._id}})
    },
    removeAticle(index){
      this.$Modal.confirm({
        title: '删除',
        content: '<p>点击确定删除标签</p>',
        onOk: () => {
          const id = this.getArticleList.alist[index]._id
          console.log(id);
          this.$store.dispatch('deleteArticle',id);
          this.getArticleList.alist.splice(index, 1);
          this.$Message.success('删除成功');
        },
        onCancel: () => {
            this.$Message.info('取消删除');
        }
      });
    },
    loadArticle(){

    }


  },
  mounted() {
    this.$store.dispatch('articleList');
  }
}
</script>
