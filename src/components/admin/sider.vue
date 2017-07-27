<template>
  <div class="sider">
    <Menu active-name="1" :active-name="setActive"  @on-select="routeTo">
      <Menu-group title="总览">
        <Menu-item name="dashboard">
          <Icon type="clipboard"></Icon>
          总览
        </Menu-item>
      </Menu-group>
      <Menu-group title="用户">
        <Menu-item name="users">
          <Icon type="person"></Icon>
          用户列表
        </Menu-item>
      </Menu-group>
      <Menu-group title="标签">
        <Menu-item name="tagList">
          <Icon type="ios-pricetags"></Icon>
          标签列表
        </Menu-item>
        <Menu-item name="tagEdit">
          <Icon type="ios-pricetags"></Icon>
          添加标签
        </Menu-item>
      </Menu-group>
      <Menu-group title="文章">
        <Menu-item name="articleList">
          <Icon type="document-text"></Icon>
          文章列表
        </Menu-item>
        <Menu-item name="articleEdit">
          <Icon type="edit"></Icon>
          添加文章
        </Menu-item>
      </Menu-group>
    </Menu>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed:{

    setActive() {
      return this.$route.path.replace('/','');
    }

  },
  methods: {
    routeTo(e) {
      this.$router.push(e);
    }

  },
  mounted() {

  }
}
</script>
