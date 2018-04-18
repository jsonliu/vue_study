<template>
  <div class="tabbar-view">
    <tabbar class="footer-wrapper" slot="bottom" v-on:on-index-change="change()" v-model="index">
      <!--使用img 和src-->
      <!--<tabbar-item :link="{path:'/'}" :selected =true >-->
        <!--<img style="height:40px;width:40px;" slot="icon" src="../../assets/images/tabbar/home@2x.png">-->
        <!--<img style="height:40px;width:40px;" slot="icon-active" src="../../assets/images/tabbar/home_on@2x.png">-->
        <!--<span slot="label">vuejs</span>-->
      <!--</tabbar-item>-->

      <!--使用div 和background-image-->
      <!--<tabbar-item :link="{path:'/'}" :selected =true >-->
      <tabbar-item :link="{path:'/'}">
        <div slot="icon" class="item-image icon-home"></div>
        <div slot="icon-active" class="item-image icon-home-on"></div>
        <span slot="label" class="icon-msg">vuejs</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/vux'}">
        <div slot="icon" class="item-image icon-community"></div>
        <div slot="icon-active" class="item-image icon-community-on"></div>
        <span slot="label"  class="icon-msg">vux</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/other'}" >
        <div slot="icon" class="item-image icon-found"></div>
        <div slot="icon-active" class="item-image icon-found-on"></div>
        <span slot="label"  class="icon-msg">自定义</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/vuex'}" >
        <div slot="icon" class="item-image icon-cart"></div>
        <div slot="icon-active" class="item-image icon-cart-on"></div>
        <span slot="label"  class="icon-msg">vuex</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/router'}">
        <div slot="icon" class="item-image icon-mine"></div>
        <div slot="icon-active" class="item-image icon-mine-on"></div>
        <span slot="label"  class="icon-msg">router</span>
      </tabbar-item>
    </tabbar>
  </div>

</template>

<script type="text/ecmascript-6">
  import { Tabbar , TabbarItem } from 'vux'
  import {mapGetters,mapActions} from  'vuex'
  export default{
    components: {
      Tabbar,
      TabbarItem
    },
//    props: ['index']
    data(){
      return{
        selectNum:0
      }
    },
    methods:{
      ...mapActions([
         'saveTabBarSelect'
      ]),
      onclick(){
        console.log(1);
      },
      change(){
          console.log('index的值改变了')
      }
    },
    created(){

    },
    computed: {
      ...mapGetters([
         'getTabBarSelectIndex'
      ]),
        //报错  Property or method "index" is not defined on the instance but referenced during render.
        // Make sure to declare reactive data properties in the data option.
//      index(){
//          return this.$store.getters.getIndex
//      }
        index:{
            set(value){
//              this.$store.commit('changeSelect', value)
//              console.log('selectValue的值改变为:\n'+this.$store.getters.getIndex)

              this.saveTabBarSelect(value)
              console.log('selectValue的值改变为:\n'+this.getTabBarSelectIndex)
            },
            get(){

//                return this.$store.getters.getIndex
              return this.getTabBarSelectIndex
            }
        }
    },
    activated(){
//      alert(this.index)
    }

  }
</script>

<style lang="less" rel="stylesheet/less">

  @import "../../style/mixin";

  @footer-height: 50px;
  .tabbar-view{

    .footer-wrapper{
      position: fixed;
      height:@footer-height;
      .item-image{
        .wh(20px,20px);
        background-size: 100% 100%;
        //设置图片居中
        margin: 1px 0 0 3px;
        &.icon-home{
          .bg-image('../assets/images/tabbar/home')
        }
        &.icon-home-on{
          .bg-image('../assets/images/tabbar/home_on')
        }

        &.icon-community{
          .bg-image('../assets/images/tabbar/community')
        }
        &.icon-community-on{
          .bg-image('../assets/images/tabbar/community_on')
        }

        &.icon-found{
          .bg-image('../assets/images/tabbar/found')
        }
        &.icon-found-on{
          .bg-image('../assets/images/tabbar/found_on')
        }

        &.icon-cart{
          .bg-image('../assets/images/tabbar/cart')
        }
        &.icon-cart-on{
          .bg-image('../assets/images/tabbar/cart_on')
        }

        &.icon-mine{
          .bg-image('../assets/images/tabbar/mine')
        }
        &.icon-mine-on{
          .bg-image('../assets/images/tabbar/mine_on')
        }

      }
      .weui-tabbar__label > .icon-msg {
        display: inline-block;
        line-height:0 !important;
        /*color: blueviolet!important;*/
      }

    }
  }

</style>
