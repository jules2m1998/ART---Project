<template>
  <div>
    <h1 class="home-title mb-4 editable" @save="setTitle" @reset="resetTitle">
      {{ value.content.title }}
    </h1>
    <category-list v-model="value.content['category-list']" />
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
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
  }),
  mounted () {
  },
  methods: {
    setTitle (e) {
      this.value.content.title = e.target.textContent.trim()
    },
    resetTitle (e) {
      e.target.textContent = this.value.content.title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
