<template>
  <div style="margin-bottom: 4px; margin-left: 6px">
    <menu-list :menus="menus" :is-responsive="isResponsive" />
  </div>
</template>
<script>
import MenuList from '@/components/search/menu/MenuList'
export default {
  name: 'MyMenu',
  components: { MenuList },
  props: {
    menus: {
      type: Array,
      required: true
    },
    isResponsive: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
