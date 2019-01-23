/**
 * Created by jsonliu on 2017/10/1.
 */

import types from '../mutation-types'

const state = {
  tabbar_selected: 0
}
const getters = {
  getTabBarSelectIndex: state => state.tabbar_selected
}

const actions = {
  saveTabBarSelect ({ commit, state }, index) {
    commit(types.TABBAR_SELECTED, index)
  }
}
const mutations = {
  [types.TABBAR_SELECTED] (state, index) {
    state.tabbar_selected = index
  }
}
export default {
  state,
  getters,
  actions,
  mutations

}
