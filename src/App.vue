<template>
  <div id="app">
    <br>
   <Game/>
  </div>
</template>

<script>
import Game from './components/Game.vue'
export default {
  name: 'App',
  components: {
   Game,
  }
}
</script>

<style>
body{
  background-color: #232323;
  margin-top: -20px;
  margin-left: -8px;
  margin-right: -8px;
  font-family: "Montserrat", "Avenir";
}
h1{	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;
} 
</style>
