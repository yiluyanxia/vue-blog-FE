<template>
  <div class="articletag articletable">
    <div class="title">
      <h3>标签</h3>
    </div>
    <Table border :columns="tagColumns" :data="getTagList.tagList"></Table>
    <!-- <Page :total="getTagList.tagList.length" :page-size="showNum" :current="1" @on-change="changePage"></Page> -->
    <Modal v-model="tagEditModal" width="360"  title="修改标签">
      <div style="text-align:center">
        <Input v-model="tag.tagName" placeholder="请输入标签" style="width: 300px"></Input>
      </div>
      <div slot="footer">
        <Button @click="cancel">取消</Button>
        <Button type="primary"  @click="updateTagSub">确认</Button>
      </div>
    </Modal>

  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'
export default {
  data () {
    return {
      tag:{
        tagName:''
      },
      tagEditModal:false,
      tagColumns: [
        {
          title: '标签',
          key: 'tagName'
          // width: 200,
       },
       {
         title: 'ID',
         key: '_id'
         // width: 200,
      },
       {
          title: '创建时间',
          key: 'created'
          // width: 200
       },
       {
          title: '操作',
          key: 'action',
          // width: 150,
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
                            this.showModal(params.index)
                            // this.tagEditModal = true;
                              // this.editTag(params.index)
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
                              this.removeTag(params.index)
                          }
                      }
                  }, '删除')
              ]);
          }
      }
  ],
      showNum:2,
      currentPage:1,
    }
  },
  computed:{
    ...mapGetters({
      getTagList:'getTagList',
      getTagDelete:'getTagDelete',
    }),
    ...mapActions({
      tagList:'tagList',
      deleteTag:'deleteTag',
      updateTag:'updateTag'
    })
  },
  methods: {
    showModal(index){
      this.tagEditModal = true;
      this.tag.tagName = this.getTagList.tagList[index].tagName;
      this.tag.id = this.getTagList.tagList[index]._id;
    },
    cancel(){
      this.tagEditModal = false;
    },
    // editTag (index) {
    //   this.$router.push({ name: 'tagEdit', query: {id: this.getTagList.tagList[index]._id}})
    // },
    updateTagSub (index){
      this.$store.dispatch('updateTag', this.tag);
    },
    removeTag (index) {
      this.$Modal.confirm({
        title: '删除',
        content: '<p>点击确定删除标签</p>',
        onOk: () => {
          const id = this.getTagList.tagList[index]._id
          console.log(id);
          this.$store.dispatch('deleteTag',id);
          this.getTagList.tagList.splice(index, 1);
          this.$Message.success('删除成功');
        },
        onCancel: () => {
            this.$Message.info('取消删除');
        }
      });
    },
  },
  mounted() {
    this.$store.dispatch('tagList');

  }
}
</script>
