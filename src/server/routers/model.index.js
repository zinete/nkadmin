/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-19 16:50:47
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-19 17:04:34
 * @ Description:
 */

const { User } = require("./user/user.model");

// // 外键关联 多对一
// News.belongsTo(User, {
//   // 创建外键关联 News.userId => User.id
//   foreignKey: 'userId'
// })

module.exports = {
  User,
};
