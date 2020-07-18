<template>
  <div id="social">
    <social-item
      v-for="(item, key) in links"
      :id="key"
      :key="key"
      :link="item.link"
      :ico="item.ico"
      :color="item.color"
    />
  </div>
</template>

<script>
import SocialItem from '~/components/footer/social/SocialItem'
export default {
  name: 'SocialList',
  components: { SocialItem },
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  #social{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 169px;
  }
</style>
