const app = new Vue({
    el: "#user-goal",
    data() {
        return {
            goals: ["Finish Vue", "Start Working", "Finish my Bachelor's"],
            vueLink: 'https://vuejs.org/v2/guide/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.goals[0]
            } else if (randomNumber > 0.70) {
                return this.goals[2]
            } else {
                return this.goals[1]
            }
        }
    }
});