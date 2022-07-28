<template>
  <div>
    <draggable
      :list="config"
      :group="{ name: 'people', pull: 'clone', put: false }"
      itemKey="id"
      class="container"
    >
      <template #item="{element}">
        <el-button>{{ element.name }}</el-button>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { reactive, ref } from "vue";
import config from "@/config/element.js"

</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    button {
      width: 100px;
      margin-top: 10px;
      margin-left: 0;
    }
  }
</style>
