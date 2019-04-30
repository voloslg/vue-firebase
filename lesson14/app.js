new Vue({
  el: "#app",
  data: {
    title: "Conditional rendering if",
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
