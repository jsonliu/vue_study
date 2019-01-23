
import Vue from 'vue'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-default/index.css'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
// 统一浏览器默认样式
import './style/reset.css'
// 弹性布局
import './assets/js/flexible'
// 公用的方法、属性
import './services/global'
// 工具类
import './services/utils/index'
// promise判断结束请求的框架
require('promise.prototype.finally').shim()
// swiper.css
require('swiper/dist/css/swiper.css')
// Vuex状态管理的使用
// import Vuex from 'vuex'
// import stores from './stores.js'
// Vue.use(Vuex)
// //实例化store
// const store = new Vuex.Store(stores)
import store from './store'
// 弹窗的使用
import { AlertPlugin, ConfirmPlugin, ToastPlugin, LoadingPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
// 自定义插件使用
import VueGlobalPlugin from './plugins/VueGlobalPlugin'
Vue.use(VueGlobalPlugin)
// 图片的懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.5, // 1.3的距离是 当前dom距离页面底部的高度时就开始加载图片了
  // error: require('assets/error-404.jpg'),
  error: require('assets/defauls.jpg'),
  loading: require('assets/page_loading.gif'),
  attempt: 1, // 图片加载失败，最多重试的次数
  // 状态变化的回调监听，同时也可以使用lazyload的$on()函数(注意不是vue的)来监听状态变化的回调函数
  adapter: {
    loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
      // do something here
      // example for call LoadedHandler
      // LoadedHandler(el)
      // console.log('naturalWidth---------',naturalWidth)
      // console.log('naturalHeight---------',naturalHeight)
      // el.clientHeight  只读 能修改
      // console.log('--------------el',el)
      // el.clientHeight = (el.clientWidth)*naturalHeight/(window.innerWidth)
    },
    loading (listender, Init) {
      // console.log('loading')
    },
    error (listender, Init) {
      // console.log('error')
    }
  },
  filter: {
    webp (listener, options) {
      if (options.supportWebp) {
        console.log('listener.el.clientWidth--------------------', listener.el.clientWidth)
        console.log('listener.el.clientHeight--------------------', listener.el.clientHeight)
        const length = listener.el.clientWidth >= listener.el.clientHeight ? listener.el.clientWidth : listener.el.clientHeight
        // 孩宝小镇图片服务处理
        console.log('length--------------------', length)
        console.log('document.body.clientWidth------------------------', document.body.clientWidth)
        const size = (length / document.body.clientWidth) * 100
        console.log('size------------------------', size)
        let suffix = ''
        if (size >= 100) {
          suffix = ''
        } else if (size > 50 && size < 100) {
          suffix = '@1l_640w_640h_95q.webp'
        } else if (size > 25 && size <= 50) {
          suffix = '@1l_320w_320h_95q.webp'
        } else if (size > 10 && size <= 25) {
          suffix = '@1l_160w_160h_95q.webp'
        } else if (size > 5 && size <= 10) {
          suffix = '@1l_80w_80h_95q.webp'
        } else if (size > 0 && size <= 5) {
          suffix = '@1l_50w_50h_95q.webp'
        }
        listener.src = process.env.IMAGE_DOMAIN + listener.src + suffix
      } else {
        listener.src = process.env.IMAGE_DOMAIN + listener.src
      }
    }
  }
})
// 定义一些全局函数
Vue.prototype.showAlert = (text) => {
  Vue.$vux.alert.show({
    content: text
  })
}
Vue.prototype.showToast = (text, onHide) => {
  Vue.$vux.toast.show(
    {
      type: 'text',
      text: text,
      time: 2000,
      width: '15em',
      position: 'middle',
      isShowMask: true,
      onHide () {
        if (onHide) {
          onHide()
        }
      }
    }
  )
}
// 当缓存中存在userInfo和token把它们放入vuex
try {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    if (token) {
      store.state.user.token = token
    }
  }
  if (localStorage.getItem('userInfo')) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo) {
      store.state.user.userInfo = userInfo
    }
  }
} catch (err) {
  console.log(err)
}
// Vue.config
Vue.config.productionTip = false
Vue.config.performance = true
// 取消 Vue 所有的日志与警告
Vue.config.silent = false
// 配置是否允许 vue-devtools 检查代码
Vue.config.devtools = true
Vue.config.errorHandler = function (err, vm, info) {
  console.log(err + '\n')
  console.log(info + '\n')
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  template: '<App/>',
  components: { App }
})
