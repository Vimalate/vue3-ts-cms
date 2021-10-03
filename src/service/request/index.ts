import axios from "axios"
import type { AxiosInstance } from "axios"
import type { RequestInterceptors, RequestConfig } from "./type"

export default class requestClass {
  instance: AxiosInstance
  interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加所有实例都有的拦截
    this.instance.interceptors.request.use(
      (config) => {
        console.log("默认请求拦截:success")
        return config
      },
      (err) => {
        console.log("默认请求拦截:err")
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log("默认响应拦截:err")
        return res
      },
      (err) => {
        console.log("默认响应拦截:err")
        return err
      }
    )
  }

  request(config: RequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}
