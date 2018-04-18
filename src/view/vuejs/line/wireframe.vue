<template>
  <div class="border">

    <div class="box border-1px"></div>

    <div class="box border-thin1px"></div>

    <div class="box border-rpx"></div>

    <div class="box wireframe"></div>

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

  .border {

    .box {
      width: 100px;
      height: 100px;
      margin: 20px auto;
      border-radius: 50px;
    }
    .border-1px {
      border: 1px solid red;
    }
    .border-thin1px {
      border: 0.5px solid red;
    }
    .border-rpx {
      border: @1rpx-border-line;
    }


  }

</style>

