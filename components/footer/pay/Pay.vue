<template>
  <div>
    <pay-list :title="pay.title" :list="pay.list" />
  </div>
</template>

<script>
import PayList from '~/components/footer/pay/PayList'
export default {
  name: 'Pay',
  props: {
    pay: {
      type: Object,
      required: true
    }
  },
  components: { PayList }
}
</script>

<style scoped>

</style>
