<template>
  <div class="partners">
    <partner-list v-model="value.content.list[0]" />
    <partner-list v-model="value.content.list[1]" />
  </div>
</template>

<script>
import PartnerList from '~/components/partner-home/PartnerList'
export default {
  name: 'Partner',
  components: { PartnerList },
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.partners{
  margin-bottom: 50px;
}

</style>
