<template>
  <section class="src-components-header">
    <div id="header" :style="{ background: this.getColorHeader }">
      <h1>
        The Great <br />
        <span id="colorDisplay">{{ this.$store.state.colorGanador }}</span>
        <br />
        Guessing Game
      </h1>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-header',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
      getColorHeader(){
        return this.$store.state.colorHeader
      }
    }
}
</script>

<style scoped lang="css">
#colorDisplay {
  font-size: 200%;
}
#header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
</style>
