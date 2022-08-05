<template>
  <el-button @click="view">预览</el-button>
  <el-dialog
    v-model="dialogVisible"
    title="预览"
    width="70%"
  >
    <FormDesign/>
  </el-dialog>
</template>

<script setup lang="ts">
import FormDesign from "./FormDesign.vue"
import { ref } from "vue"

let dialogVisible = ref(false)

const view = () => {
  dialogVisible.value = true
}
</script>
