<template>
  <div class="articlelist articletable">
    <div class="title">
      <h3>{{getArticle.title}}</h3>
    </div>
    <div class="articlecont" v-html="getArticle.content">
      <!-- {{article.content}} -->

    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      aid: this.$route.params.aid,

    }
  },
  computed:{
    ...mapGetters({
      getArticle:'getArticle',
    }),
    ...mapActions({
      anArticle:'anArticle'
    })


  },
  methods: {
    editAticle(index){

    },
    removeAticle(index){
      this.articles.splice(index, 1);
    }


  },
  mounted() {
    this.$store.dispatch('anArticle',this.aid)

  }
}
</script>
