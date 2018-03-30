<template>
  <div class="container">
    <Header :showTopBar="false" :showBreadcrumbs="true" :nowSelected="0"/>
    <div class="warpper">
      <History/>
      <Achievement/>
      <NumberBar/>
      <Timeline/>
    </div>
    <FooterSmall/>
  </div>
</template>

<script>
import Header from '~/components/utils/Header.vue'
import FooterSmall from '~/components/utils/FooterSmall.vue'
import History from '~/components/association/History.vue'
import Achievement from '~/components/association/Achievement.vue'
import NumberBar from '~/components/association/NumberBar.vue'
import Timeline from '~/components/association/Timeline.vue'

export default {
  components: {
    Header,
    History,
    Achievement,
    NumberBar,
    Timeline,
    FooterSmall,
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

</style>
