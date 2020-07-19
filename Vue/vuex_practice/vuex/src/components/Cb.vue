<template>
  <div>
      <h1>Cb</h1>
      <div>{{MFCaTCb}}</div>
  </div>
</template>

<script>
export default {
    name: 'Cb',
    data: function(){
        return {
            tmp:'',
        }
    },
    props:{
        MFCaTCb:String,
    }
}
</script>

<style>

</style>