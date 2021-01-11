<template>
  <div>{{receivedMessage}}</div>
</template>

<script>
import { eventBus } from "../main"
export default {
    data(){
        return {
            receivedMessage: "아직 못 받았어요!!"
        }
    },
    created(){
        eventBus.$on('eventWasSended', (msg)=>{
            this.receivedMessage = msg
        })
    }

}
</script>

<style>

</style>