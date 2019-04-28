new Vue({
  el: '#app',
  data: {
    title: 'Event Object',
    name: 'John'
  },
  methods: {
    updateName(e) {
      console.log(e.target.value);
      this.name = e.target.value
    }
  }
});