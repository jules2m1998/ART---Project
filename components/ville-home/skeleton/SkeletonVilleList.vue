<template>
  <div class="ville-list">
    <div class="content">
      <skeleton-ville-item v-for="index in 10" :key="index" class="js-ville--item" />
    </div>
  </div>
</template>

<script>
import SkeletonVilleItem from '@/components/ville-home/skeleton/SkeletonVilleItem'
export default {
  name: 'SkeletonVilleList',
  components: { SkeletonVilleItem }
}
</script>

<style lang="scss" scoped>
.ville-list {
  overflow: hidden;
  width: 100%;
  .content{
    width: 500000px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .js-ville--item{
      width: 250px;
      margin: 0 5px 0 0;
    }
    .ville-item{
      &:first-child{
        width: 450px;
      }
    }
  }
}
</style>
