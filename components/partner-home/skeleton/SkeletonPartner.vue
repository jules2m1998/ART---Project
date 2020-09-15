<template>
  <div class="partners">
    <div class="skeleton skeleton-title" style="margin-bottom: 16px;" />
    <div class="skeleton" style="height: 18px; border-radius: 18px; width: 40%; margin-bottom: 34px;" />
    <skeleton-partner-list style="margin-bottom: 34px;" />
    <skeleton-partner-list />
  </div>
</template>

<script>
import SkeletonPartnerList from '@/components/partner-home/skeleton/SkeletonPartnerList'
export default {
  name: 'SkeletonPartner',
  components: { SkeletonPartnerList }
}
</script>

<style scoped>
.partners{
  margin-bottom: 50px;
}
</style>
