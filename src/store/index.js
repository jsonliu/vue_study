/**
 * Created by jsonliu on 2017/10/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//分离 actions 、getters
import * as actions from './actions'
import * as getters from './getters'
import types from './mutation-types'


import tabbar from './modules/tabbar'
import user from './modules/user'



/*
 * Vuex 和单纯的全局对象有以下两点不同：

 1.Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，
 那么相应的组件也会相应地得到高效更新。

 2.你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
 这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
 *
 * */

// 创建一个对象来保存应用启动时的初始状态
// const state = {
//   // 放置初始状态
//
//   /******user*****/
//   userInfo: {},
//   addressInfo: {},
//   token: '',
//
//   /******tabbar*****/
//   tabbar_selected:0,
//
//
// }
//
// const mutations = {
//
//
//   /******user*****/
//   [types.UPDATE_USERINFO](state, userInfo) {
//     state.userInfo = userInfo
//     localStorage.setItem('userInfo',JSON.stringify(userInfo))
//   },
//   [types.UPDATE_TOKEN](state, token) {
//     state.token = token
//     localStorage.setItem('token',token)
//   },
//   [types.UPDATE_SELECT_AREA](state, addressInfo) {
//     state.addressInfo = addressInfo
//     localStorage.setItem('addressInfo',JSON.stringify(addressInfo))
//   },
//
//   /******tabbar*****/
//
//     [types.TABBAR_SELECTED](state, index){
//     state.tabbar_selected = index
//   },
//
//
// }

// const getters = {
//
//   /******user*****/
//
//   getUserInfo: state => state.userInfo,
//   getToken: state => state.token,
//   getAddressInfo: state => state.addressInfo,
//   isLogin: state => {
//     return state.token ? true : false
//   },
//
//   /******tabbar*****/
//   getTabBarSelectIndex:state =>state.tabbar_selected,
// }
//
// const actions = {
//
//   /******user*****/
//   saveUserInfo({commit, state}, userInfo) {
//     commit(types.UPDATE_USERINFO, userInfo)
//   },
//   removeUserInfo({commit, state}){
//     commit(types.UPDATE_USERINFO, {})
//     commit(types.UPDATE_TOKEN, '')
//   },
//   saveToken({commit, state}, token) {
//     commit(types.UPDATE_TOKEN, token)
//   },
//   saveSelectArea({commit, state}, addressInfo) {
//     commit(types.UPDATE_SELECT_AREA, addressInfo)
//   },

//
//   /******tabbar*****/
//
//   saveTabBarSelect({commit,state},index){
//     commit(types.TABBAR_SELECTED,index)
//   }
//
// }

// export default new Vuex.Store({
//
//   // 整合初始状态和变更函数，我们就得到了我们所需的 store
//   // 至此，这个 store 就可以链接到我们的应用中
//     strict: process.env.NODE_ENV !== 'production',
//     actions,
//     getters,
//     state,
//     mutations
//
// })

/*模块化使用*/
export default new Vuex.Store({
  modules: {
    tabbar,
    user,
  }
})

