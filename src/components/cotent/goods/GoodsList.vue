<template>
  <div class="goods">
    <ul>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
