<template>
  <div class="app">
  <HeaderNav/>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
export default {
  name: 'App',
  components: {HeaderNav},

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
