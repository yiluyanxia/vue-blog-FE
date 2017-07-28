<template>
  <div class="articletag articletable">
    <div class="title">
      <h3>标签</h3>
    </div>
    <Table border :columns="tagColumns" :data="getTag"></Table>

    <Page :total="tagData.length" :page-size="showNum" :current="1" @on-change="changePage"></Page>

  </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'
export default {
  data () {
    return {
      showNum:2,
      currentPage:1,
      tagColumns: [
        {
          title: '标签',
          key: 'tagName'
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
                              this.show(params.index)
                          }
                      }
                  }, '查看'),
                  h('Button', {
                      props: {
                          type: 'error',
                          size: 'small'
                      },
                      on: {
                          click: () => {
                              this.remove(params.index)
                          }
                      }
                  }, '删除')
              ]);
          }
      }
  ],
  tagData:[]
    // tagData: [
    //     {
    //         tag: '乱七八糟',
    //         time: '2017-07-10',
    //
    //     },
    //     {
    //         tag: '大前端',
    //         time: '2017-07-10',
    //
    //     },
    //     {
    //         tag: '后台',
    //         time: '2017-07-10',
    //
    //     },
    // ]

    }
  },
  computed:{
    ...mapGetters({
      getTag:'getTag'
    })

  },
  methods: {
    show (index) {
        this.$Modal.info({
            title: '用户信息',
            content: `姓名：${this.getTag[index].tagName}<br>年龄：${this.getTag[index].time}`
        })
    },
    remove (index) {
        this.tagData.splice(index, 1);
    },
    changePage () {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.tableData1 = this.mockTableData1();
    }

  },
  mounted() {

  }
}
</script>
