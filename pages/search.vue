<template>
  <div id="search">
    <header-second />
    <v-container>
      <the-search />
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
    ]
  })
}
</script>

<style scoped>

</style>
