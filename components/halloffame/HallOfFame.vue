<template>
  <div class="halloffame">
    <div class="halloffame-title">
      <p class="halloffame-title-english">HALL OF FAME</p>
      <p class="halloffame-title-chinese">名人堂</p>
    </div>
    <div class="halloffame-content">
      <div class="halloffame-content-image"></div>
      <div class="halloffame-content-description">
        <p>我是2013年来到杭电的，加入HelloWorld更是2014年的事情了，我曾是社团行政部副部后来也成为了HelloWorld的社长。HELLOWORLD带给了我许多精彩的回忆。</p>
        <p>HELLOWORLD对我的整个一生都影响很大，它改变了我的大学，更改变了我的生活模式，如果没有HelloWorld我可能还是一个在大学里面无所事事，每天逃课睡觉的学生。在HelloWorld的时光是我大学里面最充实的。</p>
        <p>而对于我，大学最有意义也最难忘的事情当是加入HelloWorld，还有就是举办hackathon吧。记得第二次举办hackathon当是情况是十分困难的，因为就在那前一周，我们的资金还没有筹够，还有一个几万块的缺口，我急得边哭边想办法，但是还好熬过来了，也非常感谢吴老师一直对HW的支持。而现在看来，这也算是一个很不错的经历，当你遭遇困境，慌张，哭泣是解决不了问题的，一定一定要冷静下来，和你的伙伴一起思考，有什么地方是你自己一个人没有考虑到的，还有什么事情可以做来解决困境，这都是当我经历过了困境所收获的。</p>
        <p>当然有很多人想问大学是否应该加入社团，加入社团后感觉自己被当做劳务，觉得自己做了很多事情没有收获，这其实都是我们有过的，在HW做的所有事情都对我现在的工作有帮助（如果觉得大学很迷茫，加入一个社团做一些事情并且坚持下去一定没有错）。相信一切的一切都是一粒种子，要等到它生根发芽绝不是一朝一夕的事情，而且在做事情与人谈论的过程中，你的口才你的处事待人都在提升着。</p>
        <p>现在的我是依图医疗的市场专员，我的这个岗位其实比较宽泛，我去过3个公司的市场部，不同的公司的体验也是绝对不一样的，不过MKT部门是一个很酷的部门，它掌握行业最新的资讯，并且有预判能力。</p>
      </div>
    </div>
    <div class="halloffame-switches">
      <div class="halloffame-switches-item"></div>
      <div class="halloffame-switches-item"></div>
      <div class="halloffame-switches-item"></div>
      <div class="halloffame-switches-item"></div>
      <div class="halloffame-switches-item"></div>
      <div class="halloffame-switches-item"></div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

  .halloffame {
    width: 1280px;
    margin: 0 auto;
    padding-top: SC(110);
    text-align: center;
    .halloffame-title-english {
      font-family: Raleway;
      color: #bca480;
      font-size: SC(16);
      letter-spacing: 3px;
    }
    .halloffame-title-chinese {
      color: #3b3e43;
      font-size: SC(40);
      letter-spacing: 3px;
    }
  }

  .halloffame-content {
    width: SC(1120);
    margin: 0 auto;
    .halloffame-content-image {
      width: SC(1120);
      height: SC(637);
      margin: 35px 0 35px 0;
      background: #3b3e43;
    }
    .halloffame-content-description {
      text-align: left;
      padding-bottom: 50px;
      p {
        text-indent: 2em;
        line-height: 25px;
        margin-bottom: SC(20);
      }
    }
  }

  .halloffame-switches {
    width: (210+2)*6px;
    margin: 0 auto;
    .halloffame-switches-item {
      float: left;
      width: 210px;
      height: SC(330);
      background: #3b3e43;
      margin: 0 1px 2px 1px;
    }
  }

</style>
