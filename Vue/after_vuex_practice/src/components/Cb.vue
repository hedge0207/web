<template>
  <div>
      <h1>Cb</h1>
      <div>{{MFCaTCb}}</div>
      <button @click="check">메세지 체크</button>
  </div>
</template>

<script>
export default {
    name: 'Cb',
    data: function(){
        return {
            originalMessage:'',
            receivedMessgae:'',
        }
    },
    props:{
        MFCaTCb:String,
    },
    methods:{
        check(){
            this.receivedMessgae=this.MFCaTCb;
            console.log(this.receivedMessgae, this.originalMessage)
            if (this.originalMessage!==this.receivedMessgae){
                console.log("메세지를 정상적으로 받았습니다.")
            }else{
                console.log("메세지를 받지 못했습니다.")
            }
        },
    }
}
</script>

<style>

</style>