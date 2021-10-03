import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import Request from "@/service"

createApp(App).use(store).use(ElementPlus).use(router).mount("#app")

Request.request({
  url: "/home/multidata",
  method: "GET"
})
