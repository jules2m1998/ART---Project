<template>
  <div class="mt-6">
    <h1 class="home-title mb-4">
      Les catégories populaires
    </h1>
    <category-list :categories="categories" />
  </div>
</template>
<script>
import CategoryList from '@/components/categoris/CategoryList'
export default {
  name: 'TheCategories',
  components: { CategoryList },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
