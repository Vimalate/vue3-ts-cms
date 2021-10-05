import { Module } from "vuex"
import { ILoginState } from "./types"
import { IRootState } from "@/store/types"
import { LoginRequest, userInfoRequest, getUserMenusByRoleId } from "@/service/login/login"
import { IAccount } from "@/service/login/types"
import localCache from "@/utils/localCache"
import router from "@/router"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissionArr: []
    }
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    getUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    getMenu(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async loginAction({ commit }, payload: IAccount) {
      const result = await LoginRequest(payload)
      const { id, token } = result.data
      commit("setToken", token)
      localCache.setCache("token", token)

      // 获取用户信息
      const userInfo = (await userInfoRequest(id)).data
      commit("getUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      // 获取对应权限menu
      const userMenus = (await getUserMenusByRoleId(id)).data
      console.log(userMenus)
      commit("getMenu", userMenus)
      localCache.setCache("userMenus", userMenus)
      router.push("/main")
    },
    // 重新加载关于用户的登录信息 主要是防止用户刷新之后vuex的数据清空
    reloadLoginInfo({ commit, dispatch }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("setToken", token)
        // 获取初始化数据(部门/角色的数据)
        // dispatch("getInitialPageListData", null, { root: true })
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("getUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("getMenu", userMenus)
      }
    }
  }
}

export default loginModule
