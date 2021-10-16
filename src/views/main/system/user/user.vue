<template>
  <div class="role">
    <h2>user1</h2>
    <zsForm v-bind="searchConfig"> </zsForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import zsForm from "@/baseUi/zsForm"
// config
import { searchConfig } from "./config/search.config"

export default defineComponent({
  name: "role",
  components: { zsForm },
  setup() {
    return { searchConfig }
  }
})
</script>

<style scoped></style>
