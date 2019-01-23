<template>
  <div class="nav-bar">
    <header class="nav-bar-header">
      <!--不需要这样修改-->
      <!--<x-header :left-options="{showBack:showBack,backText:''}" style="background-color:#d6000f;">{{tag}}</x-header>-->
      <x-header :left-options="{showBack:showBack,backText:backText}">
        <slot>
          {{title}}
        </slot>
        <div slot="left">
          <slot name="left"></slot>
        </div>
        <div slot="right"
             @click="rightMore"
             style="width: 60px;height: 40px">
          <slot name="right"></slot>
        </div>
      </x-header>
    </header>
    <div class="nav-bar-box"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader } from 'vux'

  export default {
    name: 'AppHeader',
    components: {
      XHeader
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      showBack: {
        type: Boolean,
        default () {
          return true
        }
      },
      backText: {
        type: String,
        default () {
          return '返回'
        }
      },
      leftText: {
        type: String,
        default () {
          return ''
        }
      },
      rightText: {
        type: String,
        default () {
          return ''
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      rightMore () {
        this.$emit('rightPressed');
      }
    },
  }
</script>
<style lang="less" rel="stylesheet/less">
</style>
