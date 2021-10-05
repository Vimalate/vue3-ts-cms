<template>
  <div class="login-panel">
    <h1 class="title">vue3+typescript</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <LoginAccount ref="accountRef" />
        <div class="panel-bottom">
          <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
          <el-link type="primary">找回密码</el-link>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <el-button class="btn-login" type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue"
import LoginPhone from "./LoginPhone.vue"
import LoginAccount from "./LoginAccount.vue"

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    // const data = reactive({
    //   isKeepPassword: true
    // })
    const isKeepPassword = ref<boolean>(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const handleLogin = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }
    return {
      // ...toRefs(data),
      isKeepPassword,
      handleLogin,
      accountRef
    }
  }
})
</script>

<style lang="scss" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .panel-bottom {
    display: flex;
    justify-content: space-between;
  }
  .title {
    text-align: center;
  }
  .btn-login {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
