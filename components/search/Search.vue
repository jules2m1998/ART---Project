<template>
  <div>
    <my-menu v-model="value.content.forms" :menus="menus" @changecurrent="doUpdate" />
    <search-bar />
  </div>
</template>

<script>
import MyMenu from '@/components/search/menu/MyMenu'
import SearchBar from '@/components/search-bar/SearchBar'
export default {
  name: 'Search',
  components: { SearchBar, MyMenu },
  props: {
    value: {
      type: Object,
      required: true
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
  mounted () {
  },
  methods: {
    doUpdate (e) {
      this.menus = e
    }
  }
}
</script>

<style scoped>

</style>
