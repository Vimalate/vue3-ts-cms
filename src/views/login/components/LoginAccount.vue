<template>
  <div>
    <el-form ref="form" :rules="rules" :model="accountForm" label-width="80px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from "element-plus"
import { defineComponent, reactive, ref, toRefs } from "vue"
import { rules } from "../config/login-account"

export default defineComponent({
  setup() {
    const data = reactive({
      accountForm: {
        name: "",
        password: ""
      }
    })
    const form = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      console.log("login")
      form.value?.validate((valid) => {
        if (valid) {
          console.log("ok")
        }
      })
    }
    return {
      ...toRefs(data),
      form,
      rules,
      loginAction
    }
  }
})
</script>
