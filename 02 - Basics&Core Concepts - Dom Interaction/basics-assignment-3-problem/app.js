const app = Vue.createApp({
  data() {
    return {
      number: 0,
    }
  },
  watch: {
    result() {
      setTimeout(() => {
        console.log('you have 5 seconds left')
        this.number = 0
      }, 5000)
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet'
      } else if (this.number === 37) {
        return this.number
      } else {
        return 'Too much!'
      }
    },
  },
  methods: {
    addNumber(num) {
      this.number += num
      console.log(this.number)
    },
  },
})

app.mount('#assignment')
