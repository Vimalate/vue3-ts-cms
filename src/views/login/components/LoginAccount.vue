<template>
  <div>
    <el-form ref="form" :rules="rules" :model="accountForm" label-width="80px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from "element-plus"
import { defineComponent, reactive, ref, toRefs } from "vue"
import { rules } from "../config/login-account"
import localCache from "@/utils/localCache"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore()
    const accountForm = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    })
    const form = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      form.value?.validate((valid) => {
        if (valid) {
          //1、 是否记住密码
          if (isKeepPassword) {
            localCache.setCache("name", accountForm.name)
            localCache.setCache("password", accountForm.password)
          } else {
            localCache.clearCache()
          }

          // 2、执行登陆请求
          store.dispatch("login/loginAction", { ...accountForm })
        }
      })
    }
    return {
      accountForm,
      form,
      rules,
      loginAction
    }
  }
})
</script>
