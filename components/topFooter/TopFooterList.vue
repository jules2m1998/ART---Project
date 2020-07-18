<template>
  <v-container class="d-flex flex-row justify-space-between">
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
  props: {
    stats: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
