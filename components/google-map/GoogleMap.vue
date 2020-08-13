<template>
  <div style="position: relative; width: 100%; height: 100%">
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
    /**
     * Indique à la map sur quel point se centrer
     */
    center: { lat: -3.350235, lng: 111.995865 },
    /**
     * Type de map
     */
    mapTypeId: 'terrain',
    /**
     * Les différentes marquers placé sur la map
     */
    markers: [
      { position: { lat: -0.48585, lng: 117.1466 } },
      { position: { lat: -6.9127778, lng: 107.6205556 } }
    ]
  })
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
