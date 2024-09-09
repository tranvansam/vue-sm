import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommonsStore = defineStore({
  id: 'commons',
  state: () => ({
    loading: false,
    data : {} as any
  }),
  getters: {
    isLoading: (state) => state.loading,
    dataCommons: (state) => state.data
  },
  actions: {
    setLoading(status: boolean) {      
      this.loading = status 
    },
    setData(data: any) {      
      this.data = data 
    },
  },
})
