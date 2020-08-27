<template>
  <div class="partners">
    <partner-list />
    <partner-list />
  </div>
</template>

<script>
import PartnerList from '~/components/partner-home/PartnerList'
export default {
  name: 'Partner',
  components: { PartnerList }
}
</script>

<style lang="scss" scoped>
.partners{
  margin-bottom: 50px;
}

</style>
