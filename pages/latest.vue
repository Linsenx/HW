<template>
  <div class="container">
    <div class="warpper">
      <Header :showTopBar="false" :showBreadcrumbs="true" :nowSelected="3"/>
    </div>
    <FooterSmall/>
  </div>
</template>

<script>
import Header from '~/components/utils/Header.vue'
import FooterSmall from '~/components/utils/FooterSmall.vue'

export default {
  components: {
    Header,
    FooterSmall,
  }
}
</script>

<style>

</style>
