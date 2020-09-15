<template>
  <div class="partner-list">
    <div class="skeleton skeleton-sub-title" style="margin-bottom: 16px;width: 40%" />
    <div class="partner-list-content d-flex flex-row js-content">
      <skeleton-partner-item v-for="item in 4" :key="item" class="mr-6" />
    </div>
  </div>
</template>

<script>
import SkeletonPartnerItem from '@/components/partner-home/skeleton/SkeletonPartnerItem'
export default {
  name: 'SkeletonPartnerList',
  components: { SkeletonPartnerItem }
}
</script>

<style lang="scss" scoped>
.partner-list{
  &:first-child{
    margin-bottom: 30px;
  }
}
.js-content{
  height: auto;
  overflow: hidden;
}
</style>
