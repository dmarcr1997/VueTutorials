const app = new Vue({
  el: '#events',
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(e) {
      this.confirmedName = e.target.value;
    },
    confirmInput() {
      this.name = this.confirmedName;
      this.confirmedName = '';
    },
    addOne(num) {
      this.counter += num;
    },
    removeOne(num) {
      this.counter -= num;
    },
    submitForm() {
      alert("SUBMITTED");
    }
  }
});

