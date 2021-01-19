import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue()

export const evnetBusTwo = new Vue({
  methods:{
    changeMessage(msg){
      this.$emit('MessageWasChanged',msg)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
