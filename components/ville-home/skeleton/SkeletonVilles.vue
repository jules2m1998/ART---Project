<template>
  <div class="villes">
    <div class="description">
      <div class="skeleton skeleton-title" />
      <div class="skeleton skeleton-sub-title" style="width: 80%" />
      <div class="skeleton skeleton-sub-title" style="width: 30%" />
    </div>
    <skeleton-ville-list style="margin-bottom: 26px;" />
  </div>
</template>

<script>
import SkeletonVilleList from '@/components/ville-home/skeleton/SkeletonVilleList'
export default {
  name: 'SkeletonVilles',
  components: { SkeletonVilleList }
}
</script>

<style scoped>

</style>
