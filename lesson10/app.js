new Vue({
  el: '#app',
  data: {
    title: 'Event Object',
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
    evetnLog(event) {
      console.log(event);
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY
    }
  }
});