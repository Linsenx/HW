<template>
  <div class="container">
    <Header :showTopBar="false" :showBreadcrumbs="true" :nowSelected="2"/>
    <div class="warpper">
      <HallOfFame/>
    </div>
    <FooterSmall/>
  </div>
</template>

<script>
import Header from '~/components/utils/Header.vue'
import FooterSmall from '~/components/utils/FooterSmall.vue'
import HallOfFame from '~/components/halloffame/HallOfFame.vue'

export default {
  components: {
    Header,
    HallOfFame,
    FooterSmall,
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

</style>
