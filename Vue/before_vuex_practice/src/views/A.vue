<template>
  <div>
      <h1>A</h1>
      <div>{{CatoA}},A</div>
      <Aa :Aa="AtoAa" @sendToA="takeMessage" @sendToCb="sendToCb"/>
      <Ab :Ab="AtoAb"/>
  </div>
</template>

<script>
import Aa from '../components/Aa.vue'
import Ab from '../components/Ab.vue'

export default {
    name: 'A',
    data: function(){
        return {
            AtoAa:'message from A to Ca',
            AtoAb:'message from A to Ab',
            CatoA:'',
        }
    },
    components:{
        Aa,
        Ab,
    },
    methods:{
        takeMessage(CaToA){
            this.CatoA=CaToA
        },
        sendToCb(CaToCb){
            this.$emit('sendToCb',CaToCb)
        },
    }
}
</script>

<style>

</style>