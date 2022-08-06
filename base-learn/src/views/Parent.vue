
<template>
  <div>
    <h1>Parent</h1>
    <h3>{{ msg }}</h3>
    <h5> vuex {{ count }}</h5>
    <h5> getters {{ doubleCount }}</h5>
    <button @click="add"> 增加</button>
    <Child v-bind:msg = "'from parent msg'"  @showMsg="ChildMsg" ref="child" v-bind="$attrs"></Child>
  </div>
</template>

<script>
import Child from './Child'
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      count: 'count',
    }),
    ...mapGetters([
        'doubleCount'
    ])
  },
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
    },
    add(){
      // 调用mutations
      // this.$store.commit('add')
      //调用action
      this.$store.dispatch('delayAdd')
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