<template>
  <div class="operate">
    <el-button type="primary" text>
      <img class="icon" src="~@/assets/clean.png" alt="" />
      <span>生成JSON</span>
    </el-button>
    <el-button type="primary" :icon="View" @click="view" text>预览</el-button>
    <el-button type="primary" text>
      <img class="icon" src="~@/assets/json.png" alt="" />
      <span>生成JSON</span>
    </el-button>
    <el-button type="primary" text>
      <img class="icon" src="~@/assets/generate.png" alt="" />
      <span>生成代码</span>
    </el-button>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="预览"
    width="70%"
  >
    <FormDesign/>
  </el-dialog>
</template>

<script setup lang="ts">
import FormDesign from "../FormDesign.vue"
import { View } from "@element-plus/icons-vue";

let dialogVisible = ref(false)

// 预览
const view = () => {
  dialogVisible.value = true  
}
</script>

<style lang="less" scoped>
.operate {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  .icon {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
  /deep/ .el-button {
    padding: 12px;
  }
}
</style>
