<template>
  <div class="swiper">
    <div class="swiper-arrow-left"></div>
    <div class="swiper-arrow-right"></div>
    <div class="swiper-list">
      <div class="swiper-list-wrap">
        <div :key="i" v-for="(i,index) in itemNum" 
             :class="{'swiper-list-wrap-item': true, 'small': !(index==nowSelected)}"
        >
          <div class="swiper-list-wrap-item-image" @click="switchTo(index)">
            <img src="~/assets/img/latest1.png">
          </div>
          <div class="swiper-list-wrap-item-content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemNum: 7,
      nowSelected: 0,
      switching: false, //是否正在滑动
    }
  },
  methods: {
    switchTo: function(index) {
      if (this.switching) return
      this.switching = true
      this.nowSelected = index
      setTimeout(()=>{ 
        this.switching = false 
      }, 500)
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

  .swiper {
    width: SC(1450);
    height: SC(370);
    padding: 10px;
    border-bottom: 1px solid #d7d7d7;
  }

  .swiper-list {
    width: SC(1330);
    height: SC(350);
    margin: 0 auto; 
    overflow: hidden;
  }
  
  .swiper-list-wrap {
    width: 999em;
    .swiper-list-wrap-item {
      position: relative;
      float: left;
      width: 555px;
      height: 225px;
      margin: 0 5px;
      background:lemonchiffon;
      overflow: hidden;
      transition: width .5s ease-in-out;
      .swiper-list-wrap-item-image {
        cursor: pointer;
        width: 150px;
        height: 225px;
        background: #3b3e43;
        img {
          width: 150px; height: 225px;
        }
      }
      &.small {
        width: 150px;
      }
    }
  }
</style>
