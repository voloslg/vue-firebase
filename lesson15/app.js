new Vue({
  el: "#app",
  data: {
    title: "For loop",
    showName: false,
    showAge: true
  },
  methods: {
    toggleName() {
      this.showName = !this.showName;
    },
    toggleAge() {
      this.showAge = !this.showAge;
    }
  }
});
