<template>
  <div class="tab-nav">
    <div class="nav-left">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
.tab-nav {
  height: 44px; //导航高度一般为44
  line-height: 44px;
  display: flex;
  text-align: center;

  .nav-left {
    width: 70px;
    background-color: red;
  }

  .nav-center {
    flex: 1;
    background-color: blue;
  }

  .nav-right {
    width: 70px;
    background-color: green;
  }
}
</style>
