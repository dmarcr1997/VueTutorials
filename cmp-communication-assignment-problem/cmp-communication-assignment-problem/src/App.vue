<template>
    <active-user :user-name="activeName" :age="activeAge"></active-user>
    <user-data @change-data="updateActiveUser"></user-data>
</template>

<script>
export default {
    data(){
        return{
            activeName: '',
            activeAge: ''
        }
    },
    methods: {
        updateActiveUser(name, age){
            this.activeName = name;
            this.activeAge = age;
        }
    }
}
</script>