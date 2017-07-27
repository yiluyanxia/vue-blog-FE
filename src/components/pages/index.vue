<template>
  <div class="index">
    <!-- <div class="bgbox"></div> -->
    <Carousel v-model="value1" :autoplay="true" :height="500" arrow="always" class="bannerbox">
      <Carousel-item>
        <div class="banner-item">
          <div>
            <h3>走在冷风中</h3>
            <p>熄灭的火熄灭的火</p>
            <span>more&gt;&gt;</span>
          </div>
          <div><img class="banner1" src="../../assets/images/banner1.jpg"></div>
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="banner-item">
          <div>
            <h3>走在冷风中</h3>
            <p>熄灭的火熄灭的火</p>
            <span>more&gt;&gt;</span>
          </div>
          <div><img class="banner1" src="../../assets/images/banner2.jpg"></div>
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="banner-item">
          <div>
            <h3>走在冷风中</h3>
            <p>熄灭的火熄灭的火</p>
            <span>more&nbsp;&gt;</span>
          </div>
          <div><img class="banner1" src="../../assets/images/banner3.jpg"></div>
        </div>
      </Carousel-item>
    </Carousel>
    <div class="container">
      <div class="titlebox">
        <h4>种草种草种草种草种草种草</h4>
        <p>对该物品的占有欲蓬勃生长。“种草”不仅是简单的一个词<br/>与之相关联的还包括“拔草”“长草”“草族”“自生草”等一系列“草”系词语。</p>
        <span>more&nbsp;&gt;</span>
      </div>
      <div class="content">
        <div class="item">321</div>
        <div class="item">321</div>
        <div class="item">321</div>
        <div class="item">321</div>
      </div>
      <!--content end-->
    </div>
    <!--container end-->
    <div class="waterfall">
      <div class=""></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      value1: 0

    }
  }
}
</script>

<style >

</style>
