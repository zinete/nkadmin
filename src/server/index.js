/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-11 17:16:34
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-22 16:05:03
 * @ Description:
 */

import path from "path";
import Koa from "koa";
import cors from "koa2-cors";
import consola from "consola";
import { Nuxt, Builder } from "nuxt";
import koaStatic from "koa-static";
import koaBody from "koa-body";
import config from "../../nuxt.config.js"; // Import and Set Nuxt.js options
import router from "./routers/router.index"; // 接口路由

const app = new Koa();
require("dotenv").config({ path: ".env" });
config.dev = app.env !== "production";

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);
  const {
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || 3000,
  } = nuxt.options.server;

  await nuxt.ready();
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(cors());

  // 中间件获取前端传递的参数
  app.use(
    koaBody({
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
      },
    })
  );
  // 静态文件输出路径
  app.use(koaStatic(path.join(__dirname, "..", "upload")));
  // 接口路由
  router(app);

  app.use((ctx) => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}

start();
