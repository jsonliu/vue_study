<template>
  <div>
    <p>动态路由跳转</p>
    <div @click="goback">返回</div>
    <p>{{$route.params.id}}</p>
    <p>{{$route.query.id}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Details',
    data () {
      return {

      }
    },
    methods: {
      goback () {
        this.$router.go(-1)
      },
      fetchData () {
        console.log('路由有变化')
      }
    },
    //  watch: {
    //    // 如果路由有变化，会再次执行该方法
    //    '$route': 'fetchData'
    //  },
    //路由监听方法   ??? 方法不调用
    watch: {
      '$route' (to, from) {
        //    console.log('路由变化监听' + to);
        //    console.log('路由变化监听' + from);
      }
    },
    created () {
      //      this.fetchData()
      console.log('params:   ' + this.$route.params.id)
      console.log('query:    ' + this.$route.query.id)
    },
    //  mounted: function () {
    //    this.$nextTick(function () {
    //      console.log(this.$router.params)
    //    })
    //  }

    /*7
     * keep-alive 组件激活时调用。
     * */
    activated () {
      console.log(' details    7--- 调用了activated')
    },
    /*
     * 8
     * keep-alive 组件停用时调用。
     * */
    deactivated () {
      console.log('details     8--- 调用了deactivated')
    },
    /*9
     实例销毁之前调用。在这一步，实例仍然完全可用。
     * */
    beforeDestroyed () {
      console.log('details     9--- 调用了beforeDestroyed')
    },
    /*10
     *ue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
     * */
    destroyed () {
      console.log('details     10--- 调用了destroyed')

    },



  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
