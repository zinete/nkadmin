/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-19 17:01:34
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:29:32
 * @ Description: 执行数据库同步
 */

import seq from "./seq";

import("../../routers/model.index");
// 测试连接
seq
  .authenticate()
  .then((res) => {
    console.log(res, "连接成功");
  })
  .catch((err) => {
    console.log(err, "连接出错");
  });

// 执行同步 force: true 每次清空数据库重新建立
seq
  .sync({
    force: false,
  })
  .then(() => {
    console.log("同步完成");
    process.exit();
  });
