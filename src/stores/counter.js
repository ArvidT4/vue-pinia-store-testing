import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const test = [{"test":"test"}]
  const doubleCount = computed(() => count.value * 2)
  function add(item){
    test.push(item)
  }
  function increment() {
    count.value++
  }

  return { count, test, doubleCount, add, increment }
})


export const counterTest = defineStore('arvid', {
  state: () => ({ count: 1, name: [{"name":'Eduardo',"test":"testet"}] }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    add(item){
      this.name.push(item)
    },
    remove(nameRemove){
      let rem = this.name.map(function(o) { return o.name; }).indexOf(nameRemove)
      console.log(rem)
      if(rem>-1){
        this.name.splice(rem,1)
      }
      
    },
    increment() {
      this.count++
    },
    async fetched(){
      let response = await axios.get("http://localhost:3000/userSession")
      console.log(response)
    }
  },
})