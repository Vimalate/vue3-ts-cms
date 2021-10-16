<template>
  <div class="nav-header">
    <div class="nav-header-left">
      <i ref="iRef" :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="foldClick"></i>
    </div>
    <div class="nav-header-right">
      <div>面包屑</div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import UserInfo from "./UserInfo.vue"

export default defineComponent({
  components: { UserInfo },
  emits: ["foldClick"],
  setup(props, { emit }) {
    const iRef = ref<HTMLElement>()
    const isFold = ref(false)
    const foldClick = () => {
      isFold.value = !isFold.value
      // 通知父组件
      emit("foldClick", isFold.value)
    }
    return { iRef, foldClick, isFold }
  }
})
</script>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .nav-header-right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
