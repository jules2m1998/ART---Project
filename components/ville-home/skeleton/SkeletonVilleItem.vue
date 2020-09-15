<template>
  <div class="ville-item">
    <div class="img skeleton" />
    <div class="stats">
      <div class="stats-item skeleton" />
      <div class="stats-item skeleton" />
    </div>
    <div class="descr mt-4">
      <div class="skeleton skeleton-sub-title" style="width: 100%" />
      <div class="skeleton skeleton-sub-title" style="width: 30%" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonVilleItem'
}
</script>

<style lang="scss" scoped>
  .ville-item{
    width: 250px;
    .img{
      height: 164px;
      border-radius: 5px;
    }
    .stats{
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      .stats-item{
        width: 38px;
        height: 18px;
        margin-right: 10px;
        border-radius: 5px;
      }
    }
    .descr{
      display: none;
    }
    &:first-child{
      .descr{
        display: block;
      }
    }
  }
</style>
