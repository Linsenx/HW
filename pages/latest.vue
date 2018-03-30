<template>
  <div class="container">
    <Header :showTopBar="false" :showBreadcrumbs="true" :nowSelected="3"/>
    <div class="warpper">
      <Daily/>
    </div>
    <FooterSmall/>
  </div>
</template>

<script>
import Header from '~/components/utils/Header.vue'
import FooterSmall from '~/components/utils/FooterSmall.vue'
import Daily from '~/components/daily/Daily.vue'

export default {
  components: {
    Header,
    FooterSmall,
    Daily,
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

</style>
