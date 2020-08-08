<template>
  <div>
    <my-menu :menus="menus" />
    <search-bar />
  </div>
</template>

<script>
import MyMenu from '@/components/search/menu/MyMenu'
import SearchBar from '@/components/search-bar/SearchBar'
export default {
  name: 'Search',
  components: { SearchBar, MyMenu },
  data: () => ({
    menus: [
      {
        name: 'Entreprises / professionnels',
        to: '/'
      },
      {
        name: 'particuliers',
        to: '/s'
      },
      {
        name: 'Recherche inversee',
        to: '/s'
      }
    ]
  })
}
</script>

<style scoped>

</style>
