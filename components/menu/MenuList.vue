<template>
  <div :class="{ responsive: isResponsive}">
    <menu-item
      v-for="(item, key) in elements"
      :key="key"
      :element="item"
      :is-responsive="isResponsive"
      :my-key="key"
    />
  </div>
</template>

<script>
import MenuItem from '~/components/menu/MenuItem'
export default {
  name: 'MenuList',
  components: { MenuItem },
  props: {
    elements: {
      type: Array,
      required: true
    },
    isResponsive: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .responsive{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
