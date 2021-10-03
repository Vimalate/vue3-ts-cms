import requestClass from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const Request = new requestClass({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求成功")
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败")
      return err
    },
    responseInterceptor: (res) => {
      console.log("响应成功")
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log("响应失败")
      return err
    }
  }
})
export default Request
