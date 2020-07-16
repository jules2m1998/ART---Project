<template>
  <v-container id="top--footer" fluid class="bg-img">
    <div class="blue-bg" />
    <top-footer-list />
  </v-container>
</template>

<script>
import TopFooterList from '~/components/topFooter/TopFooterList'
export default {
  name: 'TopFooter',
  components: {
    TopFooterList
  }
}
</script>

<style lang="scss" scoped>
  *{
    z-index: 10;
  }
  .bg-img{
    background: url("~assets/topFooter/stat-bg.png");
  }
  #top--footer{
    position: relative;
    .blue-bg{
      width: 100%;
      height: 100%;
      background: #0A138D;
      opacity: .78;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
     }
  }
</style>
