<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from '@/components/NavBar'

export default {
  components: { navbar }
}
</script>

<style lang="sass">
body,html
  background: linear-gradient(to right,#FFF,#ECE9E6)
</style>
