<template>
  <div class="profile">
    <div class="profile-outer">
      <div class="profile-outer-title">ACCOUNT SETTINGS</div>
      <div class="profile-outer-shadow"></div>
      <div class="profile-outer-buttons">
        <div class="profile-outer-buttons-cancel">CANCEL</div>
        <div class="profile-outer-buttons-save" @click="saveUserInfo">SAVE</div>
      </div>
      <div class="profile-inner">
        <div class="profile-inner-avatar"></div>
        <div class="profile-inner-jobtitle">社团成员</div>
        <div class="profile-inner-username">
          <div class="profile-inner-username-title">USERNAME</div>
          <div class="profile-inner-username-content">{{username}}</div>
        </div>

        <div class="profile-inner-form">
          <div class="profile-inner-form-password">
            <div class="profile-inner-form-title">Password</div>
            <input class="profile-inner-form-input" type="password" v-model="password" placeholder="留空不修改">
          </div>
          <div class="profile-inner-form-email">
            <div class="profile-inner-form-title">Email</div>
            <input class="profile-inner-form-input long" type="text" v-model="email" placeholder="请输入你的邮箱">
          </div>
          <div class="profile-inner-form-phone">
            <div class="profile-inner-form-title">Phone</div>
            <input class="profile-inner-form-input" type="text" v-model="phone" placeholder="请输入你的手机号">
          </div>
          <div class="profile-inner-form-blog">
            <div class="profile-inner-form-title">Blog</div>
            <input class="profile-inner-form-input long" type="text" v-model="blog" placeholder="请输入你的博客网址">
          </div>
          <div class="profile-inner-form-introduction">
            <div class="profile-inner-form-title">Introduction</div>
            <textarea spellcheck="false" v-model="introduction" placeholder="请输入你的个人介绍"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '~/components/utils/API.js'

  export default {
    data() {
      return {
        username: '',
        password: '',
        email: '',
        phone: '',
        blog: '',
        introduction: ''
      }
    },
    mounted() { 
      this.freshUserInfo()
    },
    methods: {
      trim: function(str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      },
      freshUserInfo: async function() {
        let res = await API.getUserInfo()
        this.username = res.user.Username
        this.phone = res.user.Mobile
        this.email = res.user.Email
        this.blog = res.user.Website
        this.introduction = res.user.Introduction
      },
      saveUserInfo: async function() {
        let user = {}
        if (this.phone != '') user.Mobile = this.phone
        if (this.email != '') user.Email = this.email
        if (this.blog != '') user.Website = this.blog
        if (this.introduction != '') user.Introduction = this.introduction
        if (this.password != '') {
          let password_check = prompt('请再次输入新密码!')
          if (password_check == this.password) user.Password = password_check
          else {
            this.password = ''
            alert('两次密码不一致，请重新输入')
            return
          }
        }
        let res = await API.setUserInfo(user)
        alert(res.msg)
        await this.freshUserInfo()
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/css/main.scss";
  .profile {
    width: SC(1200);
    margin: 0 auto;
    padding: 50px 0 50px 0;
  }

  .profile-outer {
    position: relative;
    width: SC(1000);
    height: SC(1300);
    background: #474448;
    //box-shadow: 10px 10px 40px rgb(148, 148, 148);
    .profile-outer-title {
      position: absolute;
      top: 20px;
      left: 30px;
      color: #ffffcc;
      font-size: SC(36);
      font-family: OpenSansRegular;
      letter-spacing: 2px;
    }
    .profile-outer-shadow {
      position: absolute;
      top: SC(540);
      width: SC(1000);
      height: SC(470);
      background: #232224;
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: SC(470);
        width: 0;
        height: 0;
        border-top: 115px solid transparent;
        border-left: 122px solid #232224;
        transform: rotate(180deg);
      }
    }
    .profile-outer-buttons {
      font-size: SC(36);
      color: #ffffcc;
      letter-spacing: 2px;
      cursor: pointer;
      .profile-outer-buttons-cancel {
        position: absolute;
        bottom: SC(40);
        right: SC(300);
      }
      .profile-outer-buttons-save {
        position: absolute;
        bottom: SC(40);
        right: SC(100);
      }
    }
  }

  .profile-inner {
    position: absolute;
    top: SC(182);
    left: SC(182);
    width: SC(1000);
    height: SC(1000);
    border: 1px solid #232224;
    background: #fdfffc;
    //box-shadow: 10px 15px 55px #232224;
    .profile-inner-avatar {
      position: absolute;
      top: SC(-80);
      left: SC(90);
      width: SC(175);
      height: SC(175);
      border-radius: 100%;
      background: url('~/assets/img/avatar.png');
      background-size: SC(175) SC(175); 
    }
    .profile-inner-jobtitle {
      position: absolute;
      top: SC(144);
      left: SC(90);
      width: SC(175);
      height: SC(42);
      background: #bca480;
      text-align: center;
      color: #ffffff;
      font-size: SC(20);
      line-height: SC(42);
      letter-spacing: 2px;
    }
    .profile-inner-username {
      position: absolute;
      top: SC(65);
      left: SC(460);
      .profile-inner-username-title {
        color: #362417;
        font-size: SC(25);
        letter-spacing: 2px;
      }
      .profile-inner-username-content {
        width: SC(500);
        height: SC(100);
        text-align: center;
        line-height: SC(100);
        font-size: SC(50);
      }
    }
    .profile-inner-form {
      .profile-inner-form-title {
        font-size: SC(30);
        letter-spacing: 1px;
      }
      .profile-inner-form-input {
        width: SC(170);
        margin: SC(50) 0 0 SC(130);
        border-bottom: 2px solid #437c90;
        text-align: center;
        letter-spacing: 1px;
        &.long {
          width: SC(320);
        }
      }
      .profile-inner-form-password {
        position: absolute;
        top: SC(287);
        left: SC(50);
      }
      .profile-inner-form-phone {
        position: absolute;
        top: SC(287+160);
        left: SC(50);
      }
      .profile-inner-form-email {
        position: absolute;
        top: SC(287);
        left: SC(50+400);
      }
      .profile-inner-form-blog {
        position: absolute;
        top: SC(287+160);
        left: SC(50+400);
      }
      .profile-inner-form-introduction {
        position: absolute;
        top: SC(287+160+160);
        left: SC(50);
        textarea {
          margin-top: SC(30);
          padding: 5px;
          width: SC(900);
          height: SC(260);
          resize: none;
          //border: 1px solid #232224;
        }
      }
    }
  }
</style>
