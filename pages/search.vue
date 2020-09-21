<template>
  <div id="search">
    <header-second />
    <v-container>
      <the-fil-ariane :ariane="ariane" />
      <the-formatter />
      <the-filters />
    </v-container>
  </div>
</template>

<script>
import HeaderSecond from '@/components/header-second/HeaderSecond'
import TheFilAriane from '@/components/searchs/filAriane/TheFilAriane'
import TheFormatter from '@/components/searchs/format/TheFormatter'
import TheFilters from '@/components/searchs/filters/TheFilters'
export default {
  name: 'Search',
  components: { TheFilters, TheFormatter, TheFilAriane, HeaderSecond },
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
    ]
  })
}
</script>

<style scoped>

</style>
