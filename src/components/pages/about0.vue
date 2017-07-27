<template>
  <div class="about">
   Count is {{ $store.state}}
   <button @click="increment">+5</button>
   <button @click="decrement">-3</button>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed:{
    ...mapGetters([])

  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])


  },
  mounted() {

  }
}
</script>
