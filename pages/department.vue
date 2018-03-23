<template>
  <div class="container">
    <div class="warpper">
      <Header :showTopBar="false" :showBreadcrumbs="true" :nowSelected="1"/>
      <Department/>
    </div>
    <FooterSmall/>
  </div>
</template>

<script>
import Header from '~/components/utils/Header.vue'
import FooterSmall from '~/components/utils/FooterSmall.vue'
import Department from '~/components/department/Department.vue'

export default {
  components: {
    Header,
    Department,
    FooterSmall,
  }
}
</script>

<style>

</style>
