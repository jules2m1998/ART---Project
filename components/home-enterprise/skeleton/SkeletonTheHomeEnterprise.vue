<template>
  <div class="desc-enter">
    <div class="description">
      <div class="skeleton skeleton-title" />
      <div class="d-flex flex-column">
        <div class="skeleton skeleton-sub-title" style="width: 70%" />
        <div class="skeleton skeleton-sub-title" style="width: 80%" />
        <div class="skeleton skeleton-sub-title" style="width: 30%" />
        <div class="skeleton" style="margin-top: 20px; width: 160px; height: 38px; border-radius: 4px" />
      </div>
    </div>
    <skeleton-home-enterprise-list />
  </div>
</template>

<script>
import SkeletonHomeEnterpriseList from '@/components/home-enterprise/skeleton/SkeletonHomeEnterpriseList'
export default {
  name: 'SkeletonTheHomeEnterprise',
  components: { SkeletonHomeEnterpriseList }
}
</script>

<style lang="scss" scoped>
  .description{
    display: flex;
    flex-direction: column;
    width: 338px;
    align-self: flex-start;
  }
  .desc-enter{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
