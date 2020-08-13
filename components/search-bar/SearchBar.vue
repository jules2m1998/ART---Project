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
    <div class="ligne" />
    <div class="input">
      <v-icon>
        pin_drop
      </v-icon>
      <label>
        <input type="text" placeholder="Où? (Ex. Yaoundé, Douala)">
      </label>
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
    max-width: 700px;
    display: grid;
    grid-template-columns: 1fr 1px 1fr 140px;
    align-items: stretch;
    height: 49px;
    background: white;
    border-radius: 6px;
    @media screen and (max-width: 440px){
      grid-template-columns: 1fr;
      height: auto;
      background: unset;
      border-radius: unset;
    }
    .input{
      @media screen and (max-width: 440px){
        height: 49px;
        background: white;
        border-radius: 6px;
        margin-bottom: 10px;
      }
      label{
        display: flex;
        height: 100%;
        align-items: center;
        input{
          &::placeholder {
            font-size: 12px;
            text-overflow: ellipsis !important;
          }
          [placeholder]{
             text-overflow:ellipsis;
           }
          &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            text-overflow:ellipsis;
          }
          &::-moz-placeholder { /* Firefox 19+ */
            text-overflow:ellipsis;
          }
          &:-ms-input-placeholder { /* IE 10+ */
            text-overflow:ellipsis;
          }
          &:-moz-placeholder { /* Firefox 18- */
            text-overflow:ellipsis;
          }
        }
      }
      display: grid;
      grid-template-columns: 50px auto;
      padding-right: 7px;
      input{
        width: 100%;
      }
      height: 100%;
    }
    .ligne{
      width: 1px;
      height: 80%;
      background: #ccc;
      margin: auto;
    }
    .my-btn{
      button{
        font-size: 12px;
        font-weight: 700;
        width: 100%;
        height: 100%;
        padding: 5px;
        color: $primary;
        border-radius: 0 6px 6px 0;
        background: $yellow;
        text-transform: uppercase!important;
        @media screen and (max-width: 440px){
          height: 49px;
          border-radius: 6px;
        }
      }
    }
  }
</style>
