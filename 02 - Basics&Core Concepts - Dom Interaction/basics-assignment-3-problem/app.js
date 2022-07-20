const app = Vue.createApp({
  data() {
    return {
      result: null,
      output: '',
    }
  },
  watch: {
    result(value) {
      setTimeout(() => {
        this.output = 0
      }, 5000)
      if (value < 37) {
        this.output = 'Not there yet'
      } else if (value === 37) {
        this.output = this.result
      } else {
        this.output = 'Too much!'
      }
    },
  },

  methods: {
    add(num) {
      this.result += num
      console.log(this.result)
    },
  },
})

app.mount('#assignment')
