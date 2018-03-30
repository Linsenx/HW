<template>
  <div class="container">
    <Header :showTopBar="false" :showBreadcrumbs="true" :nowSelected="5"/>
    <div class="warpper">
      <Profile/>
    </div>
    <FooterSmall/>
  </div>
</template>

<script>
import Header from '~/components/utils/Header.vue'
import FooterSmall from '~/components/utils/FooterSmall.vue'
import Profile from '~/components/profile/Profile.vue'

export default {
  components: {
    Header,
    FooterSmall,
    Profile,
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

</style>
