new Vue({
  el: '#app',
  data: {
    title: 'Bercoming Vue Ninja',
    name: 'John',
    url: 'https://www.youtube.com/',
    classes: ['bg-primary text-white'],
  },
  methods: {
    greet(time) {
      return `Hello there ${this.name} and good ${time}`
    }
  }
});