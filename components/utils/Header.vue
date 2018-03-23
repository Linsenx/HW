<template>
  <div>
    <div v-if="showTopBar == true" class="header">
      <ul>
        <li><a href="#">登录</a></li>
        <li><a href="#">注册</a></li>
      </ul>
    </div>
    <div class="header-wrap">
      <div class="header-wrap-content">
        <div class="header-wrap-content-logo"></div>
        <div class="header-warp-content-nav">
          <div class="nav-item focus"><nuxt-link to="/">网站首页</nuxt-link></div>
          <template v-for="item in items">
            <div v-if="item.id == nowSelected" :key="item.id" class="nav-item selected"><nuxt-link :to="item.link">{{item.name}}</nuxt-link></div>
            <div v-else :key="item.id" class="nav-item"><nuxt-link :to="item.link">{{item.name}}</nuxt-link></div>
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
  export default {
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
    data() {
      return { 
        items: [
          {id: 0, name: '社团简介', link: '/association'}, 
          {id: 1, name: '部门简介', link: '/department'}, 
          {id: 2, name: '名 人 堂', link: '/halloffame'}, 
          {id: 3, name: '近期事件', link: '/latest'}, 
          {id: 4, name: '技术博客', link: '/association'}, 
          {id: 5, name: '个人信息', link: '/association'}, 
        ]
      }  
    }
  }
</script>

<style>
  
</style>