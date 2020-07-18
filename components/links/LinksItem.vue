<template>
  <ul>
    <li v-for="(item, key) in links" :key="key">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'LinksItem',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  ul{
    li{
      &::before{
        content: '\2022';
        color: $yellow;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: 1em;
      }
    }
  }
</style>
