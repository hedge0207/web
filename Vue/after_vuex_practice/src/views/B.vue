<template>
  <div>
      <h1>B</h1>
      <Ba :MFCaTCb="MFCaTCb"/>
  </div>
</template>

<script>
import Ba from '@/components/Ba.vue'

export default {
    name: 'B',
    data: function(){
        return {
            tmp:'',
        }
    },
    components:{
        Ba
    },
    props:{
        MFCaTCb:String,
    }
}
</script>

<style>

</style>