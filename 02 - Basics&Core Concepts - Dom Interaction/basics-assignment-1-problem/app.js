const app = Vue.createApp({
  data: function () {
    return {
      myName: 'Marc - Fabian Gätcke',
      myAge: 36,
      picture:
        'https://images.unsplash.com/photo-1658086351750-1ec43149a713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
    }
  },
  methods: {
    randomNum: function () {
      const randNum = Math.random()
      return randNum
    },
  },
})

app.mount('#assignment')
