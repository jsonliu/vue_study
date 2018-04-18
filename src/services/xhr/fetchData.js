/**
 * Created by jsonliu on 2017/10/6.
 */


import fetch from 'services/xhr/fetch.js'


/*接口api*/

export default {

  //测试接口
  fetchGitHubInfo(url,data){

    return fetch(url, data)
  }
  // const fetchGitHubInfo = data => fetch('', data);
}

