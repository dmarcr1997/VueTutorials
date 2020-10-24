
Vue.component('friend-contact',{
    template:`
    <div>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phone }}</li>
            <li><strong>Email:</strong> {{ email }}</li>
        </ul>
    </div>
    `,
    data(){
        return{
            detailsAreVisible: false
        }
    },
    props:{
        name: String,
        phone: String,
        email: String
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = ! this.detailsAreVisible;
        }
    }
})

const app = new Vue({
    el:'#app',
    data(){
        return{
            friends: [
                {id: 'manuel', name: 'Manuel Lorenz', phone: '9038183333', email: 'manuel@localhost.com'},
                {id: 'julie', name: 'Julie Jones', phone: '9038183321', email: 'julie@localhost.com'}
            ]
        }
    }
})


