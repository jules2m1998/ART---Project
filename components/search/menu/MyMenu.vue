<template>
  <div style="margin-bottom: 10px; margin-left: 6px">
    <menu-list :menus="menus" />
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
    }
  }
}
</script>

<style scoped>

</style>
