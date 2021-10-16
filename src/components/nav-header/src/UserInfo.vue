<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ name }}
        <el-avatar
          size="small"
          class="avatar"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return { name }
  }
})
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  .avatar {
    margin-left: 8px;
  }
}
</style>
