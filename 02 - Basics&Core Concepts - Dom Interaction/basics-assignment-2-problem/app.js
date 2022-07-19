const app = Vue.createApp({
  data() {
    return {
      text: 'Hello World',
    }
  },
  methods: {
    showAlert() {
      alert(this.text)
    },
  },
})

app.mount('assignment')
