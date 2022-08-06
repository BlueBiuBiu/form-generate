<template>
  <el-button class="item" v-if="element.type === 'button'" :data-id="element.dataId">{{element.title}}</el-button>
  <div v-if="element.type === 'input'" class="item item-flex" >  
    <span :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <el-input :data-id="element.dataId"/>
  </div>
  <div v-if="element.type === 'radio'" class="item" >  
    <span>{{element.title}}</span>
    <el-radio class="item" :data-id="element.dataId" v-model="element.modelValue">{{element.title}}</el-radio>
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
</style>