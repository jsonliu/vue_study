<template>
  <div class="inline-view">
    <app-header>
      {{$route.meta.title}}
    </app-header>
    <div class="content-view">
      <div class="select-view">

        <select class="select" v-select2='options' v-model="selectValue"></select>
        <br/>
        <!--<span v-text="'结果：'+selectValue"></span>-->


        <!--<my-component v-if="message" :message="message"></my-component>-->
        <div class="test-view" v-clickhello>{{message}}</div>

        <div class="actions">
        <button @click="update">更新</button>
        <button @click="uninstall">卸载</button>
        <button @click="install">安装</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import AppHeader from 'components/common/header.vue'
  import $ from 'jquery'
  import {select2} from 'select2'

  let myComponent = { template: '<h1 v-clickhello>{{ message }}</h1>', props: { message: String } }


  export default {
     ready(){
       $('select').select2({
         placeholder: "请选择"
       });
     },
    components: {
      AppHeader,
      myComponent:myComponent
//          select2
    },
    // 指令的定义--- 局部
    directives: {
      select2: {
        inserted: function (el, binding, vnode) {
          let options = binding.value || {};
          $(el).select2(options).on("select2:select", (e) => {
            // v-model looks for
            //  - an event named "change"
            //  - a value with property path "$event.target.value"
            el.dispatchEvent(new Event('change', { target: e.target })); //说好的双向绑定，竟然不安套路
          });
        },
        update: function(el, binding, vnode) {
          $(el).trigger("change");
        }
      },
      clickhello:{
        // 只调用一次，指令第一次绑定到元素时调用
        bind: function (el) { console.log('触发bind钩子函数！') },
        // 被绑定元素插入父节点时调用
        inserted: function (el) { console.log('触发inserted钩子函数！') },
        // 所在组件的`VNode`更新时调用，但是可能发生在其子元素的`VNode`更新之前
        update: function (el) { console.log('触发update钩子函数！') },
        // 所在组件的`VNode`及其子元素的`VNode`全部更新时调用
        componentUpdated: function (el) { console.log('触发componentUpdated钩子函数！') },
        // 只调用一次，指令与元素解绑时调用
        unbind: function (el) { console.log('触发unbind钩子函数！') }
      }
    },
    data(){
      return {
        message: 'Hello! 大漠',
        selectValue: '你还没有选值',
        options: {
          data: [
            { id: 0, text: 'enhancement' },
            { id: 1, text: 'bug' },
            { id: 2, text: 'duplicate' },
            { id: 3, text: 'invalid' },
            { id: 4, text: 'wontfix' }
          ]
        }
      }
    },
    created(){

    },
    methods:{
      update: function () { this.message = 'Hi! 大漠' },
      uninstall: function () { this.message = '' },
      install: function () { this.message = 'Hello！W3cplus' }

    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../../style/select2.min.css";

  .inline-view{

    .content-view{

      .select-view{
        margin-top: 20px;
        .content{
          text-align: center;
          padding:50px;
        }
        .content *{
          text-align: left;
        }
        .select{
          width: 350px;
        }
      }
      .test-view {
        margin-top: 200px;
      }

    }
  }



</style>
