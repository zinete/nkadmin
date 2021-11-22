/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-19 16:50:47
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:16:17
 * @ Description:
 */

import { User } from "./user/user.model";

// // 外键关联 多对一
// News.belongsTo(User, {
//   // 创建外键关联 News.userId => User.id
//   foreignKey: 'userId'
// })
export default {
  User,
};
