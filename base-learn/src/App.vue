<template>
  <div id="app">
    <h1>This is App</h1>
<!--    <button @click="passMessage">非父子组件传值</button>-->
<!--    <hr>-->
<!--    <Parent :msga="msga" :msgb="msgb" :msgc="msgc"></Parent>-->
<!--    <router-link to="/home">Home</router-link>-->
    <hr>
    <button @click="toHome">toHome</button>
    <router-view></router-view>
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
      },
      toHome() {
        // this.$router.push('/home')
       this.$router.push({path: '/', query: {id: 2}})
        this.$router.push({name: 'home', params: {id: 2}})
      }
    },
    data() {
      return {
        msga: 'msga',
        msgb: 'msgb',
        msgc: 'msgc',
      }
    },
  }
</script>
<style>
</style>
