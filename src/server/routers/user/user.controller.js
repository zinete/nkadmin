/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-19 16:47:43
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 18:38:36
 * @ Description:
 */

import { getUserInfo, createUser } from "../user/user.service";
import Sha256 from "../../libs/sha256";
import { errInfo } from "../../config/errorModel/errorinfo";
import { SuccessModel, ErrorModel } from "../../config/errorModel/resmodel";

import { token as T } from "../../config/token/index";

async function login(ctx, userName, passWord) {
  // 登录成功 返回 token
  const userInfo = await getUserInfo(userName, Sha256.hash(passWord));
  if (!userInfo) {
    // 登录失败
    return new ErrorModel(errInfo.loginErrInfo);
  } else {
    // 登录成功
    const token = T.generateToken({ userInfo });
    return new SuccessModel({
      token,
      userInfo,
    });
  }
}

/**
 * 注册
 * @param {*} userName
 * @param {*} password
 * @param {*} gender
 */
async function register({ userName, passWord, gender, nickName }) {
  const userInfo = await getUserInfo(userName);
  if (userInfo) {
    // 用户名已存在
    return new ErrorModel(errInfo.userNameExist);
  } else {
    try {
      const createInfo = await createUser({
        userName,
        passWord: Sha256.hash(passWord),
        gender,
        nickName,
      });
      return new SuccessModel(createInfo);
    } catch (ex) {
      return new ErrorModel(ex.message);
    }
  }
}

/**
 * 用户名是否存在
 * @param {*} userName
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName);
  try {
    if (userInfo) {
      return new SuccessModel(userInfo);
    } else {
      return new ErrorModel(errInfo.notFindUser);
    }
  } catch (ex) {
    return new ErrorModel(ex.message);
  }
}
export { login, register, isExist };
