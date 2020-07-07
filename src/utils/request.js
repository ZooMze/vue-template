/*
 * @Author: your name
 * @Date: 2020-03-13 11:15:31
 * @LastEditTime: 2020-05-06 16:19:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-codechos-template\src\utils\request.js
 */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 完整的url = origin + ( base url + request url ) 前面的origin自动添加
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // 请求超时时长
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 在请求发送前执行
    if (store.getters.token) {
      // 让每个接口携带token
      // ['X-Token'] 是自定义的header键名, 根据实际需求重新定义即可
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * 如果你想在代码中使用HTTP请求的更多内容例如 headers 和 status
   * 修改返回值即可:  return  response => response
  */

  /**
   * 通过自定义代码判定请求状态
   * 以下是例子
   * 你同样可以直接使用 HTTP Status Code作为判断依据
   */
  response => {
    const res = response.data

    // 状态码只要不为20000, 全部判定为 请求接口未成功.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: token错误; 50012: 账户已在别处登录; 50014: token过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('你的登录信息已过期, 请重新登录', 'Confirm logout', {
          confirmButtonText: '重新登录',
          cancelButtonText: '留在本页',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.msg || error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
