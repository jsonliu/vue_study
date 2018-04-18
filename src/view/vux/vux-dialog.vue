<template>
    <div class="wx-main-view">
      <group-title>vux提示插件</group-title>
      <grid :cols="3">
        <grid-item v-for="(i,index) in initData" :key="i" @on-item-click="onItemClick(index)">
          <span class="grid-center">{{i}}</span>
        </grid-item>
      </grid>

      <!--知乎封装弹框  https://www.zhihu.com/question/35820643-->

      <group-title>自定义提示组件</group-title>
      <grid :cols="3">
        <grid-item v-for="(i,index) in customData" :key="i" @on-item-click="onItemCustom(index)">
          <span class="grid-center">{{i}}</span>
        </grid-item>
      </grid>

      <!--<v-modal v-if="showModal" v-on:close="close"></v-modal>-->

      <v-activity-tip v-if="showModal" v-on:close="close" v-on:goto="goto"></v-activity-tip>

      <div class="protocol-container" v-if="pageShow">
        <div class="protocol-wrap" @click="pageShow = false">
          <v-protocol></v-protocol>
        </div>
      </div>

      <v-input-alert v-if="isShowPayTip" v-on:cancelevent="cancel" v-on:sureevent="sure"></v-input-alert>

    </div>
</template>

<script type="text/ecmascript-6">
  import { Grid, GridItem,GroupTitle } from 'vux'
  import vModal from 'components/dialog/modal.vue'

  import vActivityTip from 'components/dialog/ActivityTip'
  import vProtocol from 'components/dialog/protocol.vue'
  import vInputAlert from 'components/dialog/input-alert.vue'

    export default {
        components: {
          Grid,
          GridItem,
          GroupTitle,
          vModal,
          vProtocol,
          vInputAlert,
          vActivityTip
        },
        data(){
            return {
                initData:['alert','confirm','toast'],
                customData:['modal','protocol','inputAlert'],
                showModal:false,
                pageShow:false,
                isShowPayTip:false,
            }
        },
        created(){

        },
        methods:{
          onItemClick(index){

              if(this.initData[index] == 'alert'){
                this.showAlert('启动了首页')
              }else if(this.initData[index] == 'confirm'){
                const self = this
                this.$vux.confirm.show({
                  content: 'test',
                  cancelText: '取消',
                  confirmText: '返回首页',
                  onCancel () {
                  },
                  onConfirm () {
                    self.$router.replace({name: 'home'})
                  }
                })
              }
              else if(this.initData[index] == 'toast'){
                  this.showToast('test')
              }
          },

          onItemCustom(index){

              if(this.customData[index] == 'modal'){
                  this.showModal = true
              }else if(this.customData[index] == 'protocol'){
                this.pageShow = true
              }else {
                  this.isShowPayTip = true
              }

          },

          close(){
              alert('1')
              this.showModal = false
          },
          goto(){
            alert('2')
            window.location.href = 'https://www.baidu.com'
            this.showModal = false
          },
          cancel(){
            this.isShowPayTip = false
          },
          sure(){
            this.isShowPayTip = false
          }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .wx-main-view{
    .grid-center {
      display: block;
      text-align: center;
      color: #666;
    }

    .protocol-container {
      position:fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      padding:15px;
      /*width: 100%;*/
      /*height: 100%;*/
      background:rgba(0,0,0,0.4);
      display: flex;
      justify-content: center;
      align-items: Center;
      z-index:1000;
      .protocol-wrap{
        width:100%;
        height:100%;
        overflow-y:scroll;
        -webkit-overflow-scrolling:touch;
      }
    }
  }

</style>
