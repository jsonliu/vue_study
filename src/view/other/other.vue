<template>
  <div class="wx-main-view">
    <h3 style="text-align: center">el组件使用测试</h3>
    <div class="btn-view">
      <el-button-group>
        <el-button @click="btnAction(1)">默认按钮1</el-button>
        <el-button @click="btnAction(2)">默认按钮2</el-button>
      </el-button-group>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters, mapActions } from 'vuex'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import ElButtonGroup from "../../../node_modules/element-ui/packages/button/src/button-group";
  export default {
    components: {
      ElButtonGroup,
      ElButton
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'getTabBarSelectIndex',
      ])
    },
    methods: {
      ...mapActions([
        'saveTabBarSelect',
      ]),
      btnAction (value) {

        alert(value)
      }
    },
    created () {
    },
    activated () {
      //      this.$store.commit('changeSelect', 2)
      //      console.log('selectValue的值改变为:\n'+this.$store.getters.getIndex)
      this.saveTabBarSelect(2)
      console.log('selectValue的值改变为:\n' + this.getTabBarSelectIndex)
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .btn-view {
    /*margin: 0 auto;*/
    height: 100px;
    margin-top: 20px;
    text-align: center;
  }
</style>
