<template>
  <div class="daily">
    <div class="daily-title">
      <span class="chinese">社团日记</span>
      <span class="english">Association Daily</span>
    </div>
    <div class="daily-swiper"><swiper/></div>
  </div>
</template>

<script>
import Swiper from '~/components/daily/Swiper.vue'

export default {
  components: {
    Swiper
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

  .daily {
    width: SC(1600);
    height: 1500px;
    padding: 50px;  
    margin: 0 auto;
    //background: rgba(red, .2);
    .daily-title {
      font-size: SC(30);
      letter-spacing: 2px;
      .chinese {
        padding-right: 15px;
        border-right: 1px solid #d7d7d7;
      }
      .english {
        padding-left: 15px;
        font-family: OpenSansRegular;
      }
      padding: 0 0 5px 80px;
      border-bottom: 1px solid #d7d7d7;
    }
  }
</style>
