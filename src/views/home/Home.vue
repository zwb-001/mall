<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav {
  background-color: hotpink;
}
</style>
