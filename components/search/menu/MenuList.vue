<template>
  <div class="menu-list">
    <menu-item v-for="(item, key) in menus" :key="key" :item="item" />
  </div>
</template>

<script>
import MenuItem from '@/components/search/menu/MenuItem'
export default {
  name: 'MenuList',
  components: { MenuItem },
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-list{
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
