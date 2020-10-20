const getRandomNumber = (max, min) => {
    return Math.floor(Math.random()*(max-min)) + min;
}

const app = new Vue({
    el:'#game',
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            battleLog: []
        };
    },
    computed: {
        monsterBarStyles(){
            if (this.monsterHealth < 0){
                return {width: '0%'};
            }
           return {width: this.monsterHealth + "%"};
        },
        playerBarStyles(){
            if (this.playerHealth < 0){
                return {width: '0%'};
            }
            return {width: this.playerHealth + "%"};
        },
        mayUseSpecial(){
            return this.currentRound % 3 !== 0
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            } else if (value <= 0){
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw'; 
            } else if (value <= 0){
                this.winner = 'player'
            }
        }
    },
    methods: {
        attackMonster(){
           this.currentRound++;
           const attackValue = getRandomNumber(12, 5);
           this.monsterHealth -= attackValue;
           this.addLogMessage('player', 'attack', attackValue);
           this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomNumber(15, 8);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomNumber(25, 10);
            this.addLogMessage('player', 'attack', attackValue);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomNumber(8, 20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
           
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        playAgain(){
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.winner = null;
            this.currentRound = 0;
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            this.battleLog.unshift({
               actionBy: who,
               actionType: what,
               actionValue: value 
            });
        }
    }
});