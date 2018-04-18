<template>
    <div class="wx-main-view">

      <h3>router-link跳转</h3>
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <router-link :to="{ name:'Dynamic', params:{id:'link-parems0001'}}">
              <span>详情:to-params</span>
            </router-link>
          </div>

        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <router-link :to="{ name: 'Dynamic',query:{id:'link-query0001'}}" replace>
              <span>详情:to-query-replace</span>
            </router-link>
          </div>

        </el-col>
        <el-col :span="6">
          <!--路由中path使用了:id  这样跳转路由不匹配,缺少一个参数-->
          <div class="grid-content bg-purple">
            <router-link to="router/details/dynamic" replace>
              <span>详情to-replace❎</span>
            </router-link>
          </div>

        </el-col>
        <el-col :span="6">
          <!--正确的做法是-->
          <div class="grid-content bg-purple">
            <router-link to="router/details/dynamic/link-parems0002" replace>
              <span>详情to-replace✅</span>
            </router-link>
          </div>

        </el-col>
      </el-row>

      <h3>this.$router.跳转</h3>
      <el-button-group>
        <el-button @click="myPush">push</el-button>
        <el-button @click="pushParems">push-params</el-button>
        <el-button @click="pushQuery">push-query</el-button>
        <el-button @click="replaceQuery">replace</el-button>
        <el-button @click="pathSkip">pathSkip</el-button>
      </el-button-group>

      <h3>watchTest的使用</h3>
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="grid-content bg-purple-light" @click="watchTest_A">watchTest-a</div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light" @click="watchTest_C">watchTest-c</div>
        </el-col>
      </el-row>
    </div>
</template>

<script type="text/ecmascript-6">

  import {mapGetters,mapActions} from  'vuex'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import ElButtonGroup from "../../../node_modules/element-ui/packages/button/src/button-group";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";

    export default {
      name: 'router',
      components: {
        ElButton,
        ElButtonGroup,
        ElCol,
        ElRow},
      data(){
        return {
          a:1,
          b:2,
          c:3
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
        myPush(){
          this.$router.push({name:'Dynamic'})
        },
        //// 发现问题：path不能喝params一起使用，否则params将无效。
        pushParems(){
          //路由中使用了:id  就必须带参数
//        this.$router.push({name:'Details'})
          this.$router.push({name:'Dynamic', params:{id:'push-parems-0001'}})
        },
        pushQuery(){
          //路由中使用了:id  就不能使用query带参数、跳转失败
          //没有使用 :id   query、params 都可以带参数
//        this.$router.push({name:'Dynamic',query:{id:'push-query-0001'}})

          this.$router.push({name:'Nodynamic',query:{id:'push-query-0001'}})
//      this.$router.push({name:'Nodynamic',params:{id:'push-params-0001'}})
        },
        replaceQuery(){
//      this.$router.replace({name:'Nodynamic',query:{id:'replace-query-0001'}})
          this.$router.replace({name:'Nodynamic',params:{id:'replace-params-0001'}})

        },

        pathSkip(){

          //找不到页面面，缺少参数
          //this.$router.push({path:'router/details/dynamic'})

          //还是缺少参数  path 不能用params、query带参数，只能拼接到path后面
          //this.$router.push({path:'router/details/dynamic',params:{id:'replace-path-parems-0001'}})
          //this.$router.push({path:'router/details/dynamic',query:{id:'replace-path-parems-0001'}})
          this.$router.push({path:'router/details/dynamic/path0001'})

        },

        watchTest_A(){
          this.a = 2
        },
        watchTest_C(){
          this.c = 4
        },

        fetchData(){
          console.log('获取数据')
        }
      },
      watch: {
        'a': function (val, oldVal) {
          console.log('a\n'+  'new: %s, old: %s', val, oldVal)
        },
        'b':'fetchData',
        c: {
          handler: function (val, oldVal) {
            console.log('c\n'+  'new: %s, old: %s', val, oldVal)
          },
          deep: true
        },

        '$route' (to, from) {

          console.log('路由变化监听to********\n');
          console.log(to)

          console.log('路由变化监听from********\n');
          console.log(from)

        }


      },
      created(){
//        this.$store.commit('changeSelect', 4)
//        console.log('selectValue的值改变为:\n'+this.$store.getters.getIndex)

        this.saveTabBarSelect(4)
        console.log('selectValue的值改变为:\n'+this.getTabBarSelectIndex)
      }
    }
</script>

<style lang="less" rel="stylesheet/less">

  @import "../../style/mixin";
  .wx-main-view{
    font-size: 15px;
    text-align: center;
    /*margin: 0 auto;*/
      /*font-size: 15px;*/
    }
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light{
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }

    }

</style>
