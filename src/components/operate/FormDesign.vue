<template>
  <el-form :model="form" ref="ruleFormRef" :rules="rules" label-width="120px">
    <div v-for="(element, index) in myArray" :key="index">
      <div class="el" v-if="element.type">
        <el-form-item v-if="element.type !== 'fence'" :label="element.title" :prop="element.dataId">
          <element-comps v-model="form[element.type]" :element="element" :showLabel="false"/>
        </el-form-item>
        <el-row v-if="element.type === 'fence'" :data-id="element.dataId">
          <el-col :span="24/element.fenceCount" v-for="fence in element.fenceCount" :key="fence">
            <div v-for="item in element.tasks[`child${fence}`]" :key="item">
              <el-form-item :label="item.title" :prop="item.dataId">
                <element-comps v-model="form[item.type]" :element="item" :showLabel="false"/>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-form>
  <!-- <el-button @click="getData(ruleFormRef)">获取数据</el-button> -->
</template>

<script setup lang="ts">
import ElementComps from "../ElementComps.vue"
import { useStore } from "@/store"
import type { FormInstance, FormRules } from 'element-plus'

const store = useStore()
const myArray: any = store.customConfig
const ruleFormRef = ref<FormInstance>()
const form: any = reactive({})
const rules: any = reactive<FormRules>({})

onMounted(() => {
  store.customConfig.forEach((item: any) => {
    if (item.tasks) { // 栅栏布局里面的
      Object.keys(item.tasks).forEach((child: any) => {
        item.tasks[child].forEach((childItem: any) => {          
          rules[childItem.dataId] = childItem.rulesConfig.rules
          form[childItem.dataId] = childItem.modelValue
        })
      })
    } else { // 普通单个
      rules[item.dataId] = item.rulesConfig.rules
      form[item.dataId] = item.modelValue
    }
  })
})

watch(store.customConfig, (newVal: any) => {
  newVal.forEach((item: any) => {
    if (item.tasks) { // 栅栏布局里面的
      Object.keys(item.tasks).forEach((child: any) => {
        item.tasks[child].forEach((childItem: any) => {       
          form[childItem.dataId] = childItem.modelValue
        })
      })
    } else { // 普通单个
       form[item.dataId] = item.modelValue
    }
  })
})

// 获取表单数据
const getData = (ruleFormRef: FormInstance | undefined) => {
  if (!ruleFormRef) return
  ruleFormRef.validate((valid) => {
    if (valid) {
      console.log('submit!', form)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<style lang="less" scoped>

</style>