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
