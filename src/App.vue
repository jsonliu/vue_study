<template>
  <div id="app">
    <!--<router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件-->
    <!--<router-view> 是最顶层的出口，渲染最高级路由匹配到的组件-->
    <!--app.vue 中不使用keep-alive hone.中使用keep-alive activated不会调用-->
    <keep-alive>
      <router-view class="app-view"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>

