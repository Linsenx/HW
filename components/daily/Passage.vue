<template>
  <div class="passage">
    <div class="passage-title">HelloWorld科技展</div>
    <div class="passage-title-info">
      <span class="passage-title-info-author"><i class="fa fa-id-card"></i>HelloWorld</span>
      <span class="passage-title-info-clicks"><i class="fa fa-users"></i>999+</span>
    </div>
    <div class="passage-content">
      <img src="~/assets/img/daily_details6.png" class="topimg">
      <p>2017年12月，全国大学生“挑战杯”比赛落下帷幕，越来越多的科技类竞赛在我校越发受人关注，因此，正值社团盛典活动期间，HelloWorld与其他五个社团作为科技类社团参与本次社团盛典的以“走进科技舞台，书写大学新生活”为主题的科技游园活动。</p>
      <p>相约2017年的东至，12月25日，在冬日难得的好天气去五四广场看HelloWorld科技展。社员们早早的做好准备，搭建据点，配置器材，这次，我们准备展示给大家的是有趣的体感游戏，即体验者者要用肢体动作来进行相关游戏操作，大批群众，其中包括许多国际友人都被吸引而来，纷纷表示这是一次愉快的体验。游戏过后，体验者还得到了惊喜——由HelloWorld精心准备的奖品。</p>
      <p>令人意外的是，现场还有身怀特技，会打太极的Jerry鼠出没。本次活动，通过leap motion输出了社团文化，使我校师生对HelloWorld社团有了更深的了解；也奠定了我社与社联，校科协三方友谊源远流长的基调。</p>
    </div>
    <div class="passage-comments"><Comment/></div>
  </div>
</template>

<script>
  import Comment from "~/components/daily/Comment.vue"

  export default {
    components: {
      Comment
    }
  }
</script>

<style lang="scss" scoped>
  @import "assets/css/main.scss";
  .passage {
    width: SC(1000);
    min-height: SC(1200);
    padding: 20px;
    //background: aliceblue;
    .passage-title {
      color: #3b3e43;
      font-size: SC(30);
      letter-spacing: 3px;
      margin-bottom: 10px;
    }
  }

  .passage-title-info {
    margin-bottom: 20px;
    font-family: OpenSansRegular;
    i {
      color: #505256;
      font-size: SC(22);
      margin-right: 5px;
    }
    span {
      color: #bca480;
      font-size: 12px;
      margin-right: 20px;
    }
  }

  .passage-content {
    width: SC(900);
    margin: 0 auto;
    .topimg {
      width: SC(600);
      margin: 0 15px 15px 0;
      display: block;
      margin: 20px auto;
    }
    p {
      text-indent: 2em;
      letter-spacing: 1px;
      line-height: 30px;
      margin-bottom: 5px;
    }
  }

</style>
