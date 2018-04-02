<template>
  <div class="daily">
    <div class="daily-title">
      <span class="chinese">社团日记</span>
      <span class="english">Association Daily</span>
    </div>
    <div class="daily-swiper"><Swiper/></div>
    <div class="daily-passage">
      <div class="daily-passage-leftside">
        <Passage/>
      </div>
      <div class="daily-passage-rightside">
        <Category/>
        <QuoteOfDay/>
        <Photos/>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import Swiper from '~/components/daily/Swiper.vue'
import Passage from '~/components/daily/Passage.vue'
import Category from '~/components/daily/Category.vue'
import QuoteOfDay from '~/components/daily/QuoteOfDay.vue'
import Photos from '~/components/daily/Photos.vue'

export default {
  components: {
    Swiper,
    Passage,
    Category,
    QuoteOfDay,
    Photos,
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

  .daily {
    width: SC(1600);
    min-height: 1500px;
    padding: 50px;  
    margin: 0 auto;
    .clear {
      clear: both;
    }
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
    .daily-passage {
      .daily-passage-leftside {
        float: left;
      }
      .daily-passage-rightside {
        float: right;
      }
    }
  }
</style>
