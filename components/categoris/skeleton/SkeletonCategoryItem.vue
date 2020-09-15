<template>
  <div class="skeleton" :style="{width: randomWidth() + 'px'}" />
</template>

<script>
export default {
  name: 'SkeletonCategoryItem',
  methods: {
    randomWidth () {
      return 90 + (30 * Math.random())
    }
  }
}
</script>

<style lang="scss" scoped>
  .skeleton{
    height: 28px;
    border-radius: 28px;
    margin-right: 16px;
    margin-bottom: 16px;
  }
</style>
