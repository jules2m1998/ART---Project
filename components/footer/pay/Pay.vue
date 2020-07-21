<template>
  <div>
    <pay-list :title="pay.title" :list="pay.list" />
  </div>
</template>

<script>
import PayList from '~/components/footer/pay/PayList'
export default {
  name: 'Pay',
  components: { PayList },
  props: {
    pay: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
