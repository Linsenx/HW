<template>
  <div class="quoteofday">
    <div class="quoteofday-title">今日名言</div>
    <div class="quoteofday-content">
      近代科学的目标是什么？就是探求真理。科学方法可以随时随地而改换，这科学目标，蕲求真理也就是科学的精神，是永远不改变的。
      <div class="author">
        —— 竺可桢
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "assets/css/main.scss";

  .quoteofday {
    width: SC(450);
    padding: 20px;
    .clear {
      clear: both;
    }
    .quoteofday-title {
      font-size: SC(22);
      font-weight: bold;
      letter-spacing: 1px;
      &::after {
        content: "";
        width: 60px;
        display: block;
        margin-top: 5px;
        margin-bottom: 15px;
        border-bottom: 2px solid #bca480;
      }
    }
    .quoteofday-content {
      line-height: SC(35);
      .author {
        margin-top: 15px;
        float: right;
      }
    }
  }

</style>
