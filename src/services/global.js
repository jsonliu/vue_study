/**
 * Created by jsonliu on 2017/10/8.
 */


/**
 jQuery中的实现方法
 console.log(isEmptyObject());           //true
 console.log(isEmptyObject({}));         //true
 console.log(isEmptyObject(null));       //true
 console.log(isEmptyObject(23));         //true
 console.log(isEmptyObject({"te": 2}));      //false
 **/
// 判断对象是否为空
isEmptyObject = function (e) {
  var t
  for (t in e)
    return !1;
  return !0
}


const dpr = lib.flexible.dpr
