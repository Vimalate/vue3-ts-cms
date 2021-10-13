<template>
  <div class="nav-header">
    <div class="nav-header-left">
      <i ref="iRef" :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="foldClick"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
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
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
