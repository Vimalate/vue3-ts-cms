/**
 * 对于不同的开发环境可以自动更换不同的BASE_URL
 * development -> 生产环境
 * production -> 线上环境
 * test -> 测试环境
 */
let BASE_URL: string
const TIME_OUT = 10000
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://123.207.32.32:8000/"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = ""
} else {
  BASE_URL = ""
}

export { BASE_URL, TIME_OUT }
