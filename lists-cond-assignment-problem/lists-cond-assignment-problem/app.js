const app = new Vue({
    el: '#assignment',
    data(){
        return{
            tempTask: '',
            tasks: [],
            listVisible: true,
        }
    },
    methods: {
        addToTasks(){
            this.tasks.push(this.tempTask);
            this.tempTask = '';
        },
        toggleList(){
            this.listVisible = !this.listVisible;
        }
    }
})