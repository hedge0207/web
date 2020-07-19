<template>
  <div>
      <h1>Aa</h1>
      <div>{{Aa}}, Aa</div>
      <Ca :Aac="Aa" @sendToAa="sendToA" @sendToCb="sendToCb"/>
  </div>
</template>

<script>
import Ca from '@/components/Ca.vue'

export default {
    name: 'Aa',
    data: function(){
        return {
            tmp:'',
        }
    },
    components:{
        Ca,
    },
    props:{
        Aa:String,
    },
    methods:{
        sendToA(CaToA){
            this.$emit('sendToA',CaToA)
        },
        sendToCb(CaToCb){
            this.$emit('sendToCb',CaToCb)
        },
    }
}
</script>

<style>

</style>