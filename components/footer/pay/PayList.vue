<template>
  <div>
    <div id="my-title">
      {{ title }}
    </div>
    <div id="support">
      <pay-item v-for="(item, key) in list" :key="key" :item="item" />
    </div>
  </div>
</template>

<script>
import PayItem from '~/components/footer/pay/PayItem'
export default {
  name: 'PayList',
  components: { PayItem },
  props: {
    list: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  #support{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
