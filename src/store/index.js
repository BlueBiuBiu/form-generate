import { defineStore } from 'pinia'

export const useStore = defineStore('customStore', {
  state: () => {
    return {
      customConfig: [],
      currentConfig: {},
      currentIndex: 0,

      // 栅栏元素相关信息
      currentFenceIndex: 0,
      currentFenceItemIndex: 0,
      showFenceItem: false, // 控制显示栅栏或者其他
    }
  }
})