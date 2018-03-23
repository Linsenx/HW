<template>
  <div>
    <div class="latestnews">
      <div class="latestnews-title">
        <i class="fa fa-newspaper-o"></i>
        <p>近期事件</p>
      </div>
      <div class="latestnews-content">
        <div class="latestnews-content-item">
          <div class="latestnews-content-item-content">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
          <div class="latestnews-content-item-image"></div>
        </div>
        <div class="latestnews-content-item">
          <div class="latestnews-content-item-content">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
          <div class="latestnews-content-item-image"></div>
        </div>
        <div class="latestnews-content-item">
          <div class="latestnews-content-item-content">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
          <div class="latestnews-content-item-image"></div>
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
          font-family: OpenSansRegular;
        }
        .latestnews-content-item-image {
          height: SC(220);
          background: #3b3e43;
        }
      }
    }

  }

</style>