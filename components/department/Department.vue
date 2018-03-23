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
        <div class="department-list-item-content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </div>
      </div>

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">行政部</p>
          <p class="department-list-item-title-english">Administration department</p>
        </div>
        <div class="department-list-item-content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </div>
      </div>

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">产品组</p>
          <p class="department-list-item-title-english">PM</p>
        </div>
        <div class="department-list-item-content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </div>
      </div>      

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">安卓组</p>
          <p class="department-list-item-title-english">ANDROID</p>
        </div>
        <div class="department-list-item-content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </div>
      </div>

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">IOS组</p>
          <p class="department-list-item-title-english">IOS</p>
        </div>
        <div class="department-list-item-content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </div>
      </div>

      <div class="department-list-item">
        <div class="department-list-item-title">
          <p class="department-list-item-title-chinese">WEB端组</p>
          <p class="department-list-item-title-english">WEB</p>
        </div>
        <div class="department-list-item-content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
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
    //height: SC(700);
    margin: SC(110) auto;
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
    height: SC(420); //2*200+1*20
    margin-top: SC(60);
    text-align: left;
    .department-list-item {
      float: left;
      width: SC(420);
      height: SC(200);
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
      }
    }
  }
</style>

