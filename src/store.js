import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
       dificultad:true,
       colorCount:6,
       getColorArray:[],
       colorGanador:"",
       colorHeader:"",
       index:"",
       messageDisplay:'',
       buttontitle:''
    },
    actions: {
        cambiarTrue({commit},booleano){
            commit('cambiarFacil',booleano)
        },
        cambiarFalse({commit},booleano){
            commit('cambiarDificil',booleano)
        },
        getColors({commit},array){
            commit('actualizarArray',array)
        },
        getColorGanador({commit},algo){
            commit('obtenerColorGandor',algo)
        },
        getColorHeader({commit},color){
            commit('asignarColorHeader',color)
        },
        getMessageDisplay({commit},mensaje){
            commit('asignarMensaje',mensaje)
        },
        getButtonTitle({commit},texto){
            commit('asignarTitulo',texto)
        },
    },
    mutations: {
      
        cambiarFacil(state,booleano) {
            state.dificultad = booleano
            state.colorCount = 6
        }, 
        cambiarDificil(state,booleano) {
            state.dificultad = booleano
            state.colorCount = 3
        },
        actualizarArray(state,array){
            state.getColorArray= array
        },
        obtenerColorGandor(state,algo){
            state.colorGanador = algo
        },
        asignarColorHeader(state,color){
            state.colorHeader = color
        },
       asignarMensaje(state,mensaje){
            state.messageDisplay= mensaje
        },
        asignarTitulo(state,text){
            state.buttontitle=text
        }
    }
})