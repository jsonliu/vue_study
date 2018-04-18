<style lang="scss">
  $btn-height:40px;
  .notlogin{
    height: 100%;
    padding-top: 140px;
    background-color: #fff;
    font-family: "Apple Braille";
    text-align: center;
    &-img{

    }
    &-title{
      color: #5d5d5d;
      line-height: 1.5;
    }
    &-text{
      color: #999;
      line-height: 1.5;
    }
    &-btn{
      border:none;
      text-align: center;
      margin-top: 20px;
      display: inline-block;
      line-height: $btn-height;
      width:90%;
      font-size: 18px;
      color: white;
      border-radius: 5px;
      background-color: orange;
    }
  }


</style>
<template>
    <div class="notlogin">
      <img class="notlogin-img" src="../../assets/images/test/notLogin.png"/>
      <p class="notlogin-title">登陆失败</p>
      <p class="nologin-text">您未登陆随手记，无法访问随手记微利<br/>请登陆重试</p>
      <button type="button" class="notlogin-btn">立即登陆</button>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        components: {
        },
        data(){
            return {}
        },
        created(){

        }
    }
</script>

