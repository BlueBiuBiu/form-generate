<template>
  <div v-if="element.type === 'button'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}"></span>
    <el-button class="sky-item" :data-id="element.dataId">{{element.title}}</el-button>
  </div>
  <div v-if="element.type === 'input'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <el-input class="sky-item" :data-id="element.dataId"/>
  </div>
  <div v-if="element.type === 'radio'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <el-radio class="sky-item" :data-id="element.dataId" v-model="element.modelValue">{{element.title}}</el-radio>
  </div>
</template>

<script setup lang="ts">
defineProps<{element: any}>()
</script>

<style lang="less" scoped>
.item-flex {
  width: 100%;
  display: flex;
  align-items: center;
}
.item {
  margin-bottom: 18px;
}
.sky-item {
  flex: 1;
}
.title {
  display: inline-block;
  text-align: right;
  margin-right: 12px;
}
</style>