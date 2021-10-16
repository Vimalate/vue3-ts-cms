<template>
  <div class="role">
    <h2>user1</h2>
    <zsForm> </zsForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import zsForm from "@/baseUi/zsForm"

export default defineComponent({
  name: "role",
  components: { zsForm },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
