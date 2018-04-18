/**
 * Created by jsonliu on 2017/10/17.
 */

import originJsonp from 'jsonp'

export default function jsonp(url,data,option) {

  url += (url.indexOf('?') < 0 ? '?':'&') + parem(data)

  return new Promise ((resolve,reject) =>{
    originJsonp(url,option,(err,data) =>{

      if(!err){
        resolve(data)
      }else {
        reject(err)
      }

    })
  })

}
export function parem(data) {

  let url = ''
  for (var key in data){

    let value = data[key] !== undefined ? data[key] :''
    url += '&' + key +'=' + encodeURIComponent(value)
  }

  return url ? url.substring(1) :''

}
