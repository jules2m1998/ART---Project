<template>
  <div class="villes">
    <div class="description">
      <h1 class="home--title">
        {{ value.content.title }}
      </h1>
      <p>{{ value.content.description }}</p>
    </div>
    <villes-list v-model="value.content.villes" style="margin-bottom: 26px;" />
  </div>
</template>

<script>
import VillesList from '~/components/ville-home/VillesList'
export default {
  name: 'Villes',
  components: { VillesList },
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.villes{
  .description{
    margin-bottom: 26px;
    .home--title{
      font-size: 16px;
      margin-bottom: 16px;
    }
    p{
      font-size: 13px;
      font-family: 'roboto', sans-serif;
      font-weight: 300;
      color: #333333;
    }
  }
}

</style>
