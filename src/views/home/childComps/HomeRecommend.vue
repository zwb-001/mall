<template>
<div class="recommend">
  <div v-for="item in recommends">

  </div>
</div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style scoped>

</style>
