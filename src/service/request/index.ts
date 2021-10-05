import axios from "axios"
import type { AxiosInstance } from "axios"
import type { RequestInterceptors, RequestConfig } from "./type"
import { ElLoading } from "element-plus"
import type { ILoadingInstance } from "element-plus/lib/components/loading/src/loading.type"

export default class requestClass {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: RequestConfig) {
    // 将实例保存
    this.instance = axios.create(config)
    // 将拦截器保存
    this.interceptors = config.interceptors
    // 对showLoading初始化 默认是true
    this.showLoading = true
    // 使用拦截器 -> 实例拦截 只是单独对于某个实例的拦截
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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // setTimeout(() => {
        //   this.loading?.close()
        // }, 3000)
        this.loading?.close()
        return res.data
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 对单独使用这个请求做拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 如果showLoading为false 则修改
      if (config.showLoading === false) {
        this.showLoading = false
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //1 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //2 保证下一次请求的默认值是true
          this.showLoading = true
          // 3 返回结果
          resolve(res)
        })
        .catch((err) => {
          // 保证下一次请求的默认值是true
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "get" })
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "post" })
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "delete" })
  }

  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "patch" })
  }
}
