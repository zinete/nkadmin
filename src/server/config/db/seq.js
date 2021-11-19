/**
 * @ Author: ZhengHui
 * @ Create Time: 2020-09-15 23:09:26
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-19 17:05:08
 * @ Description: 连接 mysql
 */
const sequelize = require("sequelize");
const db = require("./db");

const seq = new sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: "mysql",
  timezone: "+08:00",
});

module.exports = seq;
