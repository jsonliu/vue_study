/**
 * Created by jsonliu on 2017/10/8.
 */

/**
 * 这个 getter 函数会返回 count 的值
 * 在 ES6 里你可以这样写
 * export const getCount = state => state.count
 */

const getUserInfo = state => state.userInfo
const getToken = state => state.token
const getAddressInfo = state => state.addressInfo
const isLogin = state => {
  return state.token ? true : false
}

const getTabBarSelectIndex = state => state.tabbar_selected

export { getUserInfo, getToken, getAddressInfo, isLogin, getTabBarSelectIndex }
