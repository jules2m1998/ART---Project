<template>
  <v-container class="font-sans" fluid>
    <v-container>
      <div id="profile">
        <div id="menu">
          <the-menu :elements="menus" :is-responsive="isResponsive" />
        </div>
        <div id="routes">
          <nuxt-child />
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import TheMenu from '~/components/menu/TheMenu'
export default {
  name: 'Profile',
  components: { TheMenu },
  data: () => ({
    menus: [
      {
        to: '/user/profile',
        ico: 'person',
        name: 'Profil'
      },
      {
        to: '/user/facture',
        ico: 'description',
        name: 'Facture'
      },
      {
        to: '/user/favoris',
        ico: 'favorite_border',
        name: 'Favoris'
      },
      {
        to: '/user/avis',
        ico: 'grade',
        name: 'Avis'
      },
      {
        to: '/user/entreprises',
        ico: 'business',
        name: 'Entreprises'
      }
    ],
    isResponsive: false,
    t: null
  }),
  mounted () {
    const media = window.matchMedia('(max-width: 900px)')
    const screenTest = (e) => {
      this.isResponsive = e.matches
    }
    media.addEventListener('change', screenTest)
    this.isResponsive = document.body.offsetWidth < 900
  },
  methods: {
    responsive (e) {
      this.isResponsive = e.matches
    }
  }
}
</script>

<style lang="scss" scoped>
  #profile{
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 24px;
    @media screen and (max-width: 900px){
      grid-template-columns: 1fr;
      grid-gap: 24px;
    }
  }
  #menu{
    width: 100%;
    overflow: auto;
  }
</style>
