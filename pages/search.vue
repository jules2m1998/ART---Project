<template>
  <div id="search">
    <header-second />
    <v-container>
      <the-search :filters="filters" />
    </v-container>
  </div>
</template>

<script>
import HeaderSecond from '@/components/header-second/HeaderSecond'
import TheSearch from '@/components/searchs/TheSearch'
export default {
  name: 'Search',
  components: { TheSearch, HeaderSecond },
  data: () => ({
    ariane: [
      {
        title: 'Liste des entreprises',
        to: '/'
      },
      {
        title: 'Villes',
        to: '/'
      },
      {
        title: 'Yaoundé',
        to: '/'
      }
    ],
    filters: [
      {
        title: 'Catégories',
        isActive: false,
        filters: [
          {
            id: 0,
            name: 'Filtre 0',
            isActive: false
          },
          {
            id: 1,
            name: 'Filtre 1',
            isActive: false
          },
          {
            id: 2,
            name: 'Filtre 2',
            isActive: false
          },
          {
            id: 3,
            name: 'Filtre 3',
            isActive: false
          },
          {
            id: 4,
            name: 'Filtre 4',
            isActive: false
          },
          {
            id: 5,
            name: 'Filtre 5',
            isActive: false
          }
        ],
        id: 0
      },
      {
        title: 'Links',
        isActive: false,
        id: 1
      },
      {
        title: 'Langues',
        isActive: false,
        filters: [
          {
            id: 0,
            name: 'Francais',
            isActive: false
          },
          {
            id: 1,
            name: 'Anglais',
            isActive: false
          }
        ],
        id: 2
      },
      {
        title: 'Links',
        isActive: false,
        id: 3
      },
      {
        title: 'Links',
        isActive: false,
        id: 4
      }
    ]
  })
}
</script>

<style scoped>

</style>
