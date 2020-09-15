<template>
  <div class="skeleton skeleton-number ma-1" />
</template>

<script>
export default {
  name: 'SkeletonNumeroUrgentItem'
}
</script>

<style lang="scss" scoped>
  .skeleton-number{
    border-radius: 6px;
    width: 200px;
    height: 200px;
    @media screen and (max-width: 440px){
      width: 100%;
    }
    @media screen and (max-width: 648px) and (min-width: 440px){
      width: 45%;
    }
  }
</style>
