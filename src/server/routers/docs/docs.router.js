/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-23 11:20:47
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-23 14:49:32
 * @ Description:
 */

import Router from "koa-router";
import swaggerJSDoc from "swagger-jsdoc";

const router = new Router();

const swaggerDefinition = {
  info: {
    title: "API",
    version: "1.0.0",
    description: "API",
  },
  host: "localhost:4000",
  basePath: "/", // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ["./src/server/routers/**/**.js"], // 写有注解的router的存放地址
};

const swaggerSpec = swaggerJSDoc(options);

router.get("/swagger.json", async function (ctx) {
  ctx.set("Content-Type", "application/json");
  ctx.body = swaggerSpec;
});

export default router;
