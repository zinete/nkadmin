/**
 * @ Author: zhenghui
 * @ Create Time: 2021-06-24 15:16:55
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-18 11:41:52
 * @ Description:
 */

export default ({ store, redirect, route }) => {
  // consts
  const blockRoute = /\/admin\/*/g;
  const apiRoute = /\/api\/*/g;
  const user = store.getters.auth;
  const login = "/";
  // If the user is not authenticated
  if (!user && route.path.match(blockRoute)) {
    return redirect(login);
  }

  if (user && route.path === login) {
    redirect("/admin");
  }
};
