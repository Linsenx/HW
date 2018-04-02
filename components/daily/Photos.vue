<template>
  <div class="photos">
    <div class="photos-title">相关照片</div>
    <div class="photos-list">
      <div class="photos-list-item"><img src="~/assets/img/photos1.png"></div>
      <div class="photos-list-item"><img src="~/assets/img/photos2.png"></div>
      <div class="photos-list-item"><img src="~/assets/img/photos3.png"></div>
      <div class="photos-list-item"><img src="~/assets/img/photos4.png"></div>
      <div class="photos-list-item"><img src="~/assets/img/photos5.png"></div>
      <div class="photos-list-item"><img src="~/assets/img/photos6.png"></div>
      <div class="photos-list-item"><img src="~/assets/img/photos7.png"></div>
      <div class="photos-list-item"><img src="~/assets/img/photos8.png"></div>
      <div class="photos-list-item"><img src="~/assets/img/photos9.png"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "assets/css/main.scss";

  .photos {
    width: SC(450);
    min-height: SC(1200);
    padding: 20px;
    .photos-title {
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
    .photos-list {
      width: SC(450);
      height: SC(450);
      .photos-list-item {
        float: left;
        width: SC(145);
        height: SC(145);
        margin: 1px;
        background: #3b3e43;
        img {
          width: SC(145);
          height: SC(145);
        }
      }
    }
  }

</style>
