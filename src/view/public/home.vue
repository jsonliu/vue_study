<template>
  <div>

    <!--<x-header-->
      <!--:left-options="{showBack: true,backText: '返回'}"-->
      <!--:right-options="{showMore: true}"-->
      <!--@on-click-more="share">-->
        <!--标题-->
        <!--<a slot="left">Close</a>-->
        <!--<a slot="right">Feedback</a>-->
    <!--</x-header>-->

    <!--<app-header :showHeader="true" :showBack="false" v-on:rightPressed="rightMore">-->
        <!--{{$route.meta.title}}-->
        <!--<div slot="left">左边</div>-->
        <!--<div slot="right">右边</div>-->
    <!--</app-header>-->


    <app-footer></app-footer>

    <!--有时候 可能需要缓存整个站点的所有页面,而页面一般一进去都要触发请求的
        在使用keep-alive的情况下
        将首次触发请求写在created钩子函数中,就能实现缓存,
     -->

    <!--缓存当前页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="home-view"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="home-view"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

  import { XHeader} from 'vux'
  import vPage from 'components/pages/page.vue'
  import AppFooter from 'components/common/footer.vue'
  import AppHeader from 'components/common/header.vue'
  import fetch from 'services/xhr/fetch.js'
//  import {githubInfo} from 'services/xhr/fetchData';

  export default {
//    name: 'Home',
    components: {
      AppFooter,
      AppHeader,
      vPage,
      XHeader,


    },
    /*
     当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，
     因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，
     则所有的实例将共享引用同一个数据对象！通过提供 data 函数，
     每次创建一个新实例后，我们能够调用 data 函数，
     从而返回初始数据的一个全新副本数据对象

     不应该对 data 属性使用箭头函数,理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例
     */
    data(){
      return {
        a:100,
        b:2,
        rightTitle:'分享',
        leftTitle:''

      }
    },
    /*设置属性、值能缓存
     * 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算
     * */
    computed:{
      /*读取*/
      add(){
        return  this.a + this.b
      },
      /*读取和设置*/
      mul:{
        get(){
          return this.a * this.b
        },
        set(value){

          this.a = value
        }
      }


    },
    methods:{
      rightMore(){
          alert('分享')
      },

      /*网络请求*/
      fetchData: function () {

        var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=master'
        var xhr = new XMLHttpRequest()

        xhr.open('GET', apiURL)
        xhr.onload = function () {

//          var commits = JSON.parse(xhr.responseText)
//          console.log(JSON.stringify(commits[0].html_url))
          console.log('---------------'+xhr.response)
        }
        xhr.send()
      }

    },

    /********生命周期函数***********/

    /*1.
     在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
     */

    beforeCreate(){

      console.log('1---调用了beforeCreate')
      console.log('beforeCreate函数data的值'+this.a)
    },
    /*2
     在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：
     数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。
     然而，挂载阶段还没开始，$el 属性目前不可见。
     * */
    created(){


      console.log('2---调用了created')

//        console.log('相加'+ this.add)
//        console.log('相乘'+this.mul)
//
//        console.log('set前的值'+this.a)
//        this.mul = 200
//        console.log('set后的值'+this.a)


//      this.fetchData()

//      fetch()

//      githubInfo().then((res) => {
////        console.log(res)
//      });


    },

    /*3
     在挂载开始之前被调用：相关的 render 函数首次被调用。
     该钩子在服务器端渲染期间不被调用
     * */
    beforeMount(){
      console.log('3--- 调用了beforeMount')

    },
    /*4
     * el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
     * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

     注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，
     可以用 vm.$nextTick 替换掉 mounted：
     该钩子在服务器端渲染期间不被调用
     * */
    mounted(){

      this.$nextTick(function(){

        console.log('4--- 调用了mounted')
      })

    },
    /*5
     *数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。

     你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程
     * */
    beforeUpdate(){

      console.log('5--- 调用了beforeUpdate')

    },
    /*6
     * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

     当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
     然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

     注意 updated 不会承诺所有的子组件也都一起被重绘。
     如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：
     * */
    updated(){
      this.$nextTick(function () {
        console.log('6--- 调用了update')
      })

    },
    /*7
     * keep-alive 组件激活时调用。
     * */
    activated(){
      console.log('7--- 调用了activated')
    },
    /*
    * 8
    * keep-alive 组件停用时调用。
    * */
    deactivated(){
      console.log('8--- 调用了deactivated')
    },
    /*9
     实例销毁之前调用。在这一步，实例仍然完全可用。
    * */
    beforeDestroyed(){
      console.log('9--- 调用了beforeDestroyed')
    },
    /*10
    *ue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
    * */
    destroyed(){
        console.log('10--- 调用了destroyed')

    },

}
</script>

<style lang="less" rel="stylesheet/less">

</style>
