/**
 * @ Author: zhenghui
 * @ Create Time: 2021-06-24 16:39:32
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-23 11:25:25
 * @ Description: 统一路由管理
 */
import docs from "./docs/docs.router";
import user from "./user/user.router";

export default function (app) {
  app.use(docs.routes()).use(docs.allowedMethods());
  app.use(user.routes()).use(user.allowedMethods());
}
