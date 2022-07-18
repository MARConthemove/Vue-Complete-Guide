const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add: function () {
      return (this.counter += 1)
    },
  },
})

app.mount('#events')
