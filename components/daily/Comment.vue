<template>
  <div class="comment">
    <div class="comment-title">COMMENTS<span>(2)</span></div>
    <div class="comment-content">
      <div class="item">
        <div class="item-avatar"></div>
        <div class="item-content">
          <div class="item-content-author">ANNIE PARKER</div>
          <div class="item-content-message">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons equat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons equat. </div>
          <div class="item-content-reply">
      <div class="item">
        <div class="item-avatar"></div>
        <div class="item-content">
          <div class="item-content-author">ANNIE PARKER</div>
          <div class="item-content-message">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons equat. </div>
          <div class="item-content-reply"></div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-form">
      <div class="comment-title">LEAVE A REPLY<span></span></div>
      <input spellcheck="false" type="text" placeholder="Name">
      <input spellcheck="false" type="text" placeholder="Email">
      <textarea spellcheck="false" placeholder="Message"></textarea>
      <p><button>Submit</button></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "assets/css/main.scss";
  .comment {
    width: SC(1000);
    margin-top: 30px;
    .comment-title {
      font-size: SC(18);
      font-family: OpenSansBold;
      letter-spacing: 1px;
      &::after {
        content: "";
        width: 60px;
        display: block;
        margin-top: 5px;
        margin-bottom: 15px;
        border-bottom: 2px solid #bca480;
      }
      span {
        margin-left: 10px;
        color: #cacaca;
      }
    }
    .comment-content {

    }
  }
  .comment-form {
    input {
      font-family: OpenSans;
      width: SC(800);
      height: SC(40);
      margin-bottom: 15px;
      border-bottom: 1px solid #d7d7d7;
    }
    textarea {
      border: none;
      width: SC(800);
      height: SC(300);
      margin-bottom: 15px;
      border-bottom: 1px solid #d7d7d7;
      resize: none;
    }
    button {
      border: none;
      color: #ffffff;
      width: SC(185);
      height: SC(50);
      background: #bca480;
    }
  }
  .item {
    //width: SC(800);
    .item-avatar {
      float: left;
      width: SC(70);
      height: SC(70);
      border-radius: 100%;
      background: #d7d7d7;
    }
    .item-content {
      float: left;
      min-height: SC(100);
      padding: 0 10px 0 15px;
      .item-content-author {
        font-size: 12px;
        font-weight: bold;
      }
      .item-content-message {
        width: SC(825);
      }
      .item-content-reply {
        margin-top: 20px;
        .item-content-message {
          width: SC(825-90);
        }
      }
    }
  }
</style>
