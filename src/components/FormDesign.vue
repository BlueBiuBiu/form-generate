<template>
  <div v-for="(element, index) in myArray" :key="index">
    <div class="el" v-if="element.type">
      <element-comps :element="element"/>
      <el-row v-if="element.type === 'fence'" :data-id="element.dataId">
        <el-col :span="24/element.fence" v-for="fence in element.fenceCount" :key="fence">
          <template v-for="item in element.tasks[`child${fence}`]" :key="item">
            <element-comps :element="item"/>
          </template>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import ElementComps from "./ElementComps.vue"
import { useStore } from "@/store"

const store = useStore()
const myArray: any = store.customConfig
</script>

<style lang="less" scoped>
.el {
  // margin: 10px 0;
}
</style>