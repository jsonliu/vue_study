<template>
  <div class="inline-view">
    <app-header>
      {{$route.meta.title}}
    </app-header>

  </div>
</template>

<script type="text/ecmascript-6">
  import AppHeader from 'components/common/header.vue'

  export default {
    components: {
      AppHeader,
    },
    data () {
      return {}
    },
    created () {
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
