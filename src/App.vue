<script setup lang="ts">
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import Operate from './components/operate/index.vue'
</script>

<template>
  <div class="app">
    <el-header class="header"><Header/></el-header>
    <el-container>
      <el-aside class="aside left"><LeftPanel/></el-aside>
      <el-main class="main">
        <Operate/>
        <Content/>
      </el-main>
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
      width: 300px;
      border-left: 1px solid #666;
    }
  }

  .header {
    height: 60px;
    border-bottom: 1px solid #666;
  }

  .main { 
    height: calc(100vh-60px);
    background: #fafafa;
    padding: 0px;
  }
}
</style>
