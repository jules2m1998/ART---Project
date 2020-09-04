<template>
  <div class="urgents">
    <h1 class="home-title editable">
      {{ value.content.title }}
    </h1>
    <p class="my-msg editable">
      {{ value.content['sub-title'] }}
    </p>
    <numero-urgent-list v-model="value.content.numbers" />
  </div>
</template>

<script>
import NumeroUrgentList from '@/components/numero-urgent/NumeroUrgentList'
export default {
  name: 'TheNumeroUrgent',
  components: { NumeroUrgentList },
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
  .urgents{
    margin-top: 72px;
    .my-msg{
      font-family: 'Open sans', sans-serif;
      font-size: 13px;
      color: #333333;
    }
  }
</style>
