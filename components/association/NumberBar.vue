<template>
  <div class="numberbar">
    <div class="numberbar-list">
      <div class="numberbar-list-item">
        <p class="numberbar-list-item-icon"><i class="fa fa-calendar-o"></i></p>
        <p class="numberbar-list-item-number">139</p>
        <p class="numberbar-list-item-description">SATISFIED CUSTOMERS</p>
      </div>
      <div class="numberbar-list-item">
        <p class="numberbar-list-item-icon"><i class="fa fa-clock-o"></i></p>
        <p class="numberbar-list-item-number">24</p>
        <p class="numberbar-list-item-description">SATISFIED CUSTOMERS</p>
      </div>
      <div class="numberbar-list-item">
        <p class="numberbar-list-item-icon"><i class="fa fa-gear"></i></p>
        <p class="numberbar-list-item-number">1127</p>
        <p class="numberbar-list-item-description">SATISFIED CUSTOMERS</p>
      </div>
      <div class="numberbar-list-item">
        <p class="numberbar-list-item-icon"><i class="fa fa-book"></i></p>
        <p class="numberbar-list-item-number">253</p>
        <p class="numberbar-list-item-description">SATISFIED CUSTOMERS</p>
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

  .numberbar {
    clear: both;
    position: relative;
    height: SC(420);
    background: #3b3e43;
    margin-bottom: SC(50);
    .numberbar-list {
      position: absolute;
      left: 0; right: 0; top: 0; bottom: 0;
      margin: auto;
      width: SC(300*4);
      height: SC(200);
      text-align: center;
      .numberbar-list-item {
        float: left;
        width: SC(300);
        .numberbar-list-item-icon {
          color: #bca480;
          font-size: SC(30);
        }
        .numberbar-list-item-number {
          color:#ffffff;
          font-size: SC(72);
          font-family: OpenSansLight;
          letter-spacing: 9px;
        }
        .numberbar-list-item-description {
          color: #bca480;
          font-size: 12px;
          font-family: OpenSansBold;
          letter-spacing: 1px;
        }
      }
    }
  }
</style>
