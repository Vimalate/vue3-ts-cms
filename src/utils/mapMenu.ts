import { RouteRecordRaw } from "vue-router"

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 先默认加载所有的route
  const allRoutes: RouteRecordRaw[] = []
  // 递归查找所有文件
  const routeFiles = require.context("@/router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require("@/router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })
  console.log("route", allRoutes)

  // 更具服务器返回menus添加route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((c) => c.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
