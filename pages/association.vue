<template>
  <div class="container">
    <div class="warpper">
      <Header :showTopBar="false" :showBreadcrumbs="true" :nowSelected="0"/>
      <History/>
      <Achievement/>
      <NumberBar/>
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

export default {
  components: {
    Header,
    History,
    Achievement,
    NumberBar,
    FooterSmall,
  }
}
</script>

<style>

</style>
