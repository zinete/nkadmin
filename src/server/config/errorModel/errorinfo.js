/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-22 14:31:27
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 17:32:27
 * @ Description: 错误信息集合
 */

const errInfo = {
  delDataErr: {
    code: 10000,
    msg: "删除失败",
  },
  notUserName: {
    code: 10001,
    msg: "用户名可用",
  },
  userNameExist: {
    code: 10002,
    msg: "用户名已存在",
  },
  createUserErr: {
    code: 10003,
    msg: "用户创建失败",
  },
  jsonSchemaFileInfo: {
    code: 10004,
    msg: "数据格式校验失败",
  },
  loginErrInfo: {
    code: 10005,
    msg: "登录失败",
  },
  notloginIn: {
    code: 10006,
    msg: "未登录",
  },
  notFindUser: {
    code: 10007,
    msg: "没有找到这个用户",
  },
  errChangePassword: {
    code: 10008,
    msg: "修改密码失败",
  },
  tokenisErr: {
    code: 10009,
    msg: "token失效",
  },
};

export { errInfo };
