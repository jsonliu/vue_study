<template>
    <div class="wx-main-view">
      <app-header>
          {{$route.meta.title}}
      </app-header>
      <box>
        <divider>xhr网路请求</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="default" @click.native="xhrTest">xhrTest</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="default" @click.native="">待定</x-button>
          </flexbox-item>
        </flexbox>
      </box>
    </div>
</template>

<script type="text/ecmascript-6">
    import AppHeader from 'components/common/header.vue'
    import { XButton, Box, Flexbox, FlexboxItem, Divider, Panel} from 'vux'
    export default {
        components: {
            AppHeader,
            XButton,
            Box,
            Flexbox,
            FlexboxItem,
            Divider,
            Panel
        },
        data(){
            return {}
        },
        created(){

        },
        methods:{
          xhrTest(){

            //xhr网络请求
            this.$showLoading('请求中...')
            this.$xhrData.fetchGitHubInfo().then((res) =>{

              if(!isEmptyObject(res)){

              }else {

              }

            }).finally(() =>{
              this.$hideLoading()
            })
          }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../../style/mixin";

</style>
