<template>
  <div class="achievement">
    <div class="achievement-title">
      <p class="achievement-title-english">ACHIEVEMENT</p>
      <p class="achievement-title-chinese">社团成就</p>
    </div>
    <div class="achievement-list">
      <div class="achievement-list-item">
        <div class="achievement-list-item-image">
          <img src="~/assets/img/achievement1.png">  
        </div>  
        <div class="achievement-list-item-link">
          <p>荣获四星级社团评价</p>
        </div>
      </div>
      <div class="achievement-list-item">
        <div class="achievement-list-item-image">
          <img src="~/assets/img/achievement2.jpg">
        </div>  
        <div class="achievement-list-item-link">
          <p>多所合作院校</p>
        </div>
      </div>
      <div class="achievement-list-item">
        <div class="achievement-list-item-image">
          <img src="~/assets/img/achievement3.jpg">
        </div>  
        <div class="achievement-list-item-link">
          <p>多家合作企业</p>
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
    width: SC(3*400+2*40+10); //3*370+2*40 + 10
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
        width: SC(400);
        height: SC(300);
        background: #ebebeb;
        img {
          width: SC(400);
          height: SC(300);
          border: 1px solid #ccc;
        }
        box-shadow: 3px 3px 5px #ccc;
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
