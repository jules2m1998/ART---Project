<template>
  <div id="the-search">
    <div class="the-search-header">
      <div class="the-search-header-top">
        <the-fil-ariane :ariane="ariane" class="the-search-header-top-ariane" />
        <the-formatter class="the-search-header-top-formatter" />
      </div>
      <the-filters :filters="filters" />
    </div>
  </div>
</template>

<script>
import TheFormatter from '@/components/searchs/format/TheFormatter'
import TheFilters from '@/components/searchs/filters/TheFilters'
import TheFilAriane from '@/components/searchs/filAriane/TheFilAriane'
export default {
  name: 'TheSearch',
  components: { TheFilAriane, TheFilters, TheFormatter },
  props: {
    filters: {
      type: Array,
      required: true
    }
  },
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

<style lang="scss" scoped>
#the-search{
  margin-top: 27px;
  .the-search-header{
    display: flex;
    flex-direction: column;
    .the-search-header-top{
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 24px;
      flex-wrap: wrap;
      .the-search-header-top-ariane{
        margin-right: 10px;
      }
      .the-search-header-top-formatter{
        margin-bottom: 10px;
        @media screen and (max-width: 822px){
          margin-top: 20px;
          width: 100%;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
