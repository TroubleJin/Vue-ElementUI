<template>
  <div>
    <h1>This is Home</h1>
    <h5>{{ $route.params.id }}</h5>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>