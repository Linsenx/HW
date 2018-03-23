<template>
  <div class="container">
    <div class="warpper">
      <Header/>
      <Banner/>
      <LatestNews/>
    </div>
    <FooterBig/>
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
  }
}
</script>

<style>

</style>
