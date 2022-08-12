<template>
  <div class="operate">
    <el-button v-for="(item,index) in operations" :key="item.title" type="primary" :icon="item.icon" text @click="itemClick(index)">
      <img v-if="item.href" class="icon" :src="item.href" alt="" />
      <span>{{item.title}}</span>
    </el-button>
  </div>
  <el-dialog
    v-model="dialogVisible"
    :title="currentTitle"
    width="70%"
  >
    <component v-if="dialogVisible" :is="currentConponents"></component>
  </el-dialog>
</template>

<script setup lang="ts">
import FormDesign from "./FormDesign.vue"
import Json from "./Json.vue"
import { View } from "@element-plus/icons-vue";
import { useStore } from "@/store"
import { useGetImageUrl } from "@/utils/public-use"

let currentIndex = ref(0)
let currentTitle = ref('')
let dialogVisible = ref(false)
const components = ['', FormDesign, Json]
const store = useStore()
let currentConponents = computed(() => components[currentIndex.value])
const operations = reactive([
  {
    title: '清空',
    href: useGetImageUrl('clean.png'),
    icon: ''
  },
  {
    title: '预览',
    href: '',
    icon: View
  },
  {
    title: '生成JSON',
    href: useGetImageUrl('json.png'),
    icon: ''
  },
  {
    title: '生成代码',
    href: useGetImageUrl('generate.png'),
    icon: ''
  },
])


watch(currentIndex, (newVal) => {
  switch(newVal) {
    case 1:
      currentTitle.value = '预览'
      return
    case 2:
      currentTitle.value = '生成JSON'
      return
    case 3:
      currentTitle.value = '生成代码'
      return
  }
})

// 点击功能
const itemClick = (index: number) => {
  if(index === 0) {
    store.$reset()
    return
  }
  currentIndex.value = index
  dialogVisible.value = true 
  
}
</script>

<style lang="less" scoped>
.operate {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  .icon {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
  :deep(.el-button) {
    padding: 12px;
  }
}
</style>
