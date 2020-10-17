const app = new Vue({
    el: "#assignment",
    data(){
        return{
            result: 0,
        }
    },
    watch: {
        result(value){
            setTimeout(() => {
                this.result = 0
            }, 5000)
        }
    },
    methods: {
        addOne(){
            this.result++;
        },
        addFive(){
            this.result += 5;
        }
    },
    computed: {
        status(){
            if (this.result < 37){ 
                return "Not there yet"
            } else if (this.result > 37){
                return "Too much!";
            }  else {
                return "You Won!!!"
            }
        }
    }
})