<template>
  <v-btn
    :to="item.to"
    small
    rounded
    class="ma-2"
    outlined
    :color="item.color"
  >
    <v-icon left>
      {{ item.ico }}
    </v-icon>
    {{ item.text }}
  </v-btn>
</template>
<script>
export default {
  name: 'CategoryItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn{
  text-transform: lowercase;
  &:before {
    background-color: unset!important;
  }
}
.v-btn--outlined {
  border: 2px solid currentColor;
}
</style>
