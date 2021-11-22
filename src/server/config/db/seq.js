/**
 * @ Author: ZhengHui
 * @ Create Time: 2020-09-15 23:09:26
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:29:19
 * @ Description: 连接 mysql
 */
import sequelize from "sequelize";
import db from "./db";

const seq = new sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: "mysql",
  timezone: "+08:00",
});

export default seq;
