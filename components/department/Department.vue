<template>
  <div class="department">
    <div class="department-title">
      <p class="department-title-english">DEPARTMENT</p>
      <p class="department-title-chinese">各部门介绍</p>
    </div>
    <div class="department-list">

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">主席团</p>
          <p class="department-list-item-title-english">Presidium</p>
        </div>
        <div class="department-list-item-content lh">
          <p>HelloWorld社团最高领导者。主要职责是全面负责HelloWorld社团工作。做好每一年度的工作计划，制订每学期的工作安排。检查各部工作情况，及时总结HelloWorld社团工作。定期主持召开HelloWorld社团主席团和全体会议，对各部工作进行评议。学期终给各部做工作鉴定，进行工作考核。研究HelloWorld社团的工作和发展方向。</p>
        </div>
      </div>

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">行政部</p>
          <p class="department-list-item-title-english">Administration department</p>
        </div>
        <div class="department-list-item-content">
          <p>HelloWorld社团当中至关重要的管理单位，直接协助主席团完成各项工作。主要职责是根据主席团的指示，组织协调部门共同办理的综合工作，并直接与各个部门联系，为综合活动开展做好准备工作。负责摆摊，综合性活动的人员安排；以HelloWorld社团名义发布重大事项的布告、通告；负责外校学生会，外校社团，企业赞助的交流工作；组织社团内部各项娱乐活动，制定社团不定期的出游计划。</p>
          <p>下设运营组： HelloWorld社团微信公众号的管理者，写得了文案，卖得了萌，既能小清新，又能无下限。</p>
        </div>
      </div>

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">产品组</p>
          <p class="department-list-item-title-english">PM</p>
        </div>
        <div class="department-list-item-content lh">
          <p>如果你有新奇的点子和活络的思想，总想着设计什么改变生活的应用，那么来产品就没错。在这里，我们会探讨每一个想法背后的可行性与实用性，然后进行优化设计和改进，进而做出产品的模型，将脑子里的想法完完全全的展示出来。</p>
        </div>
      </div>      

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">安卓组</p>
          <p class="department-list-item-title-english">ANDROID</p>
        </div>
        <div class="department-list-item-content">
          <p>如果你有一部安卓手机，那你每天的生活都离不开功能强大的安卓APP。</p>
          <p>想知道它们是怎么创造出来的吗？</p>
          <p>想享受编写APP的乐趣吗？</p>
          <p>如果你有梦想，能坚持，想编写出属于自己的APP，安卓组欢迎你！</p>
          <p>在这里你能学到有趣的安卓知识，与有着相同兴趣的小伙伴一起学习交流，参加竞赛。我们有一整个强大活跃的团队，安卓大牛的学长学姐，以及优秀的指导老师，加入我们，这些会是你安卓成神之路上强有力的跳板！</p>
        </div>
      </div>

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">IOS组</p>
          <p class="department-list-item-title-english">IOS</p>
        </div>
        <div class="department-list-item-content lh">
          <p>它看起来赏心悦目，用起来同样得心应手。它蕴含先进的技术，始终保持卓越。</p>
          <p>它吸引你去发掘每款内置 app 和各项功能。无论你在做什么，你所触及的一切，无不简单、直观、充满乐趣。</p>
          <p>这就是iOS，让你的设备，更多才，让你，更多艺。</p>
        </div>
      </div>

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">WEB端组</p>
          <p class="department-list-item-title-english">WEB</p>
        </div>
        <div class="department-list-item-content lh">
          <p>Web端分前端和后端，前端指的是用户可以看得见碰得着的东西，包括Web页面的结构、Web的外观视觉表现以及Web层面的交互实现，后端更多的是与数据库进行交互以处理相应的业务逻辑，需要考虑的是如何实现功能、数据的存取、平台的稳定性与性能等。</p>
          <p>加入Web端，你将会学习到如何制作一个完整的网页喔。</p>
        </div>
      </div>      

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "assets/css/main.scss";
  .department {
    width: SC(1150);
    padding: SC(110) 0 SC(110) 0;
    margin: 0 auto;
    text-align: center;
    .department-title-english {
      color: #bca480;
      font-size: SC(16);
      letter-spacing: 3px;
    }
    .department-title-chinese {
      color: #3b3e43;
      font-size: SC(40);
      letter-spacing: 3px;
    }
  }

  .department-list {
    width: SC(1320); //3*420+3*20
    height: SC(450+150+150); //2*200+1*20
    margin-top: SC(60);
    text-align: left;
    .department-list-item {
      float: left;
      width: SC(420);
      height: SC(200+150+50);
      margin-top: SC(20);
      margin-right: SC(20);
      //border: 1px solid yellowgreen;
      .department-list-item-title {
        margin-bottom: SC(10);
        .department-list-item-title-chinese {
          font-size: SC(20);
          font-weight: bold;
          letter-spacing: 2px;
        }
        .department-list-item-title-english {
          font-size: 12px;
          color: #bca480;
          letter-spacing: 1px;
        }
      }
      .department-list-item-content {
        font-size: 12px;
        line-height: SC(24);
        text-indent: 2em;
        letter-spacing: 1px;
        &.lh {
          line-height: SC(30);
        }
      }
    }
  }
</style>

