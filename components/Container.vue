<template>
  <div
    class="images-holder"
    style=""
    id="Container"
  >
    <Images
      class="object-contain"
      v-for="n in 25"
      :key="n"
      :mouseX="client_X(n)"
      :mouseY="client_Y(n)"
      :CellWidth="CellWidth"
      :CellHeight="CellHeight"
      :index="n"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      index: 0,
      CellWidth: 81,
      CellHeight: 80,
    };
  },
  methods: {
    mouseMove(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    client_X(n) {
      this.index = n;
      return this.x - this.CellWidth * this.getXNumber(n);
    },
    client_Y(n) {
      this.index = n;
      return this.y - this.CellHeight * this.getYNumber(n);
    },
    getYNumber(n) {
      return Math.ceil(n / 5);
    },
    getXNumber(n) {
      var cullom = 5;
      var row = 5;
      var max = cullom * row;
      var number = 0;
      for (let i = 1; i <= max; i++) {
        if (i == n) {
          number = i % cullom;
          if (number == 0) {
            number = cullom;
          }
        }
      }
      return number;
    },
  },
  mounted() {
    var Container = document.getElementById("Container");
    Container.addEventListener("mousemove", this.mouseMove);
  },
};
</script>

<style lang="scss">
.images-holder{
  width: 100%;
  height: 449px;
  gap: 0.5rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  max-width: 28rem;
  display: grid;
  position: relative;
}
</style>