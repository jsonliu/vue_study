<template>
  <div class="page-loading"
       v-if="show">
    <spinner :type="spinnerType"
             class="load"></spinner>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Spinner } from 'vux';

  export default {
    components: {
      Spinner,
    },
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        spinnerType: 'dots',
      }
    },
    methods: {
      setOverflow (show) {
        document.documentElement.style.overflow = show ? 'hidden' : 'scroll'
      }
    },
    watch: {
      show (val) {
        this.setOverflow(val)
      }
    },
    activated () {
      this.setOverflow(this.show)
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin";

  .page-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    z-index: 98;
  }
</style>
