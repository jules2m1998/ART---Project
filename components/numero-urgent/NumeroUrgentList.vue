<template>
  <div class="numero-urgent-list">
    <numero-urgent-item v-for="(item, key) in value" :key="key" :item="item" />
  </div>
</template>
<script>
import NumeroUrgentItem from '@/components/numero-urgent/NumeroUrgentItem'
export default {
  name: 'NumeroUrgentList',
  components: { NumeroUrgentItem },
  props: {
    value: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.numero-urgent-list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 647px) {
    justify-content: center;
  }
}
</style>
