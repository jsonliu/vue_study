<template>
  <div>
    <tab :line-width=2 active-color='d6000f' v-model="index">
      <tab-item class="vux-center" :selected="tag === item" v-for="(item, index) in tagList"  @on-item-click="selectItem" @click="tag = item" :key="index">{{item}}</tab-item>
    </tab>

    <!--嵌套路由不使用router-view  不显示子组件-->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

  import { Tab,TabItem } from 'vux'
  import {mapGetters,mapActions} from  'vuex'

  const list = () => ['common', 'dialog', 'form', 'layout']
  const name = () => ['VuxCommon', 'VuxDialog', 'VuxForm', 'VuxLayout']

  export default {

    name: 'vux-home',
    components: {
      Tab,
      TabItem
    },
    data () {
      return {
        tagList:list(),
        tagNameArray:name(),
        index: 0,
        tag:'资讯'

      }
    },
    created(){

//      this.$store.commit('changeSelect', 1)
//      console.log('selectValue的值改变为:\n'+this.$store.getters.getIndex)

      this.saveTabBarSelect(1)
      console.log('selectValue的值改变为:\n'+this.getTabBarSelectIndex)
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
      selectItem(index){
        console.log('------------'+index)

        this.$router.replace({name:this.tagNameArray[index]})

      }
    }
}
</script>


<style lang="less" rel="stylesheet/less">

</style>
