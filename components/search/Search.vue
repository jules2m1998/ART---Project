<template>
  <div>
    <my-menu v-if="isTopVisible" class="my-menu" :menus="menus" :is-responsive="isMenuResponsive" @changecurrent="doUpdate" />
    <search-bar :is-responsive="isSearchBarResponsive" />
  </div>
</template>

<script>
import MyMenu from '@/components/search/menu/MyMenu'
import SearchBar from '@/components/search-bar/SearchBar'
export default {
  name: 'Search',
  components: { SearchBar, MyMenu },
  props: {
    isTopVisible: {
      type: Boolean,
      default: true
    },
    isSearchBarResponsive: {
      type: Boolean,
      default: false,
      required: false
    },
    isMenuResponsive: {
      type: Boolean,
      default: false,
      required: false
    }
  },
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
    }
  }
}
</script>

<style scoped>

</style>
