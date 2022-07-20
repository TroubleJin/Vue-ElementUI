<template>
  <div>
    <hr>
    <h2>Child</h2>
    <h5> {{ msg }}</h5>
    <h6> {{ childMsg }} </h6>
    <button @click="passMsg" >走你</button>
  </div>
</template>

<script>
import bus from '../util/bus.js'
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  methods: {
    passMsg() {
      //第一个自定义事件的名字,第二个参数是value
      this.$emit('showMsg','i am from child')

    }
  },
  data() {
    return {
      childMsg: 'childMessage'
    }
  },
  mounted() {
    console.log(this.$parent)
    bus.$on('Message',(value)=>{
      console.log(value)
      this.childMsg = value
    })
  }
}
</script>

<style >

</style>