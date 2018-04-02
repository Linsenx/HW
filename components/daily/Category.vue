<template>
  <div class="category">
    <div class="category-title">事件目录</div>
    <ul>
      <li>科技展</li>
      <li>冬游活动</li>
      <li>新成员第一次培训</li>
      <li>CNCC活动圆满落幕</li>
      <li>HelloWorld新社员首次聚会</li>
      <li>CCF CSP认证成功举办</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "assets/css/main.scss";

  .category {
    width: SC(450);
    margin-top: 10px;
    padding: 20px;
    .category-title {
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
    ul {
      li {
        letter-spacing: 1px;
        line-height: SC(60);
        border-bottom: 1px solid #d7d7d7;
      }
    }
  }

</style>
