<template>
  <div class="rel">
  <div class="home-container">
      <Container />
  </div>
</div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss">

.home-container{
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>