/**
 * Created by jsonliu on 2017/10/1.
 */

/**
 * action 会收到 store 作为它的第一个参数
 * 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
 * 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
 */

/******user*****/

import types from './mutation-types'

const saveUserInfo = ({ commit, state },userInfo) => {
  commit(types.UPDATE_USERINFO, userInfo)
}

const removeUserInfo = ({ commit, state }) => {
  commit(types.UPDATE_USERINFO, {})
  commit(types.UPDATE_TOKEN, '')
}

const saveToken = ({commit, state}, token) => {
  commit(types.UPDATE_TOKEN, token)
}
const saveSelectArea = ({commit, state}, addressInfo) => {
  commit(types.UPDATE_SELECT_AREA, addressInfo)
}

/******tabbar*****/
const saveTabBarSelect = ({commit,state},index) =>{
  commit(types.TABBAR_SELECTED,index)
}

export {saveUserInfo,removeUserInfo,saveToken,saveSelectArea,saveTabBarSelect}
