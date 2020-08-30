<template>
  <v-btn
    :to="item.to"
    small
    rounded
    style="margin-right: 16px; margin-bottom: 16px;"
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
  font-family: "Open Sans",sans-serif;
  font-size: 13px;
  font-weight: bold;
  &:before {
    background-color: unset!important;
  }
}
.v-btn--outlined {
  border: 2px solid currentColor;
}
</style>
