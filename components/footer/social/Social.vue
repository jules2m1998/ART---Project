<template>
  <div id="social-links">
    <social-list :links="links" />
  </div>
</template>

<script>
import SocialList from '~/components/footer/social/SocialList'
export default {
  name: 'Social',
  components: { SocialList },
  data: () => ({
    links: [
      {
        ico: 'fab fa-twitter',
        link: '#',
        color: '#1DA1F2'
      },
      {
        ico: 'fab fa-facebook-f',
        link: '#',
        color: '#4267B2'
      },
      {
        ico: 'fab fa-linkedin-in',
        link: '#',
        color: '#1DA1F2'
      },
      {
        ico: 'fab fa-youtube',
        link: '#',
        color: '#FF0000'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  #social-links{
    width: 100%;
  }
</style>
