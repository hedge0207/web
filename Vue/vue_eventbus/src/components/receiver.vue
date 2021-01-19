<template>
  <div>
      <div>{{receivedMessage}}</div>
      <div>{{changedMessage}}</div>
  </div>
</template>

<script>
import { eventBus,evnetBusTwo } from "../main"
export default {
    data(){
        return {
            receivedMessage: "아직 못 받았어요!!",
            changedMessage: "아직 안 바뀌었어요!!"
        }
    },
    created(){
        eventBus.$on('eventWasSended', (msg)=>{
            this.receivedMessage = msg
        })
        evnetBusTwo.$on('MessageWasChanged', (msg)=>{
            this.changedMessage=msg
        })
    }

}
</script>

<style>

</style>