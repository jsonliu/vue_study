/**
 * Created by jsonliu on 2017/10/1.
 */
import types from '../mutation-types'

const state = {
  userInfo: {},
  addressInfo: {},
  token: ''
}
const getters = {
  getUserInfo: state => state.userInfo,
  getToken: state => state.token,
  getAddressInfo: state => state.addressInfo,
  isLogin: state => {
    return state.token
  }
}
const actions = {
  saveUserInfo ({ commit, state }, userInfo) {
    commit(types.UPDATE_USERINFO, userInfo)
  },
  removeUserInfo ({ commit, state }) {
    commit(types.UPDATE_USERINFO, {})
    commit(types.UPDATE_TOKEN, '')
  },
  saveToken ({ commit, state }, token) {
    commit(types.UPDATE_TOKEN, token)
  },
  saveSelectArea ({ commit, state }, addressInfo) {
    commit(types.UPDATE_SELECT_AREA, addressInfo)
  }
}

const mutations = {

  [types.UPDATE_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
  [types.UPDATE_TOKEN] (state, token) {
    alert('updata_token')
    state.token = token
    localStorage.setItem('token', token)
  },
  [types.UPDATE_SELECT_AREA] (state, addressInfo) {
    state.addressInfo = addressInfo
    localStorage.setItem('addressInfo', JSON.stringify(addressInfo))
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
