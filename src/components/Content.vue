<template>
  <div class="content">
    <draggable
      :list="myArray"
      group="people"
      itemKey="id"
      @add="dragDown('parent',$event)"
      style="height: 100%"
    >
      <template #item="{element, index}">
        <div :class="['el', {'active': currentIndex === index}]" v-if="element.type" @click="handleClick(element,index)">
          <element-comps :element="element" />
          <draggable
            v-if="element.type === 'fence' && element.tasks.length === 0"
            :list="childArray"
            group="people"
            itemKey="cid"
            @add="dragDown('child',$event,index)"
            class="fence"
          >
            <template #item="{ element }">
              <div>
                <element-comps :element="element" />
              </div>
            </template>
          </draggable>
          <div :class="['operate', {'show-operate': currentIndex === index}]">
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
import { Delete } from "@element-plus/icons-vue"
import { useStore } from "@/store"
import ElementComps from "./ElementComps.vue"

let currentIndex = ref(0)
const store = useStore()
let myArray: any = reactive([])
let childArray: any = reactive([])

// 当前点击的组件
const handleClick = (element: any, index: number) => {  
  console.log(store.customConfig);
  currentIndex.value = index
  store.currentIndex = index
  store.currentConfig = store.customConfig[index]
}

let currentFence = computed(() => store.currentFence)
watch(currentFence, (newVal) => {
  const tempArr = store.customConfig
  tempArr[currentIndex.value].tasks = newVal
  store.currentConfig = tempArr[currentIndex.value]
  store.customConfig = tempArr
}, {deep: true})

// 移出组件
const removeAt = (index: number) => {
  myArray.splice(index, 1)
}

// 拖拽放下触发
const dragDown = (type: string, element: any, index?: number) => {
  if(type === 'parent') {    
    const tempArr = store.customConfig
    const tempMyArray = [...myArray]
    tempArr.splice(element.newIndex, 0, {...tempMyArray[element.newIndex]}) 
    store.customConfig = tempArr
    childArray.length = 0   
  } else {
    currentIndex.value = index as number
    console.log('childArray', store.customConfig);
    if(store.customConfig[index].tasks.length) {
      store.currentFence = [...store.customConfig[index].tasks,...childArray]
    } else {
      store.currentFence = [...childArray]
    }
    store.currentConfig = {...myArray[index as number]}
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  background: #fff;
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
      display: flex;
      width: 100%;
      margin: 5px;
      border: 1px solid #e5e5e5;
    }
  }
  .active {
    outline: 2px solid #409eff;
    border: 1px solid #409eff;
  }
}
</style>
