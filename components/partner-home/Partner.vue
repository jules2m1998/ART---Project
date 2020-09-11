<template>
  <div class="partners">
    <h2 class="my-title">
      Ils nous font confiance
    </h2>
    <h3>Des partenaires naturels et exclusifs</h3>
    <partner-list style="margin-bottom: 34px;" />
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
  .my-title{
    margin-bottom: 16px;
  }
  h3{
    font-size: 31px;
    font-family: "Roboto",sans-serif;
    line-height: 18px;
    color: #333333;
    margin-bottom: 34px;
    font-weight: 100;
  }
}

</style>
