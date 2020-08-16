<template>
  <div>
    <div id="carousel" style="visibility: hidden">
      <home-enterprise-item v-for="item in 10" :key="item" />
    </div>
  </div>
</template>

<script>
import Carousel from '../../assets/js/slide'
import HomeEnterpriseItem from '@/components/home-enterprise/HomeEnterpriseItem'
export default {
  name: 'HomeEnterpriseList',
  components: { HomeEnterpriseItem },
  mounted () {
    // eslint-disable-next-line no-new
    new Carousel(document.querySelector('#carousel'))
  }
}
</script>

<style lang="scss" scoped>
</style>
