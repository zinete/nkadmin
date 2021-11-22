/**
 * @ Author: zhenghui
 * @ Create Time: 2020-09-16 14:21:30
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 18:10:43
 * @ Description: 加密解密token
 */

import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const uncert = fs.readFileSync(path.join(__dirname, "./rsa_public_key.pem"));

const token = {
  // 加密
  generateToken(data) {
    const created = Math.floor(Date.now() / 1000);
    const cert = fs.readFileSync(path.join(__dirname, "./privkey.pem"));
    const token = jwt.sign(
      {
        data,
        exp: created + 3600 * 24,
      },
      cert,
      { algorithm: "RS256" }
    );
    return token;
  },
  // 解密
  verifyToken(token) {
    const cert = fs.readFileSync(path.join(__dirname, "./rsa_public_key.pem"));
    let res = {};
    try {
      const result = jwt.verify(token, cert, { algorithms: ["RS256"] }) || {};
      const { exp = 0 } = result;
      const current = Math.floor(Date.now() / 1000);
      if (current <= exp) {
        res = result.data || {};
      }
    } catch (e) {
      console.error(e, "解密失败");
    }

    return res;
  },
};

export { token, uncert };
