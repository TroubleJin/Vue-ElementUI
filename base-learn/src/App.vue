<template>
  <div id="app">
    <button @click="passMessage">非父子组件传值</button>
    <hr>
    <Parent></Parent>
  </div>
</template>
<script>
  import Parent from "./views/Parent";
  import bus from './util/bus.js'
  export default {
    components: {
      Parent,
    },
    methods: {
      passMessage() {
        bus.$emit('Message','i am 非父子组件传值')
      }
    },
  }
</script>
<style>
</style>
