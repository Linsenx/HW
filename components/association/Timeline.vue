<template>
  <div class="timeline">
    <div class="timeline-list">
      <div class="timeline-list-item">
        <p class="timeline-list-item-time">September 2014</p>
        <p class="timeline-list-item-title">Best website award</p>
        <ul class="timeline-list-item-content">
          <li>Best original website 2014</li>
          <li>Developer of the year</li>
          <li>Featured by Design magazine</li>
        </ul>
      </div>
      <div class="timeline-list-hr"></div>
      <div class="timeline-list-item">
        <p class="timeline-list-item-time">September 2014</p>
        <p class="timeline-list-item-title">Best website award</p>
        <ul class="timeline-list-item-content">
          <li>Best original website 2014</li>
          <li>Developer of the year</li>
          <li>Featured by Design magazine</li>
        </ul>
      </div>
      <div class="timeline-list-hr"></div>
      <div class="timeline-list-item">
        <p class="timeline-list-item-time">September 2014</p>
        <p class="timeline-list-item-title">Best website award</p>
        <ul class="timeline-list-item-content">
          <li>Best original website 2014</li>
          <li>Developer of the year</li>
          <li>Featured by Design magazine</li>
        </ul>
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

  .timeline {
    padding: 60px 0 100px 0;
    text-align: center;
    text-transform: uppercase;
  }

  .timeline-list {
    .timeline-list-item {
      .timeline-list-item-time {
        font-size: 12px;
        font-family: OpenSansBold;
        letter-spacing: 1px;
        margin-bottom: 5px;
      }
      .timeline-list-item-title {
        font-size: 15px;
        font-family: OpenSansBold;
        letter-spacing: 2px;
        margin-bottom: 5px;
      }
      .timeline-list-item-content {
        font-size: 12px;
        font-family: OpenSansSemibold;
        letter-spacing: 1px;
        li {
          margin-bottom: 3px;
        }
      }
    }
    .timeline-list-hr {
      width: 50%;
      height: 55px;
      margin: 15px 0 15px 0;
      border-right: 1px solid #3b3e43;
    }
  }
</style>
