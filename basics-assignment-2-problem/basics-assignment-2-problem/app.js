const app = new Vue({
    el:"#assignment",
    data(){
        return{
            parText: '',
            par2Text: '',
            tempPar: '',
        }
    },
    methods:{
        showAlert(){
            alert("ALERT!!!!");
        },
        addToPar(e){
            this.parText = e.target.value;
        },
        addToTempPar(e){
            this.tempPar = e.target.value;
        },
        displayText(){
            this.par2Text = this.tempPar;
            this.tempPar = '';
        }
    }
})