const app = new Vue({
    el:"#assignment",
    data(){
        return{
            inputClass: '',
            visibile: true,
            bgColor: ''
        }
    },
    methods: {
        changeViz(){
            this.visibile = !this.visibile
        }
    },
    computed: {
        visibilityClass(){
            return this.visibile ? "visible" : "hidden";
        },
        userInputBg(){
            return this.bgColor !== '' ? this.bgColor : '#8ddba4'
        }
    }
})