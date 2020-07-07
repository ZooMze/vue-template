/*
 * @Author: your name
 * @Date: 2020-03-13 11:15:31
 * @LastEditTime: 2020-05-07 11:01:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-codechos-template\src\main.js
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // 一个现代化的可选的CSS reset

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // 多语言

import '@/styles/index.scss' // 全局 css

import '@/styles/element-variables.scss' // 引入全局修改Element样式

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // 权限控制

/**
 * 如果你想用 MockJs 来取代 mock-server
 * 你可以执行语句: mockXHR()
 *
 * 当前MockJS会被用于生产环境,
 * 发布到线上之前请确保移除 ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明(这里添加了全局配置)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

// 如果是按需引入, 再要添加全局配置项时, 需要参照如下方式配置
// import { Button } from 'element-ui';
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
// Vue.use(Button);

Vue.config.productionTip = false

Vue.config.devtools = true // 总是打开 开发者工具

// Vue.config.errorHandler = function(err, vm, info) {
//   // 在此拦截错误信息, 可以发送至后台存储
//   console.log(err)
// }

Vue.nextTick()
  .then(function() {
    console.log(1111111111)
    // DOM 更新了
  })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
