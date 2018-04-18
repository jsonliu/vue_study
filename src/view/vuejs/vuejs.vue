<template>
    <div class="groub-view">

      <v-page :showBack="false" v-on:rightPressed="rightMore">{{$route.meta.title}}
        <p slot="right">分享</p>
        <add-button slot="left"></add-button>

        <div slot="content" class="content-view">

          <ad-swiper :adsArr="imgArr" :aspectRatio="733/1471" class="swiper-view"></ad-swiper>
          <group title="组件化">
            <cell title="内嵌组件" is-link :link="{path:'/vuejs/inline'}"></cell>
            <cell title="递归组件" is-link :link="{path:'/vuejs/recursive'}"></cell>
            <cell title="自定义指令" is-link :link="{path:'/vuejs/directives'}"> </cell>
          </group>

          <group title="网络">
            <cell title="jsonp" is-link :link="{path:'/vuejs/networks/jsonp'}"></cell>
            <cell title="XMLHttpRequest" is-link :link="{path:'/vuejs/networks/xhr'}"></cell>
            <cell title="axios" is-link :link="{path:'/vuejs/networks/axios'}"> </cell>
          </group>

          <group title="布局">
            <cell title="flex" is-link :link="{path:'/vuejs/flex/flex'}"></cell>
          </group>

          <group title="线条">
            <cell title="线条" is-link :link="{path:'/vuejs/line/line'}"></cell>
            <cell title="线框" is-link :link="{path:'/vuejs/line/wireframe'}"></cell>
          </group>
          <group title="多边形">
            <cell title="多边形" is-link :link="{path:'/vuejs/polygon/polygon'}"></cell>
          </group>

        </div>
      </v-page>

    </div>
</template>

<script type="text/ecmascript-6">

  import {Cell,Group} from'vux'
  import {mapGetters,mapActions} from  'vuex'
  import vPage from 'components/pages/page'
  import AdSwiper from 'components/common/ad-swiper'

    export default {
        components: {
          Cell,
          Group,
          vPage,
          AdSwiper,
          "add-button": {
            template: "<div @click='cliLeft'>左边</div>",
            methods:{
              cliLeft(){
                console.log('点击右边')

              },
            }
          }

        },
        data(){
            return {
                /*孩宝小镇图片服务 1471 *733  */
                imgArr:[
                  'data/booklist/mobile_pic/1505267865250461387_.jpg',
                  'data/booklist/mobile_pic/1505267894110598073.jpg',
                  'data/booklist/mobile_pic/1505267966855047781.jpg',
                  'data/booklist/mobile_pic/1505268003061256155.jpg',
                  'data/booklist/mobile_pic/1505268040457183292.jpg'
                ],
                /*阿里云图片服务 750*360 */
                alyImgArr:[,
                  'group1/M00/00/9C/CgoKC1nhy4eAP9EiAALY7IT9AHk108.jpg',
                  'group1/M00/00/9C/CgoKC1nhy6-ATbJhAAJI9jVG1dM047.jpg',
                  'group1/M00/00/9C/CgoKC1nhzBCAfmWNAAH17qxlbeA189.jpg'
                ]
            }
        },
        computed:{
          ...mapGetters([
            'getTabBarSelectIndex',
          ])
        },
        methods:{
          ...mapActions([
            'saveTabBarSelect',
          ]),
          rightMore(){
              this.$router.push({name:'NotLogin'})

          },
        },
        created(){

        },
        activated(){
//          this.$store.commit('changeSelect', 0)
//          console.log('selectValue的值改变为:\n'+this.$store.getters.getIndex)

          this.saveTabBarSelect(0)
          console.log('selectValue的值改变为:\n'+this.getTabBarSelectIndex)
        }

    }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin";
  .groub-view{
    width: 100%;
    height: 100%;
    .content-view{
      padding-bottom:50px;
    }
  }

</style>
