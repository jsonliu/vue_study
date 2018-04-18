<template>
  <div class="main">
    <div class="up">
      <div class="up-head"></div>
    </div>

    <div class="down">
      <div class="down-button"></div>
    </div>
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

  .main {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    height: 100%;
    background-color: yellow;
    padding-bottom: 16px;
    .up {
      height: 100%;
      width: 100%;
      &-head {
        width: 100%;
        height:100px;
        background-color: red;
      }
    }
    .down {
      height: 100px;
      width: 200px;
      margin: 0 auto;
      background-color: blue;
    }
  }
</style>

