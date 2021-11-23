/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-11 18:07:17
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-23 15:38:47
 * @ Description:
 */

import Router from "koa-router";
import { register, login } from "./user.controller";
const router = new Router({
  prefix: "/api/v1/user",
});

/**
 * @swagger
 * /api/v1/register:
 *   tags:
 *   name: Users
 *   description: 用户相关接口
 *   post:
 *     description: 用户注册
 *     responses:
 *       200:
 *         description: 注册成功.
 *       10002:
 *         description: 用户名已经存在
 *
 */
router.post("/register", async (ctx) => {
  const { userName, passWord, nickName, gender } = ctx.request.body;
  ctx.body = await register({
    userName,
    passWord,
    nickName,
    gender,
  });
});

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *      description: 用户登录
 *      responses:
 *        200:
 *          description: 返回token 和基本信息
 */
router.post("/login", async (ctx) => {
  const { userName, passWord } = ctx.request.body;
  ctx.body = await login(ctx, userName, passWord);
});

export default router;
