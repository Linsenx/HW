<template>
  <transition name="box-fade">
    <div class="box-outer" v-if="visible.value == true" @click.self="handleClose">
      <div class="box login" v-if="visible.type == 'login'"> 
        <div class="box-title">账号登录</div>
        <div class="box-input">
          <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <span class="box-poptip" v-show="tipUsername != ''"><i class="fa fa-warning"></i>{{tipUsername}}</span>
          </transition>
          <input :class="{warning : tipUsername != ''}" type="text" v-model="username" placeholder="请输入用户名/邮箱/手机号">
        </div>
        <div class="box-input">
          <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <span class="box-poptip" v-show="tipPassword != ''"><i class="fa fa-warning"></i>{{tipPassword}}</span>
          </transition>
          <input :class="{warning : tipPassword != ''}" type="password" v-model="password" placeholder="密码">
        </div>
        <div class="box-options">
          <div class="box-options-auto">
            <label>
              <span class="box-checkbox"><input v-model="autoLogin" type="checkbox"></span>
              <span class="box-checkbox-title">下次自动登录</span>
            </label>
          </div>
          <div class="box-options-forget">忘记密码?</div>
        </div>
        <div :class="{ 'box-button': true, 'loading': loginWaiting }" @click="postLoginMessage">
          <i v-show="loginWaiting" class="fa fa-cog fa-spin"></i> 登陆
        </div>
        <div class="box-register" @click="turnToRegister">账号注册?</div> 
      </div>
      <div class="box register" v-if="visible.type == 'register'">
        <div class="box-title">账号注册</div>
        <div class="box-input">
          <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <span class="box-poptip" v-show="tipUsername != ''"><i class="fa fa-warning"></i>{{tipUsername}}</span>
          </transition>
          <input :class="{warning : tipUsername != ''}" type="text" v-model="username" placeholder="用户名">
        </div>
        <div class="box-input">
          <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <span class="box-poptip" v-show="tipEmail != ''"><i class="fa fa-warning"></i>{{tipEmail}}</span>
          </transition>
          <input :class="{warning : tipEmail != ''}" type="text" v-model="email" placeholder="邮箱">
        </div>
        <div class="box-input">
          <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <span class="box-poptip" v-show="tipPassword != ''"><i class="fa fa-warning"></i>{{tipPassword}}</span>
          </transition>
          <input :class="{warning : tipPassword != ''}" type="password" v-model="password" placeholder="输入密码">
        </div>
        <div class="box-input">
          <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <span class="box-poptip" v-show="tipPasswordCheck != ''"><i class="fa fa-warning"></i>{{tipPasswordCheck}}</span>
          </transition>
          <input :class="{warning : tipPasswordCheck != ''}" type="password" v-model="passwordCheck" placeholder="确认密码">
        </div>
        
        <div :class="{ 'box-button': true, 'loading': registerWaiting }" @click="postRegisterMessage">
          <i v-show="registerWaiting" class="fa fa-cog fa-spin"></i> 注册
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import 'whatwg-fetch'
import API from '~/components/utils/API.js'
import config from '~/components/utils/Config.js'
export default {
  model: {
    prop: 'visible',
    event: 'visibleChange'
  },
  props: {
    visible: Object,
  },
  data() {
    return {
      username: '',
      password: '',
      passwordCheck: '',
      email: '',
      tipUsername: '',
      tipEmail: '',
      tipPassword: '',
      tipPasswordCheck: '',
      loginWaiting: false,
      registerWaiting: false,
      autoLogin: false,
    }
  },
  methods: {
    handleClose: function() {
      this.freshTips()
      this.freshInputs()
      this.$emit('visibleChange', {type: this.visible.type, value: false})
    },
    turnToRegister: function() {
      this.freshTips()
      this.$emit('visibleChange', {type: 'register', value: true})
    },
    freshTips: function() {
      this.tipUsername = ''
      this.tipEmail = ''
      this.tipPassword = ''
      this.tipPasswordCheck = ''
    },
    freshInputs: function() {
      this.username = ''
      this.email = ''
      this.password = ''
      this.passwordCheck = ''
    },
    loginValidate: function() {
      let validation = true
      if (this.username == '') {
        validation = false
        this.tipUsername = '用户名请勿留空' 
      }
      if (this.password == '') {
        validation = false 
        this.tipPassword = '密码请勿留空'
      }
      return validation 
    },
    postLoginMessage: async function() {
      if (!this.loginValidate()) return
      this.loginWaiting = true
      let result = await API.login(this.username, this.password, this.autoLogin)
      setTimeout(() => { this.loginWaiting = false }, 500)
      if (result.err == 0) {
        this.handleClose()
        this.$emit('freshLoginStatus', true)
      } else if (result.err == 1) {
        this.tipUsername = result.msg
      } else {
        console.log('Unknown mistake...')
      }
      
    },
    postRegisterMessage: async function() {
      let flag = true;
      let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
      this.freshTips()
      if (this.username == '') { flag = false, this.tipUsername = '用户名请勿留空' }
      if (this.email == '') { flag = false, this.tipEmail = '邮箱请勿留空' }
      else if (!emailReg.test(this.email)) { flag = false, this.tipEmail = '邮箱格式错误' }
      if (this.password == '') { flag = false, this.tipPassword = '密码请勿留空' }
      if (this.passwordCheck == '') { flag = false, this.tipPasswordCheck = '确认密码请勿留空' }
      else if (this.password != '' && this.password != this.passwordCheck) { flag = false, this.tipPasswordCheck = '两次输入的密码不一致' }
      if (flag == false) return;
      this.registerWaiting = true //控制加载动画
      try {
        let data = {
          Username: this.username,
          Password: this.password,
          Email: this.email,
        }
        let res = await fetch(config.API_USER_REGISTER, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
          },
          body: JSON.stringify(data)
        })
        let result = await res.json()
        setTimeout(() => {this.registerWaiting = false}, 500)
        if (result.err == 1) {
          if (result.msg == '该用户名已经被使用') 
            this.tipUsername = '该用户名已经被使用'
          else if (result.msg == '该邮箱已经被注册') 
            this.tipEmail = '该邮箱已经被注册'
        } else if (result.err == 0){
          alert('账号注册成功!')
          this.freshInputs()
          console.log('Successfully register...')
        } else {
          console.log('Unknown mistake...')
        }
      } catch(err) {
        console.log(err)
        console.log("postRegisterMessage faild...")
      }
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/main.scss";

  .box-outer {
    width: 100%; height: 100%;
    position: absolute;
    z-index: 600;
  }

  .box {
    position: absolute;
    z-index: 800;
    left: 0; right: 0; top: 0; bottom: 0;
    margin: auto;
    padding: 20px;
    width: SC(385*1.2);
    height: SC(423*1.12);
    background: #f1f1f1;
    border-radius: 5px;
    color: #3b3e43;
    box-shadow:0 0 0 1920px rgba(0,0,0,.7);
    &.register {
      height: SC(500*1.08);
    }
    .box-title {
      color: #888a8c;
      font-size: SC(24*1.2);
      letter-spacing: 1px;
      margin-bottom: 25px;
    }
    .box-input {
      position: relative;
      input {
        width: SC(325*1.23);
        height: SC(46*1.15);
        padding: 0 8px 0 8px;
        border-radius: 4px;
        margin-bottom: 22px;
        box-shadow: 1px 1px 2px 0px rgba(143, 153, 178, 0.38);
        border: 2px solid #ffffff;
        transition: border 0.8s;
        &.warning {
          border: 2px solid #ff5b5b;
          box-shadow: 1px 1px 2px 0px rgba(#ff5b5b, .38);
        }
        &.success {
          border: 2px solid #67C23A;
          box-shadow: 1px 1px 2px 0px rgba(#67C23A, .38);
        }
        &::placeholder {
          color: #c0c0c0;
        }
      }
    }
    .box-register {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      } 
      font-size: 12px;
    }
    .box-poptip {
      position: absolute;
      left: 5px; top: -18px;
      height: 20px;
      line-height: 20px;
      color: #ff5b5b;
      font-size: 12px;
      animation-duration: .8s;
      i {
        margin-right: 5px;
      }
    }
  }

  .box-options {
    font-size: 12px;
    margin-bottom: 30px;
    .box-options-auto {
      float: left;
    }
    .box-options-forget {
      float: right;
    }
  }

  .box-button {
    clear: both;
    width: SC(325*1.23);
    height: SC(56);
    margin-bottom: 20px;
    border-radius: 4px;
    background: #d9bb97;
    box-shadow: 1px 1px 4px rgba(#d9bb97, 0.38);
    color: #ffffff;
    font-size: SC(25);
    text-align: center;
    line-height: SC(56);
    letter-spacing: 10px;
    transition: background .8s;
    i {
      letter-spacing: 0px;
    }
    &:hover {
      cursor: pointer;
    }
    &.loading {
      background: #34352c;
      box-shadow: 1px 1px 4px rgba(#34352c, 0.38);
    }
  }

  .box-fade-enter-active {
    animation: fade-in .3s ease-in-out;
  }

  .box-fade-leave-active {
    animation: fade-out .3s ease-in-out;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(50px);
    }
  }

</style>
