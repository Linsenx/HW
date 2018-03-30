<template>
  <div>
    <div v-if="showTopBar == true" class="header">
      <div v-if="userStatus.islogin == false">
        <ul>
          <li><a href="#" @click="visible = { type: 'login', value: true }">登录</a></li>
          <li><a href="#" @click="visible = { type: 'register', value: true }">注册</a></li>
        </ul>
      </div>
      <div v-else>
        <ul>
          <li><a href="#" @click="logout">退出登录</a></li>
          <li><a href="#">Welcome {{userStatus.username}}!</a></li>
        </ul>
      </div>

      <div class="boxes">
        <LoginBox v-model="visible" @visibleChange="_visible => { visible = _visible }" @freshLoginStatus="freshLoginStatus"/>
      </div>
    </div>
    <div class="header-wrap">
      <div class="header-wrap-content">
        <div class="header-wrap-content-logo"></div>
        <div class="header-warp-content-nav">
          <div class="nav-item focus"><nuxt-link to="/">网站首页</nuxt-link></div>
          <template v-for="item in items">
            <span :key="item.id" v-show="item.show">
              <div v-if="item.id == nowSelected" class="nav-item selected"><nuxt-link :to="item.link">{{item.name}}</nuxt-link></div>
              <div v-else class="nav-item"><nuxt-link :to="item.link">{{item.name}}</nuxt-link></div>
            </span>
          </template>
        </div>
      </div>
    </div>
    <div v-if="showBreadcrumbs == true" class="header-breadcrumbs">
      <div class="header-breadcrumbs-content">
        <span class="header-breadcrumb-content-title">{{items[nowSelected].name}}</span>
        <span class="header-breadcrumbs-content-link"><nuxt-link to="/">网站首页</nuxt-link> / <span class="header-breadcrumbs-content-link-nowpage">{{items[nowSelected].name}}</span></span>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginBox from '~/components/homepage/LoginBox.vue'
  import API from '~/components/utils/API.js'

  export default {
    components: {
      LoginBox,
    },
    props: {
      showTopBar: {
        type: Boolean,
        default: true,
      },
      showBreadcrumbs: {
        type: Boolean,
        default: false,
      },
      nowSelected: {
        type: Number,
        default: -1,
      },
    },
    mounted() {
      this.freshLoginStatus()
    },
    data() {
      return { 
        userStatus: {username: '???', islogin: false},
        items: [
          {id: 0, name: '社团简介', link: '/association', show: true}, 
          {id: 1, name: '部门简介', link: '/department', show: true}, 
          {id: 2, name: '名 人 堂', link: '/halloffame', show: true}, 
          {id: 3, name: '近期事件', link: '/latest', show: true}, 
          {id: 4, name: '技术博客', link: '#', show: true}, 
          {id: 5, name: '个人信息', link: '/profile', show: false}, 
        ],
        visible: { type: 'login', value: false },
      }  
    },
    methods: {
      logout: function() {
        API.logout()
        this.freshLoginStatus()
      },
      freshLoginStatus: async function() {
        if (API.isLogin()) {
          let res = await API.getUserInfo()
          this.userStatus.username = res.user.Username
          this.userStatus.islogin = true
          this.items[5].show = true
        } else {
          this.userStatus.islogin = false
          this.items[5].show = false
        }
      }
    }
  }
</script>

<style lang="scss">

</style>