<template>
  <div class="d-flex flex-wrap flex-row">
    <numero-urgent-item v-for="(item, key) in phones" :key="key" :item="item" />
  </div>
</template>
<script>
import NumeroUrgentItem from '@/components/numero-urgent/NumeroUrgentItem'
export default {
  name: 'NumeroUrgentList',
  components: { NumeroUrgentItem },
  props: {
    phones: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
