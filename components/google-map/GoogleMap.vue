<template>
  <div>
    <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="5">
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: 'GoogleMap',
  data: () => ({
    center: { lat: -3.350235, lng: 111.995865 },
    mapTypeId: 'terrain',
    markers: [
      { position: { lat: -0.48585, lng: 117.1466 } },
      { position: { lat: -6.9127778, lng: 107.6205556 } }
    ]
  })
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 100vh;
  width: 100%;
}
</style>
