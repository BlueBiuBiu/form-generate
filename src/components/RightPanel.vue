<template>
  <div class="rightPanel">
    <div v-if="!store.showFenceItem && store.customConfig.length && currentConfig.dataId">
      <div class="desc">
        <div class="label">类型</div>
        <el-button>{{currentConfig.name}}</el-button>
      </div>
      <div class="desc">
        <div class="label">字段标识</div>
        <el-input v-model="currentConfig.dataId" />
      </div>
      <div class="desc">
        <div class="label">标题</div>
        <el-input v-model="currentConfig.title" />
      </div>
      <div class="desc">
        <div class="label">标题宽度</div>
        <el-input v-model="currentConfig.width" />
      </div>
    </div>
    <div v-else-if="store.showFenceItem && store.customConfig.length && currentFenceItem.dataId">
      <div class="desc">
        <div class="label">类型</div>
        <el-button>{{currentFenceItem.name}}</el-button>
      </div>
      <div class="desc">
        <div class="label">字段标识</div>
        <el-input v-model="currentFenceItem.dataId" />
      </div>
      <div class="desc">
        <div class="label">标题</div>
        <el-input v-model="currentFenceItem.title" />
      </div>
      <div class="desc">
        <div class="label">标题宽度</div>
        <el-input v-model="currentFenceItem.width" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useStore } from "@/store"

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
  .rightPanel {
    padding: 10px;
    .desc {
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 10px;
      margin-bottom: 18px;
      .label {
        line-height: 32px;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
</style>
