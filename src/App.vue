<template>
  <div>
    <Navbar/>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>    
</template>

<script>
import Navbar from './components/Navbar.vue'
import CallRecord from './components/CallRecord.vue'
import CallList from './components/CallList.vue'

export default {
  name: 'app',
  components: {
    'Navbar': Navbar,
    'CallRecord': CallRecord,
    'CallList': CallList,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
img{
  width: 10%;
  height: 10%;
  align-items: flex-start
}
</style>
