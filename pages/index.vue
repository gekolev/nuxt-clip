<template>
  <div class="rel">
    <h1 class="abs"> simpler implementation on page /better <br> took me some time tho..</h1>
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
  display: flex;
}

.abs{
  font-size: 24px;
  position:absolute;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>