<template>
  <div>
    <el-form ref="form" :rules="rules" :model="accountForm" label-width="80px">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="accountForm.name"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <el-input v-model="accountForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
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
    const form = ref(null)

    return {
      ...toRefs(data),
      form,
      rules
    }
  }
})
</script>
