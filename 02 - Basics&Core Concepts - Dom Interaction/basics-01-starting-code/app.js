// initializing vue
// using vue features by passing an object to the createApp()
const app = Vue.createApp({
  // or data: function() {}
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
    }
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return 'Learn Vue!'
      } else {
        return 'Master Vue!'
      }
    },
  },
})

// mounting vue to a specific section of the html code
app.mount('#user-goal')
