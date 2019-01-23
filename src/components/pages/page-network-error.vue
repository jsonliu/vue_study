<template>
  <div class="page-network-error"
       v-if="show">
    <i class="icon network-error"></i>
    <p class="network-error-text">亲，您的网络链接有问题</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      show: {
        type: Boolean,
        default: true
      }
    }
  }

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin";
  .page-network-error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 97;

    .network-error {
      width: 200px;
      height: 200px;
      .bg-image("../assets/images/common/network_error");
    }

    .network-error-text {
      padding-top: 20px;
      font-size: 16px;
      color: #666;
    }
  }
</style>
