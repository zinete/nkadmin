/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-11 18:07:17
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 17:34:30
 * @ Description:
 */

import Router from "koa-router";
import { register, login } from "./user.controller";
const router = new Router({
  prefix: "/api/v1/user",
});

router.post("/register", async (ctx) => {
  const { userName, passWord, nickName, gender } = ctx.request.body;
  ctx.body = await register({
    userName,
    passWord,
    nickName,
    gender,
  });
});
router.post("/login", async (ctx) => {
  const { userName, passWord } = ctx.request.body;
  ctx.body = await login(ctx, userName, passWord);
});

export default router;
