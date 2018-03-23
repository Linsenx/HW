<template>
  <div class="history">
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script> -->
    <div class="history-title">
      <p class="history-title-english">HISTORY</p>
      <p class="history-title-chinese">社团历史</p>
    </div>
    <div class="history-content">
      <transition-group
        @enter="dynamicsEnter"
        :css="false"
      >
        <template v-for="(history,k) in historyInfo"> 
          <div :key="history.year + k" v-if="history.year == nowSelectedYear" class="history-content-list">
            <template v-for="(event,i) in getHistoryInfo(history.year)"> 
              <div :key="history.year + i" class="history-content-list-item">
                <p class="history-content-list-item-year">{{event.year}}</p>
                <p v-for="(content,j) in event.contents" :key="j" class="history-content-list-item-event">{{content}}</p>
              </div>
            </template>
          </div>
        </template>
      </transition-group>


    </div>
    <div class="history-switches">
      <template  v-for="data in historyInfo">
        <div :key="data.id" class="history-switches-item">
          <template v-if="data.id == nowSelected">
            <div class="history-switches-item-button-outer selected">
              <div class="history-switches-item-button selected"><i :class="'fa fa-' + data.icon"></i></div>
              <span class="history-switches-item-button-year selected">{{data.year}}</span>
            </div>
          </template>
          <template v-else>
            <div @click="swichTo(data)" class="history-switches-item-button-outer">
              <div class="history-switches-item-button"><i :class="'fa fa-' + data.icon"></i></div>
              <span class="history-switches-item-button-year">{{data.year}}</span>
            </div>
          </template>

          <template v-if="data.id+1 < switchNums">
            <span v-if="nowSelected-1 <= data.id && data.id < nowSelected+1" class="history-switches-item-line selected"></span>
            <span v-else class="history-switches-item-line"></span>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      switchNums: 6,
      nowSelected: 1,
      nowSelectedYear: 2015,
      historyInfo: [
        {id: 0, enable: 1, icon: 'birthday-cake', year: '2014', content: '2014.04.26#与杭州Google开发者社区（GDG）共同举办“Google I/O 直播之夜”|'},
        {id: 1, enable: 1, icon: 'book', year:'2015', content: '2015.01.05#成立浙江省高校微联盟，包含全省60家高校的72个微信公众号|2015.04.18#成立杭州首家跨境电商O2O体验中心|2015.05.23#协办百事可乐“把乐带回家”活动$举办2015浙江省-安控杯Hackathon大赛|2015.06.06#出席2015中国创客西湖峰会|'},
        {id: 2, enable: 1, icon: 'bell-o', year: '2016', content: '2016.04.16#举办2016浙江省-龙驰杯Hackathon大赛|2016.09.20#社会实践团获校级“百优团队”|2016.12.03#与iOS club共同举办APP火花思维体验赛|2016.12.14#与浙江工业大学精弘网络合作交流|'},
        {id: 3, enable: 1, icon: 'diamond', year: '2017', content: '2017.03.21#与腾讯TGP社举办《金刚：骷髅岛》观影|2017.04.02#成立浙江省高校技术类社团联盟|2017.04.13#举办首届高校技术沙龙|'},
        {id: 4, enable: 1, icon: 'cube', year: '2018', content: ''},
        {id: 5, enable: 0, icon: 'cubes', year: '2019', content: ''},
      ]
    }
  },
  methods: {
    getHistoryInfo: function(year) {
      let events = [];
      let content = [];
      for (let i in this.historyInfo) {
        if (this.historyInfo[i].year == year) {
          events = this.historyInfo[i].content.split("|")
        }
      }
      for (let i = 0; i < events.length - 1; ++i) {
        let _array = events[i].split("#")
        let _content = new Object()
        _content.year = _array[0]
        _content.contents = _array[1].split("$")
        content.push(_content)
      }
      return content
    },
    swichTo: function(data) {
      this.nowSelected = data.id
      this.nowSelectedYear = data.year
    },
    dynamicsEnter: function(el, done) {
      el.style.transformOrigin = "40% 50%"
      Velocity(el, {
        opacity: [1, 0.2],
        rotateY: ['0deg', '-90deg'],
        translateX: ['0px', '-500px'],
      }, 1100, [ 200, 15 ])
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

  .history {
    width: SC(1150);
    margin: SC(110) auto;
    text-align: center;
    .history-title-english {
      font-family: Raleway;
      color: #bca480;
      font-size: SC(16);
      letter-spacing: 3px;
    }
    .history-title-chinese {
      color: #3b3e43;
      font-size: SC(40);
      letter-spacing: 3px;
    }
  }

  .history-switches {
    position: relative;
    width: SC(1150);
    height: SC(114);
    .history-switches-line {
      width: SC(1150);
      height: 1px;
      background: #bca480;
    }
    .history-switches-item {
      cursor: pointer;
      .history-switches-item-button-year {
        font-family: OpenSansRegular;
        position: absolute;
        font-size: 12px;
        bottom: 0px;
        left: SC(40);
        bottom: SC(-10);
        &.selected {
          color: #bca480;
        }
      }
      .history-switches-item-button-outer {
        transition: transform 0.3s;
		    transition-timing-function: ease-in-out;
        float: left;
        padding: 10px;
        position: relative;
        width: SC(114);
        height: SC(114);
        border-radius: 100%;
        background: #ffffff;
        transform: scaleX(1) scaleY(1);
        &.selected {
          transform: scaleX(1.4) scaleY(1.4);
        }
      }
      .history-switches-item-button {
        position: absolute;
        width: SC(85);
        height: SC(85);
        line-height: SC(85);
        font-size: SC(25);
        border: 1px solid #3b3e43;
        border-radius: 100%;
        background: #ffffff;
        &.selected {
          color: #bca480;
          border: 1px solid #bca480;
        }
      }
      .history-switches-item-line {
        float: left;
        width: SC(80);
        padding-top: SC(114/2);
        height: 1px;
        border-bottom: 1px solid #3b3e43;
        &.selected {
          border-bottom: 1px solid #bca480;
        }
      }
    }
  }

  .history-content {
    position: relative;
    height: SC(600);
    perspective: 400px;
    .history-content-list {
      position: absolute;
      left: 0; right: 0;
      .history-content-list-item {
        .history-content-list-item-year {
          margin-top: SC(30);
          font-size: SC(18);
        }
        .history-content-list-item-event {
          margin-top: SC(15);
          font-size: SC(24);
        }
        :nth-child(3),:nth-child(4),:nth-child(5),:nth-child(6) { //第二个content开始字体变大，先这样写了
          color: #bca480;
          font-size: SC(36);
        }
      }
    }

  }

  .list-animate-enter-active {
    // animation: turn-in 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) ;
    animation: turn-in  .8s ease-in;
    //transform: rotateY(100deg);
    //transform: scale3d(2,2,2);
  }

  @keyframes turn-in {
    0% {
      opacity: 0;
      transform-origin:20% 50%;
      transform: perspective(600px) rotateY(-75deg) translateX(-200px);
    }
    100% {
      opacity: 1;
      transform-origin:20% 50%;
      transform: perspective(600px) rotateY(0deg) translateX(0px);
    }
  }

  @keyframes turn-out {
    0% {
      opacity: 1;
      transform-origin:80% 50%;
      transform: perspective(600px) rotateY(-75deg) translateX(200px);
    }
    50% {
      opacity: 0.5;
      transform-origin:80% 50%;
      transform: perspective(600px) rotateY(0deg) translateX(0);
    }
    100% {
      opacity: 0;
      transform-origin:80% 50%;
      transform: perspective(600px) rotateY(0deg) translateX(0px);
    }
  }
  .list-animate-leave-active {
   // position: absolute;
    animation: turn-out .0s ease-in;
  }

  // .list-animate-leave-active {
  //   transition: all .8s;
  //   opacity: 0;
  //   position: absolute;
  //   transform: translateX(-1000px) rotateY(-100deg);
  //   //transform: translateX(-100px) scale3d(0.1,0.1,0.1);
  // }
</style>
