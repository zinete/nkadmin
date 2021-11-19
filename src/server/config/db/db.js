/**
 * @ Author: zhenghui
 * @ Create Time: 2021-06-24 17:02:00
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-19 17:05:12
 * @ Description: mysql密码
 */

let password;
let user;
let host;
let database;
let redisConfig;

console.log(process.env.NODE_ENV, "当前数据库环境");
//  数据库 连接配置
if (process.env.NODE_ENV === "development") {
  password = "Ab123456";
  user = "root";
  host = "localhost";
  database = "admin_db";
  redisConfig = {
    port: 6379,
    host: "127.0.0.1",
  };
} else {
  //正式服务器
  // password = "Cxk3YPSxZcRZGAWj";
  // user = "tianyu_db";
  // host = "localhost";
  // database = "tianyu_db";
  // redisConfig = {
  //   port: 6379,
  //   host: "127.0.0.1",
  // };
}

module.exports = {
  password,
  user,
  host,
  database,
  redisConfig,
};
