
<template>
  <div>
    <h1>Parent</h1>
    <h3>{{ msg }}</h3>
    <Child v-bind:msg = "'from parent msg'"  @showMsg="ChildMsg" ref="child"></Child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Child
  },
  methods: {
    ChildMsg (val) {
      console.log(this.msg)
      this.msg = val
    }
  },
  mounted() {
    console.log(this.$children)
    console.log('ref child',this.$refs.child)
  }
}
</script>

<style >

</style>