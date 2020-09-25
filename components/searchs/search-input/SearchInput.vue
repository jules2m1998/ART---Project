<template>
  <div id="search-input">
    <input type="text" placeholder="Rechercher..." class="search-input-input">
    <v-btn style="margin-right: 7px;" depressed class="search-input-btn">
      <v-icon>search</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'SearchInput'
}
</script>

<style lang="scss" scoped>
  #search-input{
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    .search-input-input{
      width: 100%;
      margin: 3px 7px;
      padding: 3px;
      border: 1px solid #E0E0E0;
      border-radius: 4px;
    }
  }
</style>
