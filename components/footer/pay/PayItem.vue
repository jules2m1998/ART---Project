<template>
  <div>
    <img :src="item.src" :alt="item.alt">
  </div>
</template>

<script>
export default {
  name: 'PayItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  img{
    width: 60px;
  }
</style>
