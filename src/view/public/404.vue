<template>
    <div class="wx-main-view">
        <p>404了</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        components: {},
        data(){
            return {}
        },
        created(){

        },
        beforeRouteEnter (to, from, next) {
          // 在渲染该组件的对应路由被 confirm 前调用
          // 不！能！获取组件实例 `this`
          // 因为当钩子执行前，组件实例还没被创建
          alert(1+'beforeRouteEnter')
          next()
          //next(false) //来取消导航
          //next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址
        },
        beforeRouteUpdate (to, from, next) {
          // 在当前路由改变，但是该组件被复用时调用
          // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
          // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
          // 可以访问组件实例 `this`
          alert(2+'beforeRouteUpdate')
          next()
        },
        beforeRouteLeave (to, from, next) {
          // 导航离开该组件的对应路由时调用
          // 可以访问组件实例 `this`
          alert(3+'beforeRouteLeave')
          next()
        },

        watch:{
            $route(){
//              alert('路由有变化')
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>
