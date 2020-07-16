<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <top-footer />
  </v-app>
</template>

<script>
import TopFooter from '~/components/topFooter/TopFooter'
export default {
  components: { TopFooter },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
