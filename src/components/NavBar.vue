<template>
  <section class="src-components-nav-bar">
    <button id="reset" @click="method()">{{getTituloRestart}}</button>
    <span id="message"> {{getMensaje}} </span>

    <button
      id="easy"
      :class="!this.$store.state.dificultad && 'selected'"
      @click="gameEasy()"
    >
      easy
    </button>
    <button
      id="hard"
      :class="this.$store.state.dificultad && 'selected'"
      @click="gameHard()"
    >
      hard
    </button>
    
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-nav-bar',
    props: {method: { type: Function }},
    mounted () {

    },
    data () {
      return {
        isHard:true,
      }
    },
    methods: {
      gameEasy(){
        this.$store.dispatch('cambiarFalse', false)
        this.method()
        
      },
        gameHard(){
        this.$store.dispatch('cambiarTrue', true)
this.method()
      }
    },
    computed: {
        getMensaje(){
          return this.$store.state.messageDisplay
        },
        getTituloRestart(){
          return this.$store.state.buttontitle
        }
    }
}
</script>

<style scoped lang="css">
.src-components-nav-bar {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}

.selected {
  background-color: steelblue;
  color: white;
}
#message {
  color: #000000;
  display: inline-block;
  width: 20%;
}
</style>
