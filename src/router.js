import Vue from "vue";
import Layout from "./layouts/empty";
import Router from "vue-router";
import Index from "./pages/index";
import Admin from "./pages/admin";
import Dashboard from "./pages/admin/dashboard";
import Settings from "./pages/admin/settings";
import NewsList from "./pages/admin/news/list";
import NewsDdit from "./pages/admin/news/edit";
import ElIcon from "./pages/admin/other/icon";
const emptyFn = () => {};
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

Vue.use(Router);

export const routerOptions = {
  mode: "history",
  base: decodeURI("/"),
  routes: [
    {
      path: "/",
      component: Index,
      name: "index",
      hidden: true,
    },
    {
      path: "/admin",
      component: Admin,
      name: "admin",
      hidden: true,
    },
    {
      path: "/admin/dashboard",
      component: Dashboard,
      name: "dashboard",
      meta: {
        title: "Dashboard",
        icon: "el-icon-menu",
        affix: true,
      },
    },
    {
      path: "/admin/news",
      component: Layout,
      redirect: "/admin/news/list",
      name: "News",
      children: [
        {
          path: "list",
          name: "List",
          component: NewsList,
          meta: { title: "List", icon: "el-icon-more" },
        },
        {
          path: "edit",
          name: "Edit",
          component: NewsDdit,
          meta: { title: "Edit", icon: "el-icon-edit" },
        },
      ],
      meta: {
        title: "news",
        icon: "el-icon-news",
      },
    },
    {
      path: "/admin/icon",
      component: ElIcon,
      name: "icon",
      meta: {
        title: "ElIcon",
        icon: "el-icon-menu",
        affix: true,
      },
    },
    {
      path: "/admin/settings",
      component: Settings,
      name: "settings",
      meta: {
        title: "Settings",
        icon: "el-icon-setting",
      },
    },
  ],
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
};

export function createRouter() {
  return new Router(routerOptions);
}
