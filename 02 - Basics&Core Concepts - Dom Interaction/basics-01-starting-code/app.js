// initializing vue
// using vue features by passing an object to the createApp()
const app = Vue.createApp({
  // or data: function() {}
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      vueLink: 'https://vuejs.org/',
    }
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    },
  },
})

// mounting vue to a specific section of the html code
app.mount('#user-goal')
