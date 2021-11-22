/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-19 16:47:21
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 17:32:29
 * @ Description:
 */

import { formatUser } from "../../config/user/_format";
import { User } from "./user.model";

/**
 * 获取用户信息
 * @param {*} userName
 * @param {*} passWord
 * @returns
 */
async function getUserInfo(userName, passWord) {
  const whereOpt = {
    userName,
  };
  if (passWord) {
    Object.assign(whereOpt, { passWord });
  }

  // 查询
  const result = await User.findOne({
    attributes: ["id", "userName", "nickName", "picture", "city", "gender"],
    where: whereOpt,
  });

  if (result == null) {
    // 未找到
    return result;
  }
  // 格式化
  const formatRes = formatUser(result.dataValues);
  return formatRes;
}

/**
 * 创建用户
 * @param {*} param0
 * @returns
 */
async function createUser({ userName, passWord, gender, nickName }) {
  const result = await User.create({
    userName,
    passWord,
    nickName: nickName || userName,
    gender,
  });
  return result.dataValues;
}

export { getUserInfo, createUser };
