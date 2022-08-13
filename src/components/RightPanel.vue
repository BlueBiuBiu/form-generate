<template>
  <div class="rightPanel">
    <div v-if="!store.showFenceItem && store.customConfig.length && currentConfig.type">
      <right-panel-child :currentConfig="currentConfig"/>
    </div>
    <div v-else-if="store.showFenceItem && store.customConfig.length && currentFenceItem.type">
      <right-panel-child :currentConfig="currentFenceItem"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { Delete } from "@element-plus/icons-vue"
import { useStore } from "@/store"
import RightPanelChild from "./RightPanelChild.vue";

const store = useStore()

let currentConfig = computed(() => store.currentConfig)
watch(currentConfig, (newVal) => {
  if (!newVal) {
    store.customConfig = []
    store.currentConfig = {}
    store.currentIndex = 0
    return
  }
  store.customConfig.splice(store.currentIndex, 1, newVal)
}, { deep: true })

// 栅栏具体元素
let currentFenceIndex = computed(() => store.currentFenceIndex)
let currentFenceItemIndex = computed(() => store.currentFenceItemIndex)
let currentFenceItem = computed(() =>store.currentConfig.tasks && store.currentConfig.tasks[`child${store.currentFenceIndex}`][store.currentFenceItemIndex])
watch([currentFenceIndex, currentFenceItemIndex], (newVal) => {
  store.customConfig[store.currentIndex].tasks[`child${newVal[0]}`].splice(newVal[1], 1, currentFenceItem.value)
}, {deep: true})
</script>

<style lang="less" scoped>
 
</style>
