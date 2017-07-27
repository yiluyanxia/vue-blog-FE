<template>
  <div class="about">
   <h2>pro</h2>
   <product-list></product-list>
   <hr>
   <cart></cart>
  </div>
</template>

<script>
import productList from '../common/productList.vue'
import cart from '../common/cart.vue'

export default {
  components:{productList,cart},
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
