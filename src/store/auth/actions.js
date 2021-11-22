import Cookie from "js-cookie";
import { Axios } from "../../config/http";
export default {
  async login({ commit }, res) {
    try {
      // 开始登录
      const { data, code, msg } = await Axios.post("/api/v1/user/login", {
        userName: res.userName,
        passWord: res.passWord,
      });
      if (data) {
        // 获取token
        const token = data.token;
        const { nickName, id, picture } = data.userInfo;
        const inFifteenMinutes = new Date(
          new Date().getTime() + 24 * 60 * 60 * 1000
        );
        // 持久化登录状态
        Cookie.set("access_token", token, { expires: inFifteenMinutes });

        // 更新用户信息
        commit("SUCCESS_AUTH", { nickName, id, picture });
        this.$router.push("/admin");
        return { msg, code };
      } else {
        return { msg, code };
      }
    } catch (err) {
      throw err;
    }
  },

  // 获取用户信息
  async getUserinfo({ commit }, res) {
    try {
      const { data, code } = await Axios.get("/api/v1/user/findOne", {
        id: res.id,
      });
      if (code === 0) {
        commit("SUCCESS_AUTH", {
          nickName: data.nickName,
          id: data.id,
          picture: data.picture,
        });
      }
    } catch (error) {}
  },
  async logout({ commit }) {
    await Cookie.remove("access_token");
    commit("LOG_OUT");
    this.$router.push("/");
  },
};
