<template>
  <div class="villes">
    <div class="description">
      <h2 class="home--title">
        Villes populaires
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur dolores ea explicabo facilis labore odio? Aperiam consequatur ea earum eos excepturi minima quod ratione ullam veritatis vitae. Ex, velit!</p>
    </div>
    <villes-list style="margin-bottom: 26px;" />
  </div>
</template>

<script>
import VillesList from '~/components/ville-home/VillesList'
export default {
  name: 'Villes',
  components: { VillesList }
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
