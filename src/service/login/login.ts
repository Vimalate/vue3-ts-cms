import Request from "../index"
import { IAccount, IDataType, ILoginResult } from "./types"

enum LoginApi {
  accountLogin = "/login",
  userinfoApi = "/users/"
}

export function LoginRequest(account: IAccount) {
  return Request.post<IDataType<ILoginResult>>({
    url: LoginApi.accountLogin,
    data: account
  })
}

export function userInfoRequest(id: number) {
  return Request.get<IDataType>({
    url: LoginApi.userinfoApi + id,
    showLoading: false
  })
}

//获取菜单
export const getUserMenusByRoleId = (id: number) => {
  return Request.get<IDataType>({
    url: `/role/${id}/menu`,
    showLoading: false
  })
}
