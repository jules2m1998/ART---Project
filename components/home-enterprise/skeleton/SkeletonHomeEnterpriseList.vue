<template>
  <div id="my-carousel" style="visibility: hidden">
    <skeleton-home-enterprise-item v-for="i in 15" :key="i" />
  </div>
</template>

<script>
import Carousel from 'assets/js/slide'
import SkeletonHomeEnterpriseItem from '@/components/home-enterprise/skeleton/SkeletonHomeEnterpriseItem'
export default {
  name: 'SkeletonHomeEnterpriseList',
  components: { SkeletonHomeEnterpriseItem },
  mounted () {
    // eslint-disable-next-line no-new
    new Carousel(document.querySelector('#my-carousel'))
  }
}
</script>

<style scoped>

</style>
