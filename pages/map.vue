<template>
  <div class="map">
    <transition v-if="isList" name="translate">
      <div class="list">
        <v-btn icon class="closebtn" @click="isList = false">
          <v-icon>close</v-icon>
        </v-btn>
      </div>
    </transition>
    <div v-else class="open-list">
      <v-btn icon class="closebtn" @click="isList = true">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
    <google-map />
  </div>
</template>

<script>
import GoogleMap from '@/components/google-map/GoogleMap'
export default {
  name: 'Map',
  components: { GoogleMap },
  data: () => ({
    isList: true
  })
}
</script>

<style lang="scss" scoped>
  .map{
    position: relative;
    .list{
      position: absolute;
      padding: 10px;
      top: 0;
      left: 0;
      bottom: 0;
      width: 290px;
      background: white;
      z-index: 1;
      .closebtn{
        float: right;
      }
    }
    .open-list{
      position: absolute;
      padding: 4px;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background: white;
    }
  }
  .translate-leave-active {
    animation: translateRight 0.2s;
  }
  .translate-enter-active{
    animation: translateLeft 0.2s;
  }
  @keyframes translateRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  @keyframes translateLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
