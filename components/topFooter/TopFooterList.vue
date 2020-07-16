<template>
  <v-container>
    <top-footer-item v-for="(item, key) in stats" :key="key" :ico="item.ico" :name="item.name" :number="item.number" />
  </v-container>
</template>

<script>
import TopFooterItem from '~/components/topFooter/TopFooterItem'
export default {
  name: 'TopFooterList',
  components: {
    TopFooterItem
  },
  data: () => ({
    stats: [
      {
        ico: 'business',
        name: 'Companies',
        number: 10
      }
    ]
  })
}
</script>

<style scoped>
</style>
