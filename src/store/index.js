import { defineStore } from 'pinia'

export const useStore = defineStore('customStore', {
  state: () => {
    return {
      customConfig: [],
      currentConfig: {},
      currentIndex: 0,
      currentFence: []
    }
  }
})