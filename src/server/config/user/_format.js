/**
 * @ Author: ZhengHui
 * @ Create Time: 2020-11-15 21:11:51
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:55:10
 * @ Description: 数据格式化
 */
import { DEFAULT_PLCTURE } from "./constant";
import { timeFormat } from "../../libs/utils";

const REG_FOR_AT_WHO = /@(.+?)\s-\s(\w+?)\b/g;
/**
 * 用户对象
 * @param {*} obj
 */
function _formatUserPicture(obj) {
  if (obj.picture == null) {
    obj.picture = DEFAULT_PLCTURE;
  }
  return obj;
}

/**
 * 格式化用户信息
 * @param {*} list
 */
function formatUser(list) {
  if (list == null) {
    return list;
  }
  if (Array.isArray(list)) {
    // 数组 用户列表
    return list.map(_formatUserPicture);
  }
  // 单个对象
  return _formatUserPicture(list);
}

/**
 * 格式化数据的时间
 * @param {Object} obj 数据
 */
function _formatDBTime(obj) {
  obj.createdAtFormat = timeFormat(obj.createdAt);
  obj.updatedAtFormat = timeFormat(obj.updatedAt);
  return obj;
}

/**
 * 格式化微博内容
 * @param {Object} obj 微博数据对象
 */
function _formatContent(obj) {
  obj.contentFormat = obj.content;

  // 格式化 @
  // from '哈喽 @张三 - zhangsan 你好'
  // to '哈喽 <a href="/profile/zhangsan">张三</a> 你好'
  obj.contentFormat = obj.contentFormat.replace(
    REG_FOR_AT_WHO,
    (matchStr, nickName, userName) => {
      return `<a href="/profile/${userName}">@${nickName}</a>`;
    }
  );

  return obj;
}

/**
 * 格式化微博信息
 * @param {Array|Object} list 微博列表或者单个微博对象
 */
function formatNews(list) {
  if (list == null) {
    return list;
  }

  if (Array.isArray(list)) {
    // 数组
    return list.map(_formatDBTime).map(_formatContent);
  }
  // 对象
  let result = list;
  result = _formatDBTime(result);
  result = _formatContent(result);
  return result;
}

export { formatUser, formatNews, _formatDBTime };
