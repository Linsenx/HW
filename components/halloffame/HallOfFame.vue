<template>
  <div class="halloffame">
    <div class="halloffame-title">
      <p class="halloffame-title-english">HALL OF FAME</p>
      <p class="halloffame-title-chinese">名人堂</p>
    </div>
    <div class="halloffame-content">
      <div class="halloffame-content-image"></div>
      <div class="halloffame-content-description">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
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
    margin: SC(110) auto;
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
        margin-bottom: SC(40);
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
