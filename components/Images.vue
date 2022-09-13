<template>
  <div
    class="object-fit-maybe container"
    :style="{ height: CellHeight + 'px', width: CellWidth + 'px' }"
  >
    <div class="small-img-holder">
      <img
        class="small-img1"
        :src="require(`~/assets/images/small.png`)"
        alt=""
      />

      <div
        class="round"
        :id="'circle-' + index"
        :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
      >
        <!-- <img :id="'img-' + index" :src="require(`~/assets/images/big.png`)"  alt=""> -->
      </div>
    </div>
    <div class="big-img-holder">
      <img
        :id="'bigImage-' + index"
        class="full"
        :src="require(`~/assets/images/big.png`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "mouseY", "mouseX", "CellWidth", "CellHeight"],
  methods: {
    magnify(imgId, zoom) {
      //we need to zoom the bigImage into circle
      //we need to move the bigImage into circle

      var img, glass, w, h, bw;
      img = document.getElementById(imgId);
      // Create magnifier glass:
      glass = document.getElementById("circle-" + this.index);
      // Insert magnifier glass:
      // img.parentElement.insertBefore(glass, img);
      // Set background properties for the magnifier glass:

      glass.style.backgroundImage = "url('" + img.src + "')";
      glass.style.backgroundRepeat = "no-repeat";
      glass.style.backgroundSize =
        img.width * zoom + "px " + img.height * zoom + "px";
      bw = 3;
      w = glass.offsetWidth / 2;
      h = glass.offsetHeight / 2;
      // Execute a function when someone moves the magnifier glass over the image:
      document
        .getElementById("Container")
        .addEventListener("mousemove", moveMagnifier);

      function moveMagnifier(e) {
        var pos, x, y;
        // Prevent any other actions that may occur when moving over the image
        e.preventDefault();
        // Get the cursor's x and y positions:
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        // Prevent the magnifier glass from being positioned outside the image:
        if (x > img.width - w / zoom) {
          x = img.width - w / zoom;
        }
        if (x < w / zoom) {
          x = w / zoom;
        }
        if (y > img.height - h / zoom) {
          y = img.height - h / zoom;
        }
        if (y < h / zoom) {
          y = h / zoom;
        }
        // Set the position of the magnifier glass:
        // glass.style.left = (x - w) + "px";
        // glass.style.top = (y - h) + "px";
        // Display what the magnifier glass "sees":
        glass.style.backgroundPosition =
          "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
      }
      function getCursorPos(e) {
        var a,
          x = 0,
          y = 0;
        e = e || window.event;
        // Get the x and y positions of the image:
        a = img.getBoundingClientRect();
        // Calculate the cursor's x and y coordinates, relative to the image:
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        // Consider any page scrolling:
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
      }
    },
  },

  mounted() {
    this.magnify("bigImage-" + this.index, 1.7);
  },
};
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
}
.small-img-holder{
  background-color: gray;
  position:relative;
  overflow:hidden;
  width: 100%;
  height: 100%;
}
.small-img1{
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  z-index: 10;
}
.round{
  border-radius: 10rem;
  background-color: red;
  overflow:hidden;
  position: absolute;
  width: 10rem;
  height: 10rem;
  z-index: 15;
}
.big-img-holder{
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  visibility: hidden;
}
.full{
  width:100%;
  height: 100%;
}
</style>