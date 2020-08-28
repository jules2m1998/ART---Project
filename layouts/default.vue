<template>
  <v-app class="w-100">
    <v-main>
      <nuxt />
    </v-main>
    <template v-if="!$router.currentRoute.fullPath.includes('map')">
      <top-footer :datas="datas" class="responsive" />
      <footer>
        <the-footer />
      </footer>
    </template>
  </v-app>
</template>

<script>
import TopFooter from '~/components/topFooter/TopFooter'
import TheFooter from '~/components/footer/TheFooter'
export default {
  components: { TopFooter, TheFooter },
  data () {
    return {
      datas: [
        {
          ico: 'business',
          name: 'Companies',
          number: 10
        },
        {
          ico: 'person',
          name: 'Individuals',
          number: 653
        },
        {
          ico: 'category',
          name: 'Categories',
          number: 75
        },
        {
          ico: 'gps_fixed',
          name: 'Rentals',
          number: 41
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');
  @media screen and (max-width: 768px) {
    .responsive{
      display: none!important;
    }
  }
  .w-100{
    width: 100%;
  }
</style>
