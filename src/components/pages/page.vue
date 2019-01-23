<template>
  <div class="page-view">
    <div v-if="showHeader">
      <v-nav-bar :showBack="showBack"
                 v-on:rightPressed="rightMore">
        <slot>
        </slot>
        <div slot="right">
          <slot name="right"></slot>
        </div>
        <div slot="left">
          <slot name="left"></slot>
        </div>
      </v-nav-bar>
    </div>
    <div v-show="isShowContent">
      <slot name="content">
      </slot>
    </div>
    <v-page-loading :show="isShowLoading"></v-page-loading>
    <v-page-network-error :show="isShowNetworkError"></v-page-network-error>

  </div>
</template>
<script type="text/ecmascript-6">
  import vNavBar from 'components/common/header'
  import vPageLoading from 'components/pages/page-loading'
  import vPageNetworkError from 'components/pages/page-network-error'
  export default {
    components: {
      vNavBar,
      vPageLoading,
      vPageNetworkError
    },
    data () {
      return {}
    },
    props: {
      // 是否显示header组件
      showHeader: {
        type: Boolean,
        default: true
      },
      // header是否显示返回按钮
      showBack: {
        type: Boolean,
        default: true
      },
    },
    computed: {
      isShowContent () {
        return true
      },
      isShowLoading () {
        return false
      },
      isShowNetworkError () {
        return false
      }
    },
    created () {
    },
    methods: {
      rightMore () {
        this.$emit('rightPressed')
      }
    },
    activated () {
      document.body.scrollTop = this.scrollTop
      //      console.log(`${this.$route.name}activated scrollTop =`, this.scrollTop)
    },
    deactivated () {
      this.scrollTop = document.body.scrollTop
      //      console.log(`${this.$route.name}deactivated scrollTop =`, document.body.scrollTop)
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin";
  .page-view {
  }
</style>
