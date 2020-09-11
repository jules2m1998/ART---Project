<template>
  <div>
    <h2 class="home-title mb-4">
      Les catégories populaires
    </h2>
    <category-list :categories="categories" />
  </div>
</template>
<script>
import CategoryList from '@/components/categoris/CategoryList'
export default {
  name: 'TheCategories',
  components: {
    CategoryList
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data: () => ({
  }),
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
