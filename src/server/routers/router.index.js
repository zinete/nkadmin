/**
 * @ Author: zhenghui
 * @ Create Time: 2021-06-24 16:39:32
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:16:35
 * @ Description: 统一路由管理
 */

import user from "./user/user.router";

export default function (app) {
  app.use(user.routes()).use(user.allowedMethods());
}
