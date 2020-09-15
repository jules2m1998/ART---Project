<template>
  <div>
    <div class="skeleton skeleton-title" style="margin-top: 72px;" />
    <div class="skeleton skeleton-sub-title" />
    <skeleton-numero-urgent-list />
  </div>
</template>

<script>
import SkeletonNumeroUrgentList from '@/components/numero-urgent/skeleton/SkeletonNumeroUrgentList'
export default {
  name: 'SkeletonTheNumeroUrgent',
  components: { SkeletonNumeroUrgentList }
}
</script>

<style scoped>

</style>
