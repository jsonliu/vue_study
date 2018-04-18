<template>
    <div class="wx-main-view">
        <app-header>
            {{$route.meta.title}}
        </app-header>

        <div class="btn-view">
          <el-button-group>
            <el-button @click="getUser">获取用户信息</el-button>
          </el-button-group>
        </div>

      <div>
        <p>{{userInfo}}</p>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import AppHeader from 'components/common/header.vue'
    import userInfoApi from 'api/axiosApi/userInfo'
    import ElButtonGroup from "../../../../node_modules/element-ui/packages/button/src/button-group";
    import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
    export default {
        components: {
          ElButton,
          ElButtonGroup,
          AppHeader
        },
        data(){
            return {
              userData:null
            }
        },
        computed:{
          userInfo(){
              return this.userData
          }
        },
        created(){

        },
        methods:{
          getUser(){
            userInfoApi.getUserInfo().then((res) =>{
              this.userData = res.data
            })
          }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../../style/mixin";
    .btn-view{
      text-align: center;
    }

</style>
