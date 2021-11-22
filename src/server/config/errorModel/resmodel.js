/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-22 14:33:44
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:52:56
 * @ Description:
 */

class BaseModel {
  constructor({ code, data, msg }) {
    this.code = code;
    if (data) {
      this.data = data;
    }
    if (msg) {
      this.msg = msg;
    }
  }
}

/**
 * 成功
 */
class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({
      code: 0,
      data,
    });
  }
}

/**
 * 失败
 */
class ErrorModel extends BaseModel {
  constructor({ code, msg }) {
    super({
      code,
      msg,
    });
  }
}

export { SuccessModel, ErrorModel };
