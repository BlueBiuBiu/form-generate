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
        <div :class="['el', {'active': currentIndex === index && showOperate}]" v-if="element.type" @click.capture="handleClick(element,index)">
          <element-comps :element="element" />
          <template v-if="element.type === 'fence'">
            <draggable
              v-for="fence in element.fenceCount"
              :list="element.tasks[`child${fence}`]"
              group="people"
              itemKey="tid"
              :key="fence"
              @add="dragDown"
              @click="fenceClick(element, fence, index)"
              :class="['fence', {'active': currentFenceIndex === fence && !showFenceItem && currentIndex === index}]"
            >
              <template #item="{ element: elementItem, index: indey }">
                <div class="fence-item" @click.stop="elementClick(element, indey, fence, index)" :class="[{'active': currentFenceItemIndex === indey && currentFenceIndex === fence && currentIndex === index}]">
                  <element-comps :element="elementItem"/>
                  <div :class="['operate', {'show-operate': currentFenceIndex === fence && !showFenceItem && currentIndex === index}]">
                    <el-icon class="icon" :size="16" color="#ffffff" @click="removeFence(element, fence)"><Delete /></el-icon>
                  </div>
                  <div :class="['operate', {'show-operate': currentFenceIndex === fence && currentFenceItemIndex === indey && showFenceItem && currentIndex === index}]">
                    <el-icon class="icon" :size="16" color="#ffffff" @click="removeFenceItem(element, indey, fence)"><Delete /></el-icon>
                  </div>
                </div>
              </template>
            </draggable>
          </template>
          <div v-show="showOperate" :class="['operate', {'show-operate': currentIndex === index}]">
            <el-icon v-if="element.type === 'fence'" class="icon" :size="16" color="#ffffff" @click="addFenceCount(element)"><Plus /></el-icon>
            <el-icon class="icon" :size="16" color="#ffffff" @click="removeAt(index)"><Delete /></el-icon>
          </div>
          <div class="data-id">{{element.dataId}}</div>
        </div>
      </template>
    </draggable>
  </div> 
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";
import draggable from "vuedraggable";
import nestedDraggable from "vuedraggable";
import { Delete, Plus } from "@element-plus/icons-vue"
import { useStore } from "@/store"
import ElementComps from "./ElementComps.vue"

const store = useStore()
let currentIndex = ref(0)
let currentFenceIndex = ref(-1)
let currentFenceItemIndex = ref(-1)
let showOperate = ref(true)
let showFenceItem = ref(false) // ???????????????????????????
let myArray: any = reactive([])

// ?????????????????????
const handleClick = (element: any, index: number) => {  
  store.currentIndex = index
  store.currentConfig = store.customConfig[index]
  // ?????????????????????/??????
  currentIndex.value = index
  showOperate.value = true
  showFenceItem.value = false
  currentFenceIndex.value = -1
  currentFenceItemIndex.value = -1
  // ????????????????????????
  store.showFenceItem = false
}

// ???????????????????????????
const fenceClick = (element: any, fence: number, index: number) => {
  // ?????????????????????/??????
  currentFenceIndex.value = fence
  currentIndex.value = index
  currentFenceItemIndex.value = -1
  showOperate.value = false
  showFenceItem.value = false
}


// ????????????????????????????????????
const elementClick = (element: any, indey: number, fence: number, index: number) => {
  store.currentConfig = element
  store.currentFenceIndex = fence
  store.currentFenceItemIndex = indey
  store.showFenceItem = true
  currentIndex.value = index
  
  // ?????????????????????/??????
  currentFenceIndex.value = fence
  currentIndex.value = index
  currentFenceItemIndex.value = indey
  showOperate.value = false
  showFenceItem.value = true
}


// ?????????????????????????????????
const removeFence = (element: any, fence: number) => {
  element.fenceCount--
  for (let i = fence; i <= Object.keys(element.tasks).length; i++) {
    element.tasks[`child${i}`] = element.tasks[`child${i + 1}`]
  }
  element.tasks['child6'] = []
}

// ?????????????????????????????????????????????????????????
const removeFenceItem = (element: any, index: number, fence: number) => {
  element.tasks[`child${fence}`].splice(index, 1)
}

// ??????????????????
const addFenceCount = (element: any) => {
  if (element.fenceCount < Object.keys(element.tasks).length) {
    element.fenceCount++
  }
}

// ????????????
const removeAt = (index: number) => {
  myArray.splice(index, 1)
  store.customConfig = myArray
}

// ??????????????????
const dragDown = () => {
  store.customConfig = myArray
}

// ????????????
watch(store, (newVal) => {
  if(newVal.importJson.length) {    
    myArray.length = 0
    myArray.push(...JSON.parse((newVal.importJson) as any))
    store.customConfig = myArray
    store.importJson = []
    return
  }
  if(!newVal.customConfig.length) {
    store.$reset()
    currentIndex.value = 0
    currentFenceIndex.value = -1
    currentFenceItemIndex.value = -1
    showOperate.value = true
    showFenceItem.value = false
    myArray.length = 0
  }
})

</script>

<style lang="less" scoped>
.content {
  height: 100%;
  background: #fff;
  color: #90959a;
  .el {
    display: flex;
    margin: 3px;
    position: relative;
    border: 1px dashed rgba(170, 170, 170, 0.5);
    background-color: rgba(236,245,255,.3);
    overflow: hidden;
    min-height: 50px;
    min-width: 50px;
    outline: 1px solid #fff;
    
    .item {
      margin-bottom: 18px;
    }

    .operate {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      display: none;
      background: #409eff;

      .icon {
        margin: 0 5px 0 7px;
      }
    }

    .show-operate {
      display: block;
    }

    .data-id {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 12px;
      color: #67c23a;
      font-weight: 500;
    }

    .fence {
      position: relative;
      width: 100%;
      margin: 5px;
      padding: 5px;
      border: 1px solid #e5e5e5;

      .fence-item {
        border: 1px solid rgba(170, 170, 170, 0.5);
        margin: 5px 0;
        padding: 2px;
      }
    }
  }
  .active {
    position: relative;
    outline: 2px solid #409eff;
    border: 1px solid #409eff;
  }
}
</style>
