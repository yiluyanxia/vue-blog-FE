<template>
  <div class="about">
   Count is {{ count}}
   <button @click="increment">+1</button>
   <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed:{
    ...mapGetters([
      'count'
    ])

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
