<template>
  <div>
    <div id="my-title" class="mb-1">
      {{ links.title }}
    </div>
    <my-link-list :links="links.list" />
  </div>
</template>

<script>
import MyLinkList from '~/components/footer/my-links/MyLinkList'
export default {
  name: 'MyLink',
  components: { MyLinkList },
  props: {
    links: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  #my-title{
    font-weight: bold;
    font-size: .875rem;
  }
</style>
