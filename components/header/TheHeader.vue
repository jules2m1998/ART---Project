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
          <img src="/logo-white.png" alt="logo de l'annuaire universel du cameroun">
        </div>
        <div id="btn-lang" class="d-flex flex-row">
          <div class="btn-sign">
            <template>
              <v-dialog v-model="dialog" persistent max-width="550px" style="overflow-y: hidden">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    id="btnMembre"
                    small
                    v-bind="attrs"
                    v-on="on"
                    @click="removeOverflow"
                  >
                    <v-icon>person</v-icon>
                    Espace membre
                  </v-btn>
                </template>
                <default-form v-model="dialog" type="signin" />
              </v-dialog>
            </template>
          </div>
        </div>
      </div>
    </v-container>
  </header>
</template>

<script>
import Carrousel from '~/components/header/carrousel/Carrousel'
import DefaultForm from '~/components/user/utils/DefaultForm'

export default {
  name: 'TheHeader',
  components: { DefaultForm, Carrousel },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    removeOverflow () {
      document.documentElement.style.overflowY = 'hidden'
    }
  }
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      #btn-lang{
        #btnMembre{
          text-transform: none;
          background: $primary;
          color: $yellow;
          border: 1px solid $yellow;
          border-radius: 12px;
          font-size: 10px;
          box-shadow: 0 0 8px 0 #f5c51142;
          i{
            font-size: 1.1rem;
            margin-right: 5px;
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
