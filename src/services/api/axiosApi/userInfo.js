/**
 * Created by jsonliu on 2017/10/17.
 */

import http from '../../axios/axios'

export default {

  login(account,password){

    return http.post('user/login', {
      account: account,
      password: password
    })

  },
  getUserInfo(){

    return http.get('user/info')

  }

}
