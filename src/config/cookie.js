/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-01-23 23:03:19
 * @ Modified by: zhenghui
 * @ Modified time: 2021-06-25 10:56:13
 * @ Description:
 */

import Cookie from 'js-cookie'
export default {
  // 获取服务端cookie
  getcookiesInServer(req) {
    // eslint-disable-next-line camelcase
    const service_cookie = {}
    req &&
      req.headers.cookie &&
      req.headers.cookie.split(';').forEach(function(val) {
        const parts = val.split('=')
        service_cookie[parts[0].trim()] = (parts[1] || '').trim()
      })
    // eslint-disable-next-line camelcase
    return service_cookie
  },
  // 获取客户端cookie
  getcookiesInClient(key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  },
  // 删除客户端 cookie
  delcookiesInClient(key) {
    return Cookie.remove(key) ? Cookie.remove(key) : ''
  }
}
