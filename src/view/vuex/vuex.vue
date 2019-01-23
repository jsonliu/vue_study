<template>
  <div class="wx-main-view">
    <!--<p>状态管理</p>-->
    <x-button @click.native="deleteUserinfo">删除用户信息</x-button>
  </div>
</template>

<script type="text/ecmascript-6">

  import { mapGetters, mapActions } from 'vuex'
  import { XButton } from 'vux'
  export default {
    components: {
      XButton
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'getUserInfo',
        'getToken',
        'getTabBarSelectIndex',
      ]),

    },
    methods: {
      ...mapActions([
        'saveUserInfo',
        'saveToken',
        'saveTabBarSelect',
        'removeUserInfo'
      ]),
      deleteUserinfo () {
        this.removeUserInfo()
        console.log('删除后获取用户信息' + JSON.stringify(this.getUserInfo))
        console.log('删除后获取token' + JSON.stringify(this.getToken))
      }
    },
    created () {
      console.log('获取用户信息' + JSON.stringify(this.getUserInfo))
      console.log('获取token' + JSON.stringify(this.getToken))

    },
    activated () {
      //      this.$store.commit('changeSelect', 3)
      //      console.log('selectValue的值改变为:\n'+this.$store.getters.getIndex)

      this.saveTabBarSelect(3)
      console.log('selectValue的值改变为:\n' + this.getTabBarSelectIndex)
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
