new Vue({
  el: '#app',
  data: {
    title: 'Events',
    wage: 10
  },
  methods: {
    changeWage(amount) {
      this.wage += amount;
    }
  }
});