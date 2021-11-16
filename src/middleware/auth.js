/**
 * @ Author: zhenghui
 * @ Create Time: 2021-06-24 15:16:55
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-16 14:59:19
 * @ Description:
 */

export default ({ store, redirect, route }) => {
  // consts
  const blockRoute = /\/admin\/*/g;
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
