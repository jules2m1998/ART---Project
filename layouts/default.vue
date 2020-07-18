<template>
  <v-app class="w-100">
    <v-main>
      <nuxt />
    </v-main>
    <top-footer :datas="datas" class="responsive" />
    <footer>
      <the-footer />
    </footer>
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
  @media screen and (max-width: 768px) {
    .responsive{
      display: none!important;
    }
  }
  .w-100{
    width: 100%;
  }
</style>
