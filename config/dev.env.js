var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_DOMAIN: '"https://o2o.berchina.com:893/api/mobile"',
  // IMAGE_DOMAIN: '"http://121.43.178.103:8888/o2o-fs/view/"',
  //
  IMAGE_DOMAIN: '"https://oss.baobaobooks.net/"',


})
