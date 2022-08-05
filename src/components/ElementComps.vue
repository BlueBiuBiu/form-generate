<template>
  <el-button class="item" v-if="element.type === 'button'" :data-id="element.dataId">{{element.title}}</el-button>
  <el-input class="item" v-if="element.type === 'input'" :data-id="element.dataId"/>
  <el-radio class="item" v-if="element.type === 'radio'" :data-id="element.dataId" v-model="element.modelValue">{{element.title}}</el-radio>
</template>

<script setup lang="ts">
defineProps<{element: any}>()
</script>

<style lang="less" scoped>
.item {
  margin-bottom: 18px;
}
</style>