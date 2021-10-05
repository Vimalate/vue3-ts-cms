import { createStore } from "vuex"
import login from "./modules/login/login"
import { IRootState } from "./types"

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

export default store
