<template>
    <form @submit.prevent="changeData">
        <div>
            <label>Username</label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label>Age</label>
            <input type="number" v-model="enteredAge"/>
        </div>
        <button>Submit</button>        
    </form>
</template>

<script>
export default {
    emits: ['change-data'],
    data(){
        return{
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        changeData() {
            this.$emit('change-data', this.enteredName, this.enteredAge);
        }
    }
}
</script>