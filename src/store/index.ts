import { createStore, useStore as useRootStore } from "vuex"
import login from "./modules/login/login"
import { IRootState, IStoreType } from "./types"

const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export const setupStore = () => {
  store.dispatch("login/reloadLoginInfo")
}

// 导出自定义的useStore 目的是为了不用在其他文件使用vue的useStore每次都要导入类型
export const useStore = () => {
  return useRootStore<IStoreType>()
}

export default store
