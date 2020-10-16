const app = new Vue({
    el:'#assignment',
    data(){
        return{
            name: "Damon",
            age: 23,
            imageUrl: "https://scitechdaily.com/images/Illustration-Photons-Galaxy-777x518.jpg",
        }    
    },
    methods: {
        getRandomNumber(){
            return Math.random();
        }
    }
})