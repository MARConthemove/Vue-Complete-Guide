const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: '',
    }
  },
  computed: {
    // fullname() {
    //   console.log('running again...')
    //   if (this.name === '') {
    //     return ''
    //   }
    //   return this.name + ' ' + 'Gätcke'
    // },
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = ''
      } else {
        // the value will automatically passed in to the method
        this.fullname = value + ' ' + 'Gaetcke'
      }
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    },
  },
})

app.mount('#events')
