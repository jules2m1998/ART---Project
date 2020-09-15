<template>
  <div style="display: flex; flex-direction: row; flex-wrap: wrap">
    <skeleton-category-item v-for="i in 10" :key="i" />
  </div>
</template>

<script>
import SkeletonCategoryItem from '@/components/categoris/skeleton/SkeletonCategoryItem'
export default {
  name: 'SkeletonCategoryList',
  components: { SkeletonCategoryItem }
}
</script>

<style scoped>

</style>
