<template>
  <div>
    <my-menu :menus="menus" @changecurrent="doUpdate" />
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
    /**
     * Liste des menus
     */
    menus: [
      {
        name: 'Entreprises / professionnels',
        to: '/',
        visible: true,
        isCurrent: true,
        id: 1
      },
      {
        name: 'particuliers',
        to: '/s',
        visible: true,
        isCurrent: false,
        id: 2
      },
      {
        name: 'Recherche inversee',
        to: '/s',
        visible: true,
        isCurrent: false,
        id: 3
      }
    ]
  }),
  methods: {
    doUpdate (e) {
      this.menus = e
      debugger
    }
  }
}
</script>

<style scoped>

</style>
