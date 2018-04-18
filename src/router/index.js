import Vue from 'vue'
import Router from 'vue-router'

// import store from '../store/index'
import store from 'store'


Vue.use(Router)

/*
*  常规导入
* */
// import Home from '@/view/public/home'
/*
* 等价上面的
* */
// import Home from 'view/public/home.vue'


/*
* 懒加载
*
* 用vue.js写单页面应用时，会出现打包后的JavaScript包非常大，
* 影响页面加载，我们可以利用路由的懒加载去优化这个问题，
* 当我们用到某个路由后，才去加载对应的组件，这样就会更加高效
* */
/*
* home
* */
const Home = resolve => require(['view/public/home.vue'],resolve)
/*
* 404 页面
* */
const errorPage = resolve => require(['view/public/404.vue'],resolve)


/*
* 实例化->导出模板
* */
// export default new Router({})

const routers = [
    {

      //以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
      path: '/',
      component:Home,
      /*
      *
      * */
      // meta:{
      //   keepAlive: true // 是否缓存首页
      // },
      //多个视图就需要多个组件
      // components:{
      //   default:Home,
      //   one:One,
      //   two:Two,
      //   three:Three
      //
      // },

      /*嵌套路由*/
      children:[
        {
          // path: ''  ' ' 没有匹配到合适的子路由,跳转到这个页面
          //一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置（带上 s）：
          path: '/',
          // name:'home',
          meta :{title :'vuejs'},
          component: resolve => require(['view/vuejs/vuejs.vue'],resolve),
        },
          // --- 可以去掉？
        {
          path:'/vuejs',
          name:'vuejs',
          component: resolve => require(['view/vuejs/vuejs.vue'],resolve),
          meta :{title :'vuejs'},
        },
        {
          path: '/vux',
          // name: 'Vux',
          component: resolve => require(['view/vux/vux-home.vue'],resolve),
          meta :{title :'vux'},
          children: [
            /* vux默认 */
            {
              path: '/',
              meta: {
                keepAlive: false // 不需要被缓存
              },
              redirect: {name: 'VuxCommon'} // 重定向
            },

            // /* conmom */
            {
              path: '/vux/vux-common',
              name: 'VuxCommon',
              meta: {
                title:"common",
                keepAlive: false // 不需要被缓存
              },
              component: resolve => require(['view/vux/vux-common.vue'], resolve),
            },
            /* dialog */
            {
              path: '/vux/vux-dialog',
              name: 'VuxDialog',
              meta: {
                title:"dialog",
                keepAlive: false // 不需要被缓存
              },
              component: resolve => require(['view/vux/vux-dialog.vue'], resolve)
            },
            /* form */
            {
              path: '/vux/vux-form',
              name: 'VuxForm',
              meta: {
                title:"form",
                keepAlive: false // 不需要被缓存
              },
              component: resolve => require(['view/vux/vux-form.vue'], resolve)
            },
            /* layout */
            {
              path: '/vux/vux-layout',
              name: 'VuxLayout',
              meta: {
                title:"layout",
                keepAlive: false // 不需要被缓存
              },
              component: resolve => require(['view/vux/vux-layout.vue'], resolve)
            },
            ]
        },
        {
          path: '/other',
          name: 'Other',
          component: resolve => require(['view/other/other.vue'],resolve),
          meta :{
            title :'自定义',
            requiresAuth:true//需要登陆
          },
        },
        {
          path: '/vuex',
          name: 'Vuex',
          component: resolve => require(['view/vuex/vuex.vue'],resolve),
          meta :{title :'vuex'},
        },
        {
          path: '/router',
          name: 'Router',
          component: resolve => require(['view/router/router.vue'],resolve),
          meta : {
            title :'router',
            requiresAuth:false//需要登陆
          },
        }
      ]
    },

    /***************vuejs跳转页面****************/
    {
      path:'/vuejs/inline',
      name:'inline',
      meta :{title :'内嵌组件'},
      component:resolve => require(['view/vuejs/inline/inline.vue'],resolve)
    },
    {
      path:'/vuejs/recursive',
      name:'recursive',
      meta :{title :'递归组件'},
      component:resolve => require(['view/vuejs/recursive/recursive.vue'],resolve)
    },
    {
      path:'/vuejs/directives',
      name:'directives',
      meta :{title :'自定义指令'},
      component:resolve => require(['view/vuejs/directives/directives.vue'],resolve)
    },
    {
      path:'/vuejs/networks/jsonp',
      name:'jsonp',
      meta :{title :'jsonp'},
      component:resolve => require(['view/vuejs/networks/jsonp.vue'],resolve)
    },
    {
      path:'/vuejs/networks/xhr',
      name:'xhr',
      meta :{title :'xhr'},
      component:resolve => require(['view/vuejs/networks/xhr.vue'],resolve)
    },
    {
      path:'/vuejs/networks/axios',
      name:'axios',
      meta :{title :'axios'},
      component:resolve => require(['view/vuejs/networks/axios.vue'],resolve)
    },

    {
      path:'/vuejs/flex/flex',
      name:'flex',
      meta :{title :'flex'},
      component:resolve => require(['view/vuejs/flex/flex.vue'],resolve)
    },

    {
      path:'/vuejs/line/line',
      name:'line',
      meta :{title :'line'},
      component:resolve => require(['view/vuejs/line/line.vue'],resolve)
    },
    {
      path:'/vuejs/line/wireframe',
      name:'wireframe',
      meta :{title :'wireframe'},
      component:resolve => require(['view/vuejs/line/wireframe.vue'],resolve)
    },
    {
      path:'/vuejs/polygon/polygon',
      name:'polygon',
      meta :{title :'polygon'},
      component:resolve => require(['view/vuejs/polygon/polygon.vue'],resolve)
    },

    /*********************************************/




    {
      path:'/router/details/dynamic/:id',
      name:'Dynamic',
      meta :{title :'动态路由'},
      component:resolve => require(['view/router/details/dynamic.vue'],resolve)
    },
    {
      path:'/router/details/no-dynamic',
      name:'Nodynamic',
      meta :{title :'非动态路由'},
      component:resolve => require(['view/router/details/no-dynamic.vue'],resolve)
    },


    {
      path:'/user/login',
      name:'login',
      meta :{title :'登陆'},
      component:resolve =>require(['view/public/user/login.vue'],resolve)
    },
    {
      path:'/user/register',
      name:'register',
      meta :{title :'注册'},
      component:resolve =>require(['view/public/user/register.vue'],resolve)
    },


    // 测试页面
    {
      path:'/test',
      name:'NotLogin',
      component:resolve => require(['view/viewtest/not-login.vue'],resolve),
    },


    {
      path: '*',
      // component: errorPage,
      // //导航钩子  --- 独享钩子
      // meta :{title :'404'},
      // beforeEnter: (to, from, next) => {
      //   // alert('404了')
      //   next()
      // }
      redirect: {name: 'vuejs'} // 重定向  如果 URL 匹配不到任何静态资源 home
    }
  ]

//实例化
const vueRouter = new Router({

  routes:routers,

  //设置路由模式
  //vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载
  //hash 域名  后面有#
  mode: 'history',


  //设置滚动
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})

// 导航钩子   --- 全局钩子

vueRouter.beforeEach((to, from, next) => {

  // var islogin = false
  const islogin = !isEmptyObject(store.state.user.token)

  //赋值标题
  document.title = to.meta.title;

  //设置回到顶部
  window.scrollTo(0, 0)


  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!islogin) {

      // console.log('需要登录')
      // next()

      next({
        path: '/user/login',
        query: { redirect: to.fullPath }
      })

    } else {

      store.commit('UPDATE_TOKEN','')
      next()
    }
    return
  }
  next() // 确保一定要调用 next()
  // ...
})

vueRouter.afterEach(route => {
  // ...
})

//导出模板
export default vueRouter

