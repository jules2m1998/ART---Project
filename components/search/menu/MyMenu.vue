<template>
  <div style="margin-bottom: 4px; margin-left: 6px">
    <menu-list v-model="value" />
  </div>
</template>
<script>
import MenuList from '@/components/search/menu/MenuList'
export default {
  name: 'MyMenu',
  components: { MenuList },
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
