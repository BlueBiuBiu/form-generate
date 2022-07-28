<template>
  <div class="content">
    <draggable
      :list="myArray"
      group="people"
      itemKey="id"
      @add="dragDown"
      style="height: 100%"
    >
      <template #item="{element, index}">
        <div class="el" v-if="element.type" @click="handleClick(index)">
          <el-button v-if="element.type === 'button'" :data-id="element.dataId">{{element.title}}</el-button>
          <el-input v-if="element.type === 'input'" :data-id="element.dataId"/>
          <el-radio v-if="element.type === 'radio'" :data-id="element.dataId" v-model="element.modelValue">{{element.title}}</el-radio>
          <el-icon class="icon" :size="20" @click="removeAt(index)"><Close /></el-icon>
          <el-tag type="success">{{element.dataId}}</el-tag>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";
import draggable from "vuedraggable";
import { Close } from "@element-plus/icons-vue"
import { useStore } from "@/store"

const store = useStore()
const myArray: any = store.customConfig

// 当前点击的组件
const handleClick = (index: number) => {
  store.currentIndex = index
  store.currentConfig = {...myArray[index]}
}

// 移出组件
const removeAt = (index: number) => {
  myArray.splice(index, 1) 
  console.log(myArray.length);
  
}

// 拖拽放下触发
const dragDown = () => {
  store.customConfig = myArray
}
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  .el {
    display: flex;
    align-items: center;
    margin: 10px 0;

    .icon {
      margin-left: 5px;
      cursor: pointer;
    }
  }
}
</style>
