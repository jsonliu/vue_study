<template>
  <div class="line">

    <p>001-阴影细线</p>
    <div class="line-div shadow-line">
    </div>

    <p>002-rpx细线</p>
    <div class="line-div rpx-line"></div>

    <p>003-px细线</p>
    <div class="line-div px-line"></div>

    <p>004-media缩放细线</p>
    <div class="line-div media-1px"></div>

    <p>005-百度渐变细线</p>
    <div class="line-div bd-1px-line"></div>

    <p>006-京东缩放</p>
    <div class="line-div jd-1px-line"></div>

    <p>007-微信缩放</p>
    <div class="line-div wx-1px-line"></div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {},
    data(){
      return {}
    },
    created(){

    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  @import "../../../style/common";
  @import "../../../style/mixin";

  .line {
    width: 100%;
    height: 100%;
    p {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #333333;
      margin-top: 40px;
    }
    &-div{
      width: 100%;
      height: 10px;
    }
    .rpx-line {
      border-bottom: @1rpx-border-line;
    }
    .px-line{
      border-bottom: @1px-border-line;
    }
  }
</style>

