/**
 * Created by jsonliu on 2017/10/17.
 */

import axios from 'axios'
import qs from 'qs'
import cache from '../cache'
import store from 'store'

const httpAxios =  axios.create()

/*配置信息*/
httpAxios.defaults.baseURL = process.env.API_DOMAIN
httpAxios.defaults.headers['uid'] = cache.getGUID()
httpAxios.defaults.timeout = 1000 * 10


/*request拦截器*/
httpAxios.interceptors.request.use(config => {
  config.headers['token'] = store.state.user.token || ''
  const method = config.method
  if (method === 'post' || method === 'put') {
    if (config.format && config.format == 'json') {
      config.headers['Content-Type'] = 'application/json'
    } else {
      config.data = qs.stringify(config.data)
    }
  }
  console.log(`%c请求:${config.url}`,"color:blue",config)
  return config
}, error => {
  return Promise.reject(error)
})

/*response拦截器*/
httpAxios.interceptors.response.use(response => {

  console.log(`%c响应:${response.config.url}`,'color:green',response.data)

  return response.data

}, error => {
  if (error.response) {
    console.log('错误原因:',error.response.data.message)
  } else {
    console.log('请求无响应')

  }
  return Promise.reject(error)
})


export default httpAxios







