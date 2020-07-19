<template>
  <div>
      <h1>Ab</h1>
      <div>{{Ab}}, Ab</div>
  </div>
</template>

<script>
export default {
    name: 'Ab',
    data: function(){
        return {
            tmp:'',
        }
    },
    props:{
        Ab:String,
    },
}
</script>

<style>

</style>