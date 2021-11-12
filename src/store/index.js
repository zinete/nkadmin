import JWTDecode from 'jwt-decode'
import cookieparser from 'cookieparser'
export default {
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (process.server && process.static) return
      if (!req.headers.cookie) return
      const parsed = cookieparser.parse(req.headers.cookie)
      const accessToken = parsed.access_token
      if (!accessToken) return
      const { data } = JWTDecode(accessToken)
      if (data.userInfo) {
        commit('auth/SUCCESS_AUTH', {
          id: data.userInfo.id,
          nickName: data.userInfo.nickName,
          picture: data.userInfo.picture
        })
      }
    }
  }
}
