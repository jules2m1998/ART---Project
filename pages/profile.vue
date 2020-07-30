<template>
  <v-container class="font-sans" fluid>
    <v-container>
      <div id="profile">
        <div id="menu">
          <the-menu :elements="menus" :is-responsive="isResponsive" />
        </div>
        <div id="routes">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet corporis ea eaque earum eveniet exercitationem facere facilis fugit, ipsa nihil non odit, optio quibusdam sapiente sequi ut veniam.
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import TheMenu from '~/components/menu/TheMenu'
export default {
  name: 'profile',
  components: { TheMenu },
  data: () => ({
    menus: [
      {
        to: '#',
        ico: 'person',
        name: 'Profil'
      },
      {
        to: '#',
        ico: 'description',
        name: 'Facture'
      },
      {
        to: '#',
        ico: 'favorite_border',
        name: 'Favoris'
      },
      {
        to: '#',
        ico: 'grade',
        name: 'Avis'
      },
      {
        to: '#',
        ico: 'business',
        name: 'Entreprises'
      }
    ],
    isResponsive: false,
    t: null
  }),
  methods: {
    responsive (e) {
      this.isResponsive = e.matches
    }
  },
  mounted () {
    const media = window.matchMedia('(max-width: 600px)')
    const screenTest = (e) => {
      this.isResponsive = e.matches
    }
    media.addEventListener('change', screenTest)
    this.isResponsive = document.body.offsetWidth < 600
  }
}
</script>

<style lang="scss" scoped>
  #profile{
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 24px;
    @media screen and (max-width: 600px){
      grid-template-columns: 1fr;
      grid-gap: 24px;
    }
  }
</style>
