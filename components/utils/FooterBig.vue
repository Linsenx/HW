<template>
  <div>
    <div class="footerbig">
      <div class="footerbig-title">
        <i class="fa fa-list-alt"></i>
        <p>ABOUT HELLO WORLD</p>
      </div>
      <div class="footerbig-content">
        <p>地址: 杭州电子科技大学生活区22栋楼二层</p>
        <p>官方QQ号: 2459927596</p>
        <p>官方微信公众号: HelloWorld</p>
      </div>
      <div class="footerbig-qrcode">
        <img src="~/assets/img/qr_wechat.png" class="qr_wechat">
        <img src="~/assets/img/qr_ccf.png" class="qr_ccf">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .footerbig {
    clear: both;
    font-family: OpenSansRegular;
    p {
      margin-bottom: 10px;
    }
  }
</style>