<template>
  <div class="rightPanel">
    <div v-if="store.customConfig.length && currentConfig.dataId">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useStore } from "@/store"

const store = useStore()

let currentConfig = computed(() => store.currentConfig)
watch(currentConfig, (newVal) => {
  store.customConfig.splice(store.currentIndex, 1, newVal)
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
