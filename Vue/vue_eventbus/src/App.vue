<template>
  <div id="app">
    <sender/>
    <receiver/>
  </div>
</template>

<script>
import sender from './components/sender.vue'
import receiver from './components/receiver.vue'

export default {
  name: 'App',
  components: {
    sender,
    receiver
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
