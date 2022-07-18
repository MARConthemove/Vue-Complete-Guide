// initializing vue
// using vue features by passing an object to the createApp()
const app = Vue.createApp({
  // or data: function() {}
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
    }
  },
})

// mounting vue to a specific section of the html code
app.mount('#user-goal')
