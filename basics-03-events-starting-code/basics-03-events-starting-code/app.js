const app = new Vue({
  el: '#events',
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(e){
      this.name = e.target.value;
    },
    addOne(num){
      this.counter += num;
    },
    removeOne(num){
      this.counter -= num;
    },
  }
});

