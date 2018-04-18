<template>
    <div class="wx-main-view">
      <p>非动态路由跳转</p>
      <p>{{$route.query.id}}</p>
      <p>{{$route.params.id}}</p>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        components: {},
        data(){
            return {}
        },
        created(){
          if(this.$route.query.id != undefined){
            console.log('query:'+this.$route.query.id)
          }
          if(this.$route.params.id != undefined){
            console.log('params:'+this.$route.params.id)
          }


        }
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>
