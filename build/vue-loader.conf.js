var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),

  //以设计稿的宽度为750px，即：designWidth = 375，同时设定在750px屏宽下 1rem=100px ，即：rem2px = 100

  //  设备像素比 = 物理像素 / 设备独立像素   dpr = px / dp    2 = 750 / 375

  /*add*/
  postcss: [
    require('postcss-plugin-for-vue-px2rem-ignore1px')({

      //引入弹性布局  flexible  才有效果
      // remUnit:37.5  // rem 基准，由设计稿决定（750/10）375/667
      remUnit: 37.5
      // remUnit: 75
    })
  ]
  // transformToRequire: {
  //   video: 'src',
  //   source: 'src',
  //   img: 'src',
  //   image: 'xlink:href'
  // }
}
