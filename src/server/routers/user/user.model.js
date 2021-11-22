/**
 * @ Author: ZhengHui
 * @ Create Time: 2020-09-15 23:20:02
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:53:36
 * @ Description: 创建 user model
 */

import seq from "../../config/db/seq";
import Sequelize from "sequelize";

// 表名 users
const User = seq.define("user", {
  // id 更新和创建时间 会自动创建，生成主键自增
  userName: {
    type: Sequelize.STRING, // varchar(255)
    allowNull: false,
    comment: "用户名",
    unique: true,
  },
  passWord: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: "用户密码",
  },
  nickName: {
    type: Sequelize.STRING,
    comment: "昵称",
  },
  gender: {
    type: Sequelize.DECIMAL,
    comment: "性别（1男，2女，3保密）",
    default: 3,
  },
  picture: {
    type: Sequelize.STRING,
    comment: "头像",
  },
  city: {
    type: Sequelize.STRING,
    comment: "城市",
  },
});

export { User };
