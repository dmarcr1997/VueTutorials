const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
      this.lastName = '';
    }
  },
  watch: {
    counter(value){
      this.counter = value > 50 || value < -50 ? this.counter = 0 : this.counter = value;
    }
  },
  computed: {
    FullName() {
      let output = this.name !== '' ? this.name + " " + this.lastName : "" + this.lastName;
      return output;
    }
  }
});

app.mount('#events');
