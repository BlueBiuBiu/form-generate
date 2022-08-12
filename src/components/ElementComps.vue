<template>
  <!-- 按钮 -->
  <div v-if="element.type === 'button'" class="item item-flex" >  
    <span class="title mr-0" :style="{ 'width': `${element.width}px`}"></span>
    <el-button :style="{ 'width': `${element.buttonWidth}px`}" v-model="element.modelValue" :data-id="element.dataId">{{element.title}}</el-button>
  </div>
  <!-- 单行文本 -->
  <div v-if="element.type === 'input'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <el-input class="sky-item" v-model="element.modelValue" :data-id="element.dataId" :placeholder="element.placeholder"/>
  </div>
  <!-- 多行文本 -->
  <div v-if="element.type === 'textarea'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <el-input 
      class="sky-item" 
      v-model="element.modelValue"
      :data-id="element.dataId" 
      type="textarea" 
      :placeholder="element.placeholder"/>
  </div>
  <!-- 单选框组 -->
  <div v-if="element.type === 'radio'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
     <el-radio-group v-model="element.modelValue" :class="element.layout === '垂直布局' ? 'radio-verticel': 'radio-horizontal'">
      <template v-for="item in element.child" :key="item.label">
        <el-radio :label="item.label" :size="item.size">{{item.content}}</el-radio>
      </template>
    </el-radio-group>
  </div>
  <!-- 多选框组 -->
  <div v-if="element.type === 'checkbox'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
     <el-checkbox-group v-model="element.modelValue" :class="element.layout === '垂直布局' ? 'radio-verticel': 'radio-horizontal'">
      <template v-for="item in element.child" :key="item.label">
        <el-checkbox :label="item.label" :size="item.size">{{item.content}}</el-checkbox>
      </template>
    </el-checkbox-group>
  </div>
  <!-- 下拉框组 -->
  <div v-if="element.type === 'dropdown'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <el-dropdown ref="dropdown" v-model="element.modelValue" trigger="contextmenu">
      <el-input class="dropdown-input" @click="showClick" readonly :placeholder="element.placeholder" :suffix-icon="ArrowDown"/>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in element.child" :key="item">{{item.content}}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <!-- 日期选择器 -->
  <div v-if="element.type === 'date'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <el-date-picker
        v-model="element.modelValue"
        type="date"
        :placeholder="element.placeholder"
        value-format="YYYY-MM-DD"
        :size="element.size"
      />
  </div>
  <!-- 时间日期选择器 -->
  <div v-if="element.type === 'datetime'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <el-date-picker
        v-model="element.modelValue"
        type="datetime"
        :placeholder="element.placeholder"
        value-format="YYYY-MM-DD hh:mm:ss"
        :size="element.size"
      />
  </div>
  <!-- 自定义组件 -->
  <div v-if="element.type === 'customComponents'" class="item item-flex" >  
    <span class="title" :style="{ 'width': `${element.width}px`}">{{element.title}}</span>
    <slot :name="element.slotName">
      <div>{{element.slotName}}</div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from "@element-plus/icons-vue"
defineProps<{element: any}>()
const dropdown = ref()
const showClick = () => {
  dropdown.value.handleOpen()
}
</script>

<style lang="less" scoped>
.mr-0 {
  margin-right: 0;
}

.item-flex {
  width: 100%;
  display: flex;
  .title {
    display: inline-block;
    text-align: right;
    margin-right: 12px;
  }
  .sky-item {
    flex: 1;
  }
}
.item {
  margin-bottom: 18px;
}

// 单选框
.radio-verticel {
  display: flex;
  flex-direction: column;
  align-items: initial;
  position: relative;
  top: -5px;
}
.radio-horizontal {
  position: relative;
  top: -5px;
}

// 下拉选择框
.dropdown-link {
  cursor: pointer;
  color: #606266;
  display: flex;
  align-items: center;
}

.dropdown-input {
  /deep/ .el-input__inner {
    cursor: pointer;
  }
}
</style>
<style lang="less">
.el-popper.el-dropdown__popper {
  min-width: 190px;
  transform-origin: center top;
  z-index: 2011;
  position: absolute;
  left: 375px;
  top: 126px;
  margin: 0px;
}
</style>