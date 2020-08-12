<template>
  <div>
    <v-slide-group multiple show-arrows class="my-slide">
      <v-slide-item
        v-for="n in 25"
        :key="n"
      >
        <home-enterprise-item />
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
import HomeEnterpriseItem from '@/components/home-enterprise/HomeEnterpriseItem'
export default {
  name: 'HomeEnterpriseList',
  components: { HomeEnterpriseItem },
  data: () => ({
    model: null
  })
}
</script>

<style lang="scss" scoped>
</style>
