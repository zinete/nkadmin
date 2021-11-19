/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-19 17:01:34
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-19 17:06:13
 * @ Description:
 */

/**
 * @ Author: zhenghui
 * @ Create Time: 2021-06-24 17:15:54
 * @ Modified by: zhenghui
 * @ Modified time: 2021-07-05 11:11:25
 * @ Description: 执行数据库同步
 */

const seq = require("./seq");

require("../../routers/model.index");
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
