import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage, useSessionStorage } from "@vueuse/core"

export const useCounterStore = defineStore('counter', { 
  state: () =>{
    return{
      signUser: useSessionStorage('signUser', '')
    }
  },
  

 persist:true
})
