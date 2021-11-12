/**
 * @ Author: zhenghui
 * @ Create Time: 2021-11-11 18:07:17
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-12 11:03:05
 * @ Description:
 */

const Router = require("koa-router");

const router = new Router({
  prefix: "/api/v1/user",
});

router.get("/register", async (ctx) => {
  ctx.body = {
    msg: "ok",
  };
});

router.post("/login", async (ctx) => {
  ctx.body = {
    data: {
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJbmZvIjp7ImlkIjoxNCwidXNlck5hbWUiOiJ6aGVuZ2h1aSIsIm5pY2tOYW1lIjoiemhlbmdodWkiLCJwaWN0dXJlIjoiaHR0cHM6Ly93d3cuemluZXRlLmNvbS9pbWFnZXMvcDIuanBnIiwiY2l0eSI6bnVsbCwiZ2VuZGVyIjoiMyJ9fSwiZXhwIjoxNjE5MTg3OTUzLCJpYXQiOjE2MTkxMDE1NTN9.W01hC9SgmRvr5pbavtu0AXDd8OYsvCkc_mMAkWIMLujX6OI5MesmtdfLbqu_bJoPYPt1E_BYNeoBNEaZ9Z2gtpEFBwD7P5UamE57BAoQmPTiSKeaang-hlndCC1gCl8LB8lWN5ak60ZIKcckIjlAjptM3AVEAtUttH-r2kFpeh7uAjv65RuNDGcpwmogPkSMwaE6ia--OfwQMiqZ1ubGmHbLjbP39k-VZTRrxduEu-BjMb0dsyxKJoN9CTurRECz0p5BnZ8PwTKLojSeV7Reod3LACgzx56WTk1NLboQMfR4Zd2H0SHrJUcQtu3VUc56ABNwa6y9B1VVWgBRagKwpw",
      userInfo: {
        nickName: "纯纯粹粹",
        id: 2,
        picture:
          "https://img1.baidu.com/it/u=2810831878,1188946892&fm=26&fmt=auto",
      },
    },
    code: 0,
    msg: "ok",
  };
});

module.exports = router;
