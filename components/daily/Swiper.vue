<template>
  <div class="swiper">
    <div class="swiper-arrow-left"></div>
    <div class="swiper-arrow-right"></div>
    <div class="swiper-list">
      <div class="swiper-list-wrap">
        <div :key="index" v-for="(item,index) in items" 
             :class="{'swiper-list-wrap-item': true, 'small': !(index==nowSelected)}"
        >
          <div class="swiper-list-wrap-item-image" @click="switchTo(index)">
            <img :src="item.url">
          </div>
          <div class="swiper-list-wrap-item-content">
            <div class="swiper-list-wrap-item-content-title">{{item.title}}</div>
            <div class="swiper-list-wrap-item-content-description">{{item.desc}}</div>
          </div>
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
      items: [
        {url: require('~/assets/img/daily5.jpg'), title: "HelloWolrd科技展", desc: '2017年12月，全国大学生“挑战杯”比赛落下帷幕，越来越多的科技类竞赛在我校越发受人关注，因此，正值社团盛典活动期间，HelloWorld与其他五个社团作为科技类社团参与本次社团盛典的以“走进科技舞台，书写大学新生活”为主题的科技游园活动。'},
        {url: require('~/assets/img/daily4.jpg'), title: "HelloWolrd冬游活动", desc: '为了促进社团内部和谐，我们开展了HelloWorld冬游活动。通过日租房，成员们走出户外，感受大自然的气息，欣赏一路的美景，减少学习压力的同时保持愉快的心情。'},
        {url: require('~/assets/img/daily2.jpg'), title: "HelloWorld新成员第一次培训", desc: '十月，为了给17招新季加入的新社员们一个全面了解社团整个技术部的机会，所有组长们联合开展了教学，举办了一个所有新社员可以自由参加的讲座。'},
        {url: require('~/assets/img/daily3.png'), title: "HelloWorld新成员第一次培训", desc: ''},
        {url: require('~/assets/img/daily2.jpg'), title: "HelloWorld新成员第一次培训", desc: ''},
        {url: require('~/assets/img/daily1.jpg'), title: "HelloWorld新成员第一次培训", desc: ''},
      ]
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

<style lang="scss" scoped>
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
      background:#f7f7f7;
      box-shadow: 4px 4px 2px #f7f7f7;
      overflow: hidden;
      transition: width .5s ease-in-out;
      &.small {
        width: 150px;
      }      
      .swiper-list-wrap-item-image {
        cursor: pointer;
        float: left;
        width: 225px;
        height: 225px;
        background: #3b3e43;
        img {
          width: 225px; height: 225px;
          filter: grayscale(50%) opacity(100%);
        }
      }
      .swiper-list-wrap-item-content {
        position: absolute;
        left: 225px;
        width: 555px - 225px;
        padding: 15px;
        .swiper-list-wrap-item-content-title {
          color: #666;
          font-size: SC(25);
          font-weight: bold;
          text-align: center;
          padding-bottom: 2px;
          margin-bottom: 15px;
          border-bottom: 1px solid #d2d2d2;
        }
        .swiper-list-wrap-item-content-description {
          text-indent: 2em;
          line-height: 20px;
          letter-spacing: 1px;
        }
      }
    }
  }
</style>
