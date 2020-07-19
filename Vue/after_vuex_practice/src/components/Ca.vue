<template>
  <div>
      <h1>Ca</h1>
      <div>{{Aac}},Ca</div>
      <button @click="sendToAa">Send To A</button>
      <button @click="sendToCb">Send To Cb</button>
  </div>
</template>

<script>
export default {
    name: 'Ca',
    data: function(){
        return {
            CaToA:'message from Ca to A',
            CaToCb:'message from Ca to Cb',
        }
    },
    props:{
        Aac:String,
    },
    methods:{
        sendToAa(){
            this.$emit('sendToAa',this.CaToA)
        },
        sendToCb(){
            this.$emit('sendToCb',this.CaToCb)
        },
    }
}
</script>

<style>

</style>