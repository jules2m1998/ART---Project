<template>
  <header
    id="header"
    class="pt-5 bg--cover"
  >
    <div id="carrousel">
      <carrousel :slides="slides" />
    </div>
    <v-container id="logo__menu" class="d-flex flex-column">
      <div class="d-flex flex-row justify-space-between">
        <div id="logo">
          <img src="/logo-white.png">
        </div>
        <div id="menu" class="d-flex flex-row">
          dgedgh
        </div>
      </div>
    </v-container>
  </header>
</template>

<script>
import Carrousel from '~/components/header/carrousel/Carrousel'
export default {
  name: 'TheHeader',
  components: { Carrousel },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    current: 0
  })
}
</script>

<style lang="scss" scoped>
  *{
    z-index: 2;
  }
  header{
    height: 640px;
    position: relative;
    overflow: hidden;
    #carrousel{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
    #logo__menu{
      #header--text{
        margin: 54px auto 52px;
        font-size: 2.2rem;
        max-width: 720px;
        font-weight: 100 !important;
        width: 100%;
        text-align: center;
        color: white;
        position: relative;
        .before--blue{
          &::after{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: -10;
            background: rgba(2, 11, 137, .48);
          }
          .item{
            color: white;
            z-index: 12;
            font-size: 20px;
          }
        }
      }
    }
  }
  .bg--cover, .bg--cover2{
    background-size: cover!important;
    transition: background 2s ease-in;
  }
  .bg--cover2{
    background: url('/header/home_background.jpg') no-repeat center;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity 1s, transform 1s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
    transform: translate(20px);
  }
</style>
