<template>
    <div class="wx-main-view">
      <app-header>
          {{$route.meta.title}}
      </app-header>

      <box>
        <divider>jsonp网路请求</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="default" @click.native="getSingerLis">获取歌手列表</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="default" @click.native="getSingerInfoPromis">获取歌手详情</x-button>
          </flexbox-item>
        </flexbox>
      </box>

      <div>
        <panel header="歌手列表" :list="singerList" type="1" @on-click-item="getSingerInfo"></panel>
      </div>

      <div>

      </div>

    </div>
</template>

<script type="text/ecmascript-6">

    import { XButton, Box, Flexbox, FlexboxItem, Divider, Panel} from 'vux'
    import AppHeader from 'components/common/header.vue'
    import {getSingerList, getSingerDetail} from 'api/jsonpApi/jsonptest'
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
            return {
                /*
                *
                *
                * {
                 "Farea": "1",
                 "Fattribute_3": "3",
                 "Fattribute_4": "0",
                 "Fgenre": "0",
                 "Findex": "X",
                 "Fother_name": "Joker",
                 "Fsinger_id": "5062",
                 "Fsinger_mid": "002J4UUk29y8BY",
                 "Fsinger_name": "薛之谦",
                 "Fsinger_tag": "541,555",
                 "Fsort": "1",
                 "Ftrend": "0",
                 "Ftype": "0",
                 "voc": "0"
                 }
                *
                *
                * {
                 src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                 title: '标题二',
                 desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                 url: {
                 path: '/component/radio',
                 replace: false
                 },
                 meta: {
                 source: '来源信息',
                 date: '时间',
                 other: '其他信息'
                 }
                 }
                * */

                singerList:[]

            }
        },
        created(){

        },
        methods:{
          getSingerLis(){
            getSingerList().then((res) =>{

              if(res.code == 0){

                var dataArr = res.data.list.slice(0,10)

                /*使用for循环*/
//                var newArr = []
//                for (var i = 0;i<dataArr.length; i ++){
//                  var item = dataArr[i]
//                  var docObj = {}
//                  docObj['src'] ='http://placeholder.qiniudn.com/60x60/3cc51f/ffffff'
//                  docObj['desc'] = '描述，你是一个好歌手'
//                  docObj['title'] = item.Fsinger_name
//                  docObj['id'] =item.Fsinger_id
//                  newArr.push(docObj)
//                }
//                this.singerList = newArr
                /*使用map函数*/
                this.singerList = dataArr.map((item,index)=>{
                    let obj = {}
                    obj.src = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                    obj.desc = '描述，你是一个好歌手'
                    obj.title = item.Fsinger_name
                    obj.id = item.Fsinger_mid
                    return obj
                })

              }
            })
          },
          getSingerInfo(item){

            if(item !== undefined){
              getSingerDetail(item.id).then((res) =>{

                if(res.code == 0){

                  console.log(res.data)
                }else {

                  this.showToast('网络出错')
                }
              })
            }
          },


          getSingerInfoPromis(){

            getSingerList().then((res) =>{

              if(res.code == 0){

                var dataArr = res.data.list.slice(0,10)
                console.log('歌手列表----------------------',dataArr)
                /*使用for循环*/
                var newArr = []
                for (var i = 0;i<dataArr.length; i ++){
                  var item = dataArr[i]
                  var docObj = {}
                  docObj['src'] =`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                  docObj['desc'] = '描述，你是一个好歌手'
                  docObj['title'] = item.Fsinger_name
                  docObj['id'] =item.Fsinger_mid
                  newArr.push(docObj)
                }
                this.singerList = newArr

                return new Promise((resolve,reject) =>{
                    resolve(newArr)
                })

              }
            }).then((resDetails) =>{

                  var itemId = resDetails[0].id
                  getSingerDetail(itemId).then((res) =>{

                    if(res.code == 0){

                      console.log('歌手详情----------------------',res.data)
                    }else {

                      this.showToast('网络出错')
                    }
                  })

            })
          }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../../style/mixin";

</style>
