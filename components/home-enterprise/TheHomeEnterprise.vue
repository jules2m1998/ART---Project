<template>
  <div class="desc-enter">
    <div class="description">
      <h2 class="my-title">
        Entreprise populaires à proximité
      </h2>
      <div class="d-flex flex-column">
        <p>Retrouvez toutes les entreprises et structures administratives proche de vous en un clic</p>
        <v-btn small width="160" height="38" color="primary" style="margin-top: 20px;">
          Plus de resultat
        </v-btn>
      </div>
    </div>
    <home-enterprise-list class="the-enterprise-list" />
  </div>
</template>
<script>
import HomeEnterpriseList from '@/components/home-enterprise/HomeEnterpriseList'
export default {
  name: 'TheHomeEnterprise',
  components: { HomeEnterpriseList }
}
</script>

<style lang="scss" scoped>
.description{
  display: flex;
  flex-direction: column;
  width: 338px;
  align-self: flex-start;
  .my-title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 26px;
  }
  p{
    font-family: "roboto",sans-serif;
    font-size: 13px;
    margin-bottom: 12px;
    font-weight: 300;
    color: #333333;
  }
}
.desc-enter{
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 539px){
    justify-content: center;
    .description{
      display: none;
    }
    .the-enterprise-list{
      display: flex;
      justify-content: center;
    }
  }
}

</style>
