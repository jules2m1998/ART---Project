<template>
  <div class="ville-item">
    <div class="ville-item--img">
      <v-btn color="#333333">
        Douala
      </v-btn>
    </div>
    <div class="ville-item--bottom">
      <div class="stats">
        <div class="icon">
          <v-icon size="14">
            domain
          </v-icon>
        </div>
        <div class="value">
          1.6K
        </div>
      </div>
      <div class="stats">
        <div class="icon">
          <v-icon size="14">
            person
          </v-icon>
        </div>
        <div class="value">
          1.21M
        </div>
      </div>
    </div>
    <div class="description">
      <p>Ville populaire reconnue comme capitale économique du pays</p>
      <p>Ville populaire reconnue comme capitale économique du pays</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VilleItem'
}
</script>

<style lang="scss" scoped>
  $background: "/header/home_background.jpg";
  .ville-item{
    transition: width 0.5s;
    &.ville--actived{
      .ville-item--img .v-btn{
        color: $primary;
        font-weight: bold;
        background: $yellow!important;
        border: none;
      }
      .description{
         p{
          opacity: 1;
        }
      }
    }
    .ville-item--img{
      box-shadow: 0 0 12px 1px #0000004f;
      background: url($background) center center no-repeat;
      background-size: cover;
      height: 164px;
      width: 100%;
      display: flex;
      align-items: flex-end;
      border-radius: 5px;
      .v-btn{
        margin: 10px;
        color: $yellow;
        text-shadow: 1px 1px 1px black;
        font-size: 12px;
        font-family: 'Product Sans Medium Regular',sans-serif;
        transition: all .2s ease-in;
      }
    }
    .ville-item--bottom, .stats{
      display: flex;
      flex-direction: row;
    }
    .ville-item--bottom{
      margin-top: 5px;
      padding: 5px 0;
      .stats{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        &:first-child{
          margin-right: 10px;
        }
        font-size: 12px;
        font-family: 'Product Sans Medium Regular',sans-serif;
        .icon{
          margin-right: 3px;
          padding-bottom: 3px;
        }
      }
    }
    .description{
      p{
        font-size: 12px;
        color: #777676;
        margin-bottom: 0!important;
        font-style: italic;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 0;
        transition: opacity 0.5s;
      }
    }
  }
</style>
