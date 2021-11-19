/**
 * @ Author: zhenghui
 * @ Create Time: 2021-06-24 16:39:32
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-19 16:47:02
 * @ Description: 统一路由管理
 */

const user = require("./user/user.router");

module.exports = function (app) {
  app.use(user.routes()).use(user.allowedMethods());
};
