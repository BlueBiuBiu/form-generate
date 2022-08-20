<template>
  <div class="json-viewer">
    <el-input
      v-model="textarea"
      :rows="26"
      type="textarea"
      placeholder="粘贴复制的JSON"
    />
    <el-button class="operate" type="primary" @click="submit">确定</el-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();
const textarea: any = ref("");
const emits = defineEmits(["closeDialog"]);

const submit = () => {
  store.importJson = textarea.value;
  emits("closeDialog");
};
</script>

<style lang="less" scoped>
.json-viewer {
  height: 600px;
  text-align: center;
  .operate {
    margin-top: 20px;
  }
}
</style>
