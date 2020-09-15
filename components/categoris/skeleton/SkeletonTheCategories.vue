<template>
  <div>
    <div class="skeleton skeleton-title" />
    <skeleton-category-list />
  </div>
</template>

<script>
import SkeletonCategoryList from '@/components/categoris/skeleton/SkeletonCategoryList'
export default {
  name: 'SkeletonTheCategories',
  components: { SkeletonCategoryList }
}
</script>

<style scoped>

</style>
