import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { // 引用 modules
    app, // 应用信息
    permission, // 权限
    settings, // 配置项
    user // 用户信息
  },
  getters // 注册getters
})

export default store
