<template>
  <div class="right-panel-child">
    <div class="desc">
      <div class="label">类型</div>
      <el-button>{{ currentConfig.name }}</el-button>
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
    <div class="desc" v-if="currentConfig.type === 'button'">
      <div class="label">按钮宽度</div>
      <el-input v-model="currentConfig.buttonWidth" />
    </div>
    <div
      class="desc"
      v-if="
        ['input', 'textarea', 'dropdown', 'date', 'datetime'].includes(
          currentConfig.type
        )
      "
    >
      <div class="label">占位内容</div>
      <el-input v-model="currentConfig.placeholder" />
    </div>
    <!-- 单选框组 -->
    <div class="desc" v-if="currentConfig.type === 'radio'">
      <div class="label">选项</div>
      <el-radio-group v-model="currentConfig.modelValue" class="radio-group">
        <el-radio
          class="radio-option"
          v-for="item in currentConfig.child"
          :key="item.label"
          :label="item.label"
        >
          <el-input class="input" v-model="item.content" />
          <el-button
            class="operate"
            @click="deleteRadioOption(currentConfig, item)"
            type="danger"
            :icon="Delete"
            circle
            size="small"
          />
        </el-radio>
      </el-radio-group>
      <el-button
        class="add-radio-option"
        type="primary"
        text
        @click="addRadioOption(currentConfig)"
        >添加选项</el-button
      >
    </div>
    <div class="desc" v-if="currentConfig.type === 'radio'">
      <div class="label">布局方式</div>
      <el-radio-group v-model="currentConfig.layout" size="large">
        <el-radio-button label="垂直布局" />
        <el-radio-button label="水平布局" />
      </el-radio-group>
    </div>
    <!-- 多选框组 -->
    <div class="desc" v-if="currentConfig.type === 'checkbox'">
      <div class="label">选项</div>
      <el-radio-group v-model="currentConfig.modelValue" class="checkbox-group">
        <el-radio
          class="checkbox-option"
          v-for="item in currentConfig.child"
          :key="item.label"
          :label="item.label"
        >
          <el-input class="input" v-model="item.content" />
          <el-button
            class="operate"
            @click="deleteCheckboxOption(currentConfig, item)"
            type="danger"
            :icon="Delete"
            circle
            size="small"
          />
        </el-radio>
      </el-radio-group>
      <el-button
        class="add-radio-option"
        type="primary"
        text
        @click="addCheckboxOption(currentConfig)"
        >添加选项</el-button
      >
    </div>
    <div class="desc" v-if="currentConfig.type === 'checkbox'">
      <div class="label">布局方式</div>
      <el-radio-group v-model="currentConfig.layout" size="large">
        <el-radio-button label="垂直布局" />
        <el-radio-button label="水平布局" />
      </el-radio-group>
    </div>
    <!-- 自定义组件 -->
    <div class="desc" v-if="currentConfig.type === 'customComponents'">
      <div class="label">自定义插槽名</div>
      <el-input class="input" v-model="currentConfig.slotName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Delete } from "@element-plus/icons-vue";
defineProps<{ currentConfig: any }>();

// radio选项相关操作
const deleteRadioOption = (options: any, item: string) => {
  const index = options.child.findIndex((childItem: any) => childItem === item);
  options.child.splice(index, 1);
};
const addRadioOption = (options: any) => {
  const length = options.child.length;
  const lastItem = options.child[length - 1];
  const newItem = {
    label: Number(lastItem.label) + 1 + "",
    size: "default",
    content: "新选项",
  };
  options.child.push(newItem);
};
// 多选框组选项相关操作
// radio选项相关操作
const deleteCheckboxOption = (options: any, item: string) => {
  const index = options.child.findIndex((childItem: any) => childItem === item);
  options.child.splice(index, 1);
};
const addCheckboxOption = (options: any) => {
  const length = options.child.length;
  const lastItem = options.child[length - 1];
  const newItem = {
    label: Number(lastItem.label) + 1 + "",
    size: "default",
    content: "新选项",
  };
  options.child.push(newItem);
};
</script>

<style lang="less" scoped>
.right-panel-child {
  padding: 10px;
  .desc {
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 10px;
    margin-bottom: 18px;
    .label {
      line-height: 32px;
      font-size: 15px;
      font-weight: 500;
      color: #606266;
    }
    // 单选框组
    .radio-group {
      display: flex;
      .radio-option {
        margin: 10px 0;
        .input {
          width: 150px;
        }
        .operate {
          margin-left: 12px;
        }
      }
    }
    .add-radio-option {
      margin-left: 8px;
      font-size: 13px;
    }
    // 多选框组
    .checkbox-group {
      display: flex;
      flex-direction: column;
      .checkbox-option {
        margin: 10px 0;
        .input {
          width: 150px;
        }
        .operate {
          margin-left: 12px;
        }
      }
    }
  }
}
</style>
