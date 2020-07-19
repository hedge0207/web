<template>
  <div>
      <h1>Ba</h1>
      <Cb :MFCaTCb="MFCaTCb"/>
  </div>
</template>

<script>
import Cb from '@/components/Cb.vue'

export default {
    name: 'Ba',
    data: function(){
        return {
            tmp:'',
        }
    },
    components:{
        Cb,
    },
    props:{
        MFCaTCb:String,
    },
}
</script>

<style>

</style>