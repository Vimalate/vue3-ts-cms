import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store, { setupStore } from "./store"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// import Request from "@/service"
import "normalize.css"
import "@/assets/css/index.scss"

setupStore()
createApp(App).use(store).use(ElementPlus).use(router).mount("#app")
// interface dataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// Request.get<dataType>({
//   url: "/home/multidata",
//   showLoading: false
// }).then((res) => {
//   console.log("res", res)
//   console.log("resswscd ", res.data)
// })

// Request.request({
//   url: "/home/multidata",
//   method: "GET",
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("单独请求的config")
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log("单独响应的config")
//       return res
//     }
//   }
// })
