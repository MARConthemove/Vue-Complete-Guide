const app = Vue.createApp({
  data() {
    return {
      text: 'Hello World',
      userInput: '',
      confirmedInput: '',
    }
  },
  methods: {
    showAlert() {
      console.log('Alert out')
      // alert(this.text)
    },
    saveInput(event) {
      this.userInput = event.target.value
    },
    confirmInput() {
      this.confirmedInput = this.userInput
    },
  },
})

app.mount('#assignment')
