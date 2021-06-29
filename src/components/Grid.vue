<template>
  <div id="container">
    <div
      v-for="(color, index) in this.addColors"
      :key="index"
      class="square"
      @click="clickColor(color, index)"
      :style="{ 'background-color': color }"
    ></div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'src-components-grid',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      clickColor(color,index) {

      if(color === this.$store.state.colorGanador){
      this.$store.dispatch('getMessageDisplay',"You Picked Right!")
      this.setAllColorsTo(this.$store.state.colorGanador)
      this.$store.dispatch('getColorHeader', this.$store.state.colorGanador)
      this.$store.dispatch('getButtonTitle',"Play Again!")
			}	else{
      this.cambiarColor(index)
			this.$store.dispatch('getMessageDisplay',"Try Again!")

      }},
      cambiarColor(index){
        const array=[]
      for (let i = 0; i < this.addColors.length; i++) {
        if (i == index) {
          array.push('rgb(35, 35, 35)')
        }else{ array.push(this.addColors[i])
        }
        }
      this.$store.dispatch('getColors',array)
      },
      getColorIndex(color,index){
          this.$store.dispatch('getColorClickeado',color)
          this.$store.dispatch('getIndexClickeado',index)
      },
      setAllColorsTo(color){
        const array=[]
      for (let index = 0; index < this.addColors.length; index++) {
         array.push(color)
        }
      this.$store.dispatch('getColors',array)
      }
    },
    computed: {
      addColors(){
        return  this.$store.state.getColorArray
      }
    }
}
</script>

<style scoped>
#container {
  margin: 20px auto;
  max-width: 600px;
}
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
