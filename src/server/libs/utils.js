/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-03-06 14:14:09
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:36:08
 * @ Description: utils
 */

import path from "path";
import fs from "fs";
import { format } from "date-fns";
import fse from "fs-extra";
import { ErrorModel, SuccessModel } from "../config/errorModel/resmodel";

const MIX_SIZE = 1024 * 1024 * 1024;
const DIST_FOLDER_PATH = path.join(__dirname, "..", "..", "upload");

// 是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then((exist) => {
  if (!exist) {
    fse.ensureDir(DIST_FOLDER_PATH);
  }
});

/**
 * 保存文件
 * @param {*} param0
 * @returns
 */
async function saveFile({ name, type, size, filePath, host }) {
  if (size > MIX_SIZE) {
    return new ErrorModel();
  }

  const render = fs.createReadStream(filePath);
  const filename = Date.now() + "." + name.split(".").pop();
  const savePath = path.join(DIST_FOLDER_PATH, `/${filename}`);

  const upstream = fs.createWriteStream(savePath);

  render.pipe(upstream);
  // 返回信息
  return new SuccessModel({
    url: host + filename,
  });
}

/**
 * 格式化时间，如 09.05 23:02
 * @param {string} str 时间字符串
 */
function timeFormat(str) {
  return format(new Date(str), "yyyy.MM.dd HH:mm");
}

export default {
  saveFile,
  timeFormat,
};
