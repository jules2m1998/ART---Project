<template>
  <menu-list :elements="elements" :is-responsive="isResponsive" />
</template>

<script>
import MenuList from '~/components/menu/MenuList'
export default {
  name: 'TheMenu',
  components: { MenuList },
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
</style>
