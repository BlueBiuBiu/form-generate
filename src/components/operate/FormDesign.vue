<template>
  <div v-for="(element, index) in myArray" :key="index">
    <div class="el" v-if="element.type">
      <element-comps :element="element"/>
      <el-row v-if="element.type === 'fence'" :data-id="element.dataId">
        <el-col :span="24/element.fenceCount" v-for="fence in element.fenceCount" :key="fence">
          <div v-for="item in element.tasks[`child${fence}`]" :key="item">
            <element-comps :element="item"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import ElementComps from "../ElementComps.vue"
import { useStore } from "@/store"

const store = useStore()
const myArray: any = store.customConfig
const form: any = reactive({})
watch(store.customConfig, (newVal: any) => {
  console.log('23', newVal);
  newVal.forEach((item: any) => {
    // const type = item.type as string
    form[item.type] = item.modelValue
  })
  console.log(form);
  
})
</script>

<style lang="less" scoped>
.el {
  // margin: 10px 0;
}
</style>