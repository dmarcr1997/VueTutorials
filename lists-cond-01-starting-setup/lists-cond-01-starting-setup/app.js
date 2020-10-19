const app = new Vue({
  el: '#user-goals',
  data() {
    return { 
      goals: [],
      tempGoal: ''
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.tempGoal);
      this.tempGoal = '';
    },
    removeGoal(idx){
      this.goals.splice(idx, 1);
    }
  }
});

