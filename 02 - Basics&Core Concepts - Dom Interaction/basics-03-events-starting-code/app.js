const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add(num) {
      this.counter += num
      // this.counter = this.counter + 1
      // this.counter++
    },
    reduce(num) {
      this.counter -= num
    },
  },
})

app.mount('#events')
