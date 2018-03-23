<template>
  <div class="achievement">
    <div class="achievement-title">
      <p class="achievement-title-english">ACHIEVEMENT</p>
      <p class="achievement-title-chinese">社团成就</p>
    </div>
    <div class="achievement-list">
      <div class="achievement-list-item">
        <div class="achievement-list-item-image"></div>  
        <div class="achievement-list-item-link">
          JOHN SNOW
          <p>PROJECT MANAGER</p>
        </div>
      </div>
      <div class="achievement-list-item">
        <div class="achievement-list-item-image"></div>  
        <div class="achievement-list-item-link">
          AHAM OHOANM
          <p>ART DIRECTOR</p>
        </div>
      </div>
      <div class="achievement-list-item">
        <div class="achievement-list-item-image"></div>  
        <div class="achievement-list-item-link">
          MARTIN YHAMKD
          <p>WEB DESIGNER</p>
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

  .achievement {
    width: SC(1200); //3*370+2*40 + 10
    margin: 0 auto;
    text-align: center;
    .achievement-title-english {
      font-family: Raleway;
      color: #bca480;
      font-size: SC(16);
      letter-spacing: 3px;
    }
    .achievement-title-chinese {
      color: #3b3e43;
      font-size: SC(40);
      letter-spacing: 3px;
    }
  }

  .achievement-list {
    margin-top: SC(50);
    .achievement-list-item {
      float: left;
      margin-right: SC(40);
      &:nth-child(3) {
        margin-right: 0 !important;
      }
      .achievement-list-item-image {
        width: SC(370);
        height: SC(440);
        background: #ebebeb;
      }
      .achievement-list-item-link {
        margin: SC(50) 0 SC(100) 0;
        font-size: 13px;
        letter-spacing: 1px;
        p {
          color: #bca480;
          margin-top: SC(5);
        }
      }
    }
  }

</style>
