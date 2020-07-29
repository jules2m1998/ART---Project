<template>
  <ul>
    <li v-for="(item, key) in links" :key="key">
      <a :href="item.link">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MyLinkList',
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
    list-style: none;
    li{
      &::before{
        content: "\2022";
        color: $yellow;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1.5em;
      }
      a{
        font-size: 13px;
        color: white!important;
      }
    }
  }
</style>
