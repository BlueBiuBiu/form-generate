<script setup lang="ts">

import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
</script>

<template>
  <div class="app">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="aside left"><LeftPanel/></el-aside>
      <el-main class="main"><Content/></el-main>
      <el-aside class="aside right"><RightPanel/></el-aside>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;

  .aside {
    width: 230px;
    height: 100vh;

    &.left {
      border-right: 1px solid #666;
    }
    &.right {
      border-left: 1px solid #666;
    }
  }

  .header {
    height: 60px;
    border-bottom: 1px solid #666;
  }

  .main { 
    height: calc(100vh-60px);
  }
}
</style>
