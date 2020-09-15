<template>
  <div style="display: flex; flex-direction: row; flex-wrap: wrap">
    <skeleton-numero-urgent-item v-for="i in 4" :key="i" />
  </div>
</template>

<script>
import SkeletonNumeroUrgentItem from '@/components/numero-urgent/skeleton/SkeletonNumeroUrgentItem'
export default {
  name: 'SkeletonNumeroUrgentList',
  components: { SkeletonNumeroUrgentItem }
}
</script>

<style scoped>

</style>
