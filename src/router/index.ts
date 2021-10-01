import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
