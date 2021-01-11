<template>
  <div>
      <button @click="sendEventBus">클릭하세요</button>
  </div>
</template>

<script>
import { eventBus } from '../main'  //main.js에서 export한 eventBus를 오브젝트 형태로 import 한다.
export default {
    data(){
        return {

        }
    },
    methods:{
        sendEventBus(){
            eventBus.$emit("eventWasSended", "잘 받으셨나요?")
            console.log("이벤트를 실은 버스가 출발했습니다.")
        }
    }
    

}
</script>

<style>

</style>