<template>
  <div class="swiper-container">
    <div class="swiper">
      <ul :style="{marginLeft: position + '%'}">
        <li class="img0"></li>
        <li class="img1"></li>
        <li class="img2"></li>
        <li class="img3"></li>
      </ul>
      <div v-if="nowSelceted == 1" class="swiper-larrow disable"></div>
      <div v-else class="swiper-larrow" @click="slideToLeft()"></div>

      <div v-if="nowSelceted == itemNums" class="swiper-rarrow disable"></div>
      <div v-else class="swiper-rarrow" @click="slideToRight()"></div>

      <div class="swiper-switch">
        <template v-for="i in itemNums">
          <span :key="i" v-if="i == nowSelceted" 
                class="swiper-switch-item now"></span>
          <span :key="i" v-else 
                class="swiper-switch-item"
                @click="moveToPage(i,true)"></span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created: function() {
      this.resetTimer()
    },
    data: function() {
      return {
        position: 0,    //margin-left
        itemNums: 2,    //轮播图图片总数
        nowSelceted: 1, //当前选择的图片号(1~itemNums)
      }
    },
    methods: {
      resetTimer: function() {
        clearInterval(this.timer)
        this.timer = setInterval(()=> {
          if (this.nowSelceted == this.itemNums) this.moveToPage(1, false)
          else  this.moveToPage(this.nowSelceted + 1, false)
        }, 10000);
      },
      moveToPage: function(next, reset) {
        if (reset) this.resetTimer()
        let next_position = (next - 1) * -100
        this.position += next_position - this.position
        this.nowSelceted = next
      },
      slideToLeft: function() {
        this.moveToPage(this.nowSelceted - 1, true)
      },
      slideToRight: function() {
        this.moveToPage(this.nowSelceted + 1, true)
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/css/main.scss";

  .swiper-container {
    margin: 0 auto;
  }

  .swiper {
    position: relative;
    height: SC(637);
    overflow: hidden;
    //box-shadow: 0px 5px 10px #888888;
    ul {
      width: 400%;
      position: absolute;
      float: left;
    }
    li {
      float: left;
    }
    .swiper-rarrow {
      position: absolute;
      top: 40%;
      right: 100px;
      width: 30px;
      height: 30px;
      background: #bca480;
      &.disable {
        background: #3b3e43;
      }
      &:hover {
        cursor: pointer;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 10px;
        top: 11px;
        width: 8px;
        height: 8px;
        border-top: 2px solid white;
        border-right: 2px solid white;
        transform: rotate(45deg);
      }
    }
    .swiper-larrow {
      position: absolute;
      top: 40%;
      left: 100px;
      width: 30px;
      height: 30px;
      background: #bca480;
      &.disable {
        background: #3b3e43;
      }
      &:hover {
        cursor: pointer;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 13px;
        top: 11px;
        width: 8px;
        height: 8px;
        border-top: 2px solid white;
        border-right: 2px solid white;
        transform: rotate(-135deg);
      }
    }
    .swiper-switch {
      margin: 0 auto;
      position: absolute;
      bottom: 20px;
      width: 100%;  
      text-align: center;
      .swiper-switch-item {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 5px;
        border-radius: 100%; 
        border: 1px solid #bca480;
        background: #bca480;
        &.now {
          background: transparent;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .img0 {
    border: none;
    width: 25%;
    height: SC(637);
    background-size: 1280px SC(637);
    background-image: url("~/assets/img/bg1.jpg");
  }
  .img1 {
    border: none;
    width: 25%;
    height: SC(637);
    background-size: 1280px SC(637);
    background-image: url("~/assets/img/bg2.jpg");
  }
  .img2 {
    border: none;
    width: 25%;
    height: SC(637);
    background: rgb(45, 116, 6);
  }
  .img3 {
    border: none;
    width: 25%;
    height: SC(637);
    background: rgb(76, 44, 61);
  }
</style>