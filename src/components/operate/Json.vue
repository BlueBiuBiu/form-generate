<template>
  <json-viewer 
    :value="store.customConfig"
    copyable
    boxed
    expanded
    preview-mode
    sort
    >
  </json-viewer>
</template>

<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'
import { useStore } from "@/store"

const store = useStore()
</script>

<style lang="less" scoped>

</style>