<template>
  <div class="outer-container">
    <div class="container">
      <Header/>
      <div class="warpper">
        <Banner/>
        <LatestNews/>
      </div>
      <FooterBig/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/utils/Header.vue'
import FooterBig from '~/components/utils/FooterBig.vue'
import Banner from '~/components/homepage/Banner.vue'
import LatestNews from '~/components/homepage/LatestNews.vue'


export default {
  components: {
    Header,
    Banner,
    LatestNews,
    FooterBig,
  },
  methods: {
    showLoginBox: function(status) {
      this.displayLoginBox = status
      if(status) this.displayRegisterBox = !status
    },
    showRegisterBox: function(status) {
      this.displayRegisterBox = status
      if(status) this.displayLoginBox = !status
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";
</style>
