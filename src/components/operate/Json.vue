
<!-- 第一种 -->
<template>
  <div class="json-viewer">
    <json-viewer 
      :value="store.customConfig"
      copyable
      boxed
      expanded
      preview-mode
      sort
      >
    </json-viewer>
  </div>
</template>

<script setup lang="ts">
import JsonViewer from 'vue-json-viewer'
import { useStore } from "@/store"

const store = useStore()
</script>

<style lang="less" scoped>
.json-viewer {
  height: 600px;
  overflow-y: scroll;
}
</style> 


  
<!-- 第二种 -->
<!-- 
  <template>
    <div id="jsoneditor"></div>
  </template>

  <script setup lang="ts">
  import JSONEditor from "jsoneditor"
  import "jsoneditor/dist/jsoneditor.min.css"
  import { useStore } from "@/store"

  const store = useStore()
  onMounted(() => {
    const container = document.getElementById("jsoneditor")
    const options = {}
    const editor = new JSONEditor(container, options)
    editor.set(store.customConfig)
  })

  </script>

  <style lang="less" scoped>

  </style> 
-->