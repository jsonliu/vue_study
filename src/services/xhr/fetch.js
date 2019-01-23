/**
 * Created by jsonliu on 2017/10/6.
 */

const testApi = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=master'

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {

  type = type.toUpperCase()
  // var baseUrl = process.env.API_DOMAIN
  var baseUrl = testApi
  url = baseUrl + url

  if (window.fetch && method == 'fetch') {
    // get请求
    if (type === 'GET') {
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
    }
    // post请求
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // 跨域资源共享   前端在请求里面添加参数告诉后台需要支持跨域
      //   context.Response.Headers.Add("Access-Control-Allow-Origin","*")
      //   context.Response.Headers.Add("Access-Control-Allow-Methods", "GET,POST")
      mode: 'cors',
      cache: 'force-cache'
    }
    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    return new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      } else {
        requestObj = new ActiveXObject
      }
      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }
      requestObj.open(type, url, true)
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            // console.log('--------------'+requestObj.response)
            console.log(`%c响应:${url}`, 'color:green', obj)
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  } else {
  }
  /*
  *
  * CORS有两种模型可以实现：
   1.简单模型
   支持get/post/put/delete请求，例如返回Access-Control-Allow-Origin:*,但是不允许自定义header且会忽略cookies，且post数据格式有限制，只支持‘text/plain','application/x-www-urlencoded'and'multipart/form-data'，其中’text/plain'默认支持，后面两种需要下面的预检请求和服务器协商。

   2.协商模型/预检请求（Preflighted Request）
   举例：浏览器发出PUT请求，OPTION请求返回Access-Control-Allow-Origin:*,Access-Control-Allow-Methods:’PUT’，服务器同意所有域的PUT请求，浏览器收到并继续发出真正的PUT请求，服务器响应并再次返回Access-Control-Allow-Origin:*,允许浏览器的脚本执行服务器返回的数据。

   response.addHeader("Access-Control-Allow-Origin","http://www.company.com");

   Access-Control-Allow-Origin：允许跨域访问的域名，如果是公共的则返回*即可

   response.addHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS");

   Access-Control-Allow-Methods：允许跨域访问的谓词（方法），如GET,POST,DELETE,PUT（REST）
   后台代码在响应头添加
   context.Response.ContentType = "text/plain";
   context.Response.Headers.Add("Access-Control-Allow-Origin","*");
   context.Response.Headers.Add("Access-Control-Allow-Methods", "GET,POST");
  *
  * */
  // XMLHttpRequest
  // var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=master'
  // var xhr = new XMLHttpRequest()
  //
  // xhr.open('GET', apiURL)
  // xhr.onload = function () {
  //
  //   console.log('---------------'+xhr.response)
  // }
  // xhr.send()
}
