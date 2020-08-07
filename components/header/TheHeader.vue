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
          <div v-if="current === null" class="btn-sign">
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
          <div v-else class="btn-sign">
            <v-menu offset-y>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  id="btn-connect"
                  small
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-avatar size="26px" class="mr-3">
                    <img :src="current.img" alt="Image du profile connecté'">
                  </v-avatar>
                  {{ current.firstname }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, key) in userMenu" :key="key">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      <nuxt-link :to="item.to" style="color: black">
                        {{ item.name }}
                      </nuxt-link>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
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
    dialog: false,
    userMenu: [
      {
        name: 'Profile',
        to: 'user/profile',
        icon: 'person'
      },
      {
        name: 'Administration',
        to: '',
        icon: 'settings'
      },
      {
        name: 'Deconnexion',
        to: '',
        icon: 'login'
      }
    ]
  }),
  computed: {
    current () {
      return this.$store.state.user.current
    }
  },
  watch: {
    current (newValue, oldValue) {
      console.log(newValue)
    }
  },
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
        #btnMembre, #btn-connect{
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
        #btn-connect{
          padding: 0 12px 0 0!important;
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
