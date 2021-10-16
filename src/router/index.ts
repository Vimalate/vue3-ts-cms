import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import localCache from "@/utils/localCache"
import { ElMessage } from "element-plus"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/login/Index.vue")
  },
  {
    path: "/main",
    name: "Main",
    component: () => import(/* webpackChunkName: "about" */ "../views/main/Index.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/notfound/NotFound.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 如果用户要去除了登录页面的其他页面则判断是否有token 没token就跳转登录页面进行登录
router.beforeEach((to) => {
  if (to.path !== "/login") {
    if (!localCache.getCache("token")) {
      // 没有token
      ElMessage.warning("请先登录!")
      router.push("/login")
    }
  }

  if (to.path === "/main" || to.path === "/main/") {
    // return firstMenu.path
  }
})

export default router
