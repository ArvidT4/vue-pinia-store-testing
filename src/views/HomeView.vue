<script setup>
import {useCounterStore, counterTest} from "@/stores/counter"

const store = useCounterStore()
const test = counterTest()

/* export default{
  method:{
      addTest(){
        store.add({"test":"arvid"})
        console.log(store)
      }
  }
} */
</script>

<template>
  {{ store.test }}
  <button @click="store.add({'test':'arvid'})">lägg till</button>
  <button @click="console.log(store.test)">lägg till</button>

  <div v-for="item in store.test">
    <div>{{ item }}</div>
    <div>ARF</div>
  </div>

  {{ this.$route.params }}
  <div>{{ test }}</div>
  <div>{{ test.name }}</div>
  <div>{{ test.count }}</div>
  <div>{{ test.doubleCount }}</div>
  <button @click="test.increment">lägg till</button>
  <button @click="test.add({'name':'Arvid','test':'testet'})">lägg till namn</button>
  <button @click="test.remove('Eduardo')">ta bort namn</button>
  <button @click="test.fetched()">fetch test</button>
</template>
