<template>
  <div class="search-bar">
    <div class="input">
      <v-icon>
        search
      </v-icon>
      <label>
        <input type="text" placeholder="Qui? (Ex.ART, Orange, Camptel, MTN, Nextel)">
      </label>
    </div>
    <div class="input">
      <label class="ligne">
        <input type="text" placeholder="Où? (Ex. Yaoundé, Douala)">
      </label>
      <v-icon>
        pin_drop
      </v-icon>
    </div>
    <div class="my-btn">
      <button>Rechercher</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style lang="scss" scoped>
  .search-bar{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 0.4fr;
    align-items: stretch;
    height: 38px;
    background: white;
    border-radius: 6px;
    .input{
      label{
        display: flex;
        height: 100%;
        align-items: center;
      }
      &:first-child{
        display: grid;
        grid-template-columns: 50px auto;
        padding-right: 7px;
      }
      &:nth-child(2){
        display: grid;
        grid-template-columns: auto 50px;
        padding-left: 7px;
      }
      input{
        width: 100%;
      }
      height: 100%;
    }
    .my-btn{
      button{
        font-size: 13px;
        font-weight: 700;
        width: 100%;
        height: 100%;
        color: $primary;
        border-radius: 0 6px 6px 0;
        background: $yellow;
        text-transform: uppercase!important;
      }
    }
  }
  .ligne{
    position: relative;
    &:after{
      content: '';
      position: absolute;
      left: -7px;
      width: 1px;
      height: 80%;
      background: #8f8f8f;
      margin: auto;
    }
  }
</style>
