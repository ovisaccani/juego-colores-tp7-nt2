<template>
  <section class="src-components-game">
    <Header />
    <NavBar :method="restart" />
    <Grid />
  </section>
</template>

<script lang="js">
import Header from './header.vue'
import NavBar from './NavBar.vue'
import Grid from './Grid.vue'
  export default  {
    name: 'src-components-game',
    props: [],
     components: {
   Header,
   NavBar,
   Grid,
  },
    mounted () {
this.restart()
    },
    data () {
      return {
        colors: [],
        pickedColor: "",
      }
    },
    methods: {
  restart() {
      this.colors = this.createNewColors();
      this.pickedColor = this.colors[this.pickColor()];

      this.$store.dispatch('getColors', this.colors)
      this.$store.dispatch('getColorGanador', this.pickedColor)
      this.$store.dispatch('getColorHeader', 'steelblue')
      this.$store.dispatch('getMessageDisplay',"")
      this.$store.dispatch('getButtonTitle',"New Colors!")
    },

pickColor(){
	var quantity = this.$store.state.colorCount
	return Math.floor(Math.random() * quantity );
},

  randomInt(){
	return Math.floor(Math.random() * 256);
},

createRandomStringColor(){
	const newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;

	return newColor;
},

 createNewColors(){
	const arr = [];
	for (var i = 0; i < this.$store.state.colorCount; i++) {
		arr.push(this.createRandomStringColor());
	}
    return arr;
},



    },
    computed: {

    }
}
</script>

<style scoped lang="css"></style>
