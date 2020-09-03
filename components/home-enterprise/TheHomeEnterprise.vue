<template>
  <div class="desc-enter">
    <div class="description">
      <h1 class="my-title">
        {{ value.content.title }}
      </h1>
      <div class="d-flex flex-column">
        <p>{{ value.content.description }}</p>
        <v-btn small width="160" height="38" color="primary" style="margin-top: 20px;">
          Plus de resultat
        </v-btn>
      </div>
    </div>
    <home-enterprise-list v-model="value.content.entreprises" />
  </div>
</template>
<script>
import HomeEnterpriseList from '@/components/home-enterprise/HomeEnterpriseList'
export default {
  name: 'TheHomeEnterprise',
  components: { HomeEnterpriseList },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  mounted () {
  }
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
}

</style>
