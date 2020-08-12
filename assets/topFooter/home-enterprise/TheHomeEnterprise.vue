<template>
  <div>
    <h1 class="home-title mb-5">
      Les entreprises à proximité de vous
    </h1>
    <home-enterprise-list />
  </div>
</template>
<script>
import HomeEnterpriseList from 'assets/topFooter/home-enterprise/HomeEnterpriseList'
export default {
  name: 'TheHomeEnterprise',
  components: { HomeEnterpriseList }
}
</script>

<style scoped>

</style>
