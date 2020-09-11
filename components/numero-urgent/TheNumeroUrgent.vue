<template>
  <div class="urgents">
    <h2 class="home-title">
      Les numéros d'uregences
    </h2>
    <p class="my-msg">
      Le numéros d'appels d'urgence permettent de joindre gratuitement les secours 24H/24
    </p>
    <numero-urgent-list :phones="phones" />
  </div>
</template>

<script>
import NumeroUrgentList from '@/components/numero-urgent/NumeroUrgentList'
export default {
  name: 'TheNumeroUrgent',
  components: { NumeroUrgentList },
  props: {
    phones: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .urgents{
    margin-top: 72px;
    .my-msg{
      font-family: 'Open sans', sans-serif;
      font-size: 13px;
      color: #333333;
    }
  }
</style>
