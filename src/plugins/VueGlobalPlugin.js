/**
 * Created by jsonliu on 2017/10/8.
 */

import xhrData from '../services/xhr/fetchData'

let vueGlobalPlugin = {}

vueGlobalPlugin.install = (Vue,options) =>{

  // 注入组件
  Vue.mixin({

    methods: {
      resetData() {
        // 重新调用 Vue组件中 data() 方法重置页面数据的意思
        Object.assign(this.$data, this.$options.data())
      }
    },
    mounted() { // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
      const settings = this.$options.settings
      if (settings && settings.resetData) {
        this.$events.on(this.$route.name, () => {
          this.resetData()
        })
      }
    },
    beforeDestroy() { // 实例销毁之前调用。在这一步，实例仍然完全可用。
      const settings = this.$options.settings
      if (settings && settings.resetData) {
        this.$events.off(this.$route.name)
      }
    }

  })

  // 添加属性
  /*加载框*/
  Vue.prototype.$showLoading = (text ='') =>{
    Vue.$vux.loading.show({text: text})
  }
  Vue.prototype.$hideLoading = () => {
    Vue.$vux.loading.hide()
  }

  //添加对象
  Object.defineProperty(Vue.prototype,'$xhrData',{value:xhrData})

}

export default vueGlobalPlugin
