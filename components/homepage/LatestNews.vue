<template>
  <div>
    <div class="latestnews">
      <div class="latestnews-title">
        <i class="fa fa-newspaper-o"></i>
        <p>近期事件</p>
      </div>
      <div class="latestnews-content">
        <div class="latestnews-content-item">
          <div class="latestnews-content-item-content">2017年12月，随着全国大学生“挑战杯”比赛落下帷幕，科技类比赛在我们心中留下了深刻的印记。为使同学们更好的感受科技魅力同时展现HelloWorld的风采。冬至，社团盛典活动期间， HelloWorld科技展以“走进科技舞台，书写大学新生活”为主题，在五四广场如期举行。</div>
          <div class="latestnews-content-item-image"><img src="~/assets/img/news1.png"></div>
        </div>
        <div class="latestnews-content-item">
          <div class="latestnews-content-item-content">冬季，在12月2日HelloWorld集体出游。这不仅是一段紧张的学习后的间歇，不仅是一次亲近大自然的机会，也是一个可以熟悉彼此的平台，社员们在此次冬游活动中了解了彼此，也加强了我社的凝结力和魅力。</div>
          <div class="latestnews-content-item-image"><img src="~/assets/img/news2.png"></div>
        </div>
        <div class="latestnews-content-item">
          <div class="latestnews-content-item-content">10月29日，CNCC活动圆满落幕。CNCC,一次思想的碰撞，一次与科技的对话。许多杰出的相关学者齐聚一堂，展示成果，预测趋势，探讨问题……只为更好的未来！我们相信每一次的结束，都预告了下一次的开始，请在此和HelloWorld一起期待！ </div>
          <div class="latestnews-content-item-image"><img src="~/assets/img/news3.png"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted: function() {
      window.sr = ScrollReveal({ origin: 'bottom', reset: true, viewFactor: 0.3, scale: 1 });
      sr.reveal('.latestnews-content-item', { duration: 800 }, 100);
    },
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "assets/css/main.scss";
  .latestnews {
    width: $_containerWidth;
    height: SC(740);
    margin: 0 auto;
    padding: SC(90) 0 SC(70) 0;
    text-align: center;

    .latestnews-title {
      .fa-newspaper-o {
        font-size: SC(35);
        color: #bca480;
      }
      p {
        font-size: SC(40);
        letter-spacing: SC(7);
        color: #3b3e43;
      }
    }

    .latestnews-content {
      width: SC(1230);
      margin: SC(30) auto;
      .latestnews-content-item {
        float: left;
        width: SC(370);
        height: SC(430);
        margin: 0 SC(20) 0 SC(20);

        .latestnews-content-item-content {
          height: SC(210);
          text-align: left;
          text-indent: SC(50);
          font-size: 12px;
          //text-shadow: 1px 1px 1px #ccc;
        }
        .latestnews-content-item-image {
          height: SC(220);
          background: #3b3e43;
          img {
            width: SC(370);
            height: SC(220);
          }
          box-shadow: 2px 2px 3px #ccc;
        }
      }
    }

  }

</style>