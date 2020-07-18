<template>
  <a :href="link">
    <v-icon
      :id="'ico-' + id"
      class="social-ico stroke-transparent"
      :style="{ color: color}"
    >
      {{ ico }}
    </v-icon>
  </a>
</template>

<script>
export default {
  name: 'SocialItem',
  props: {
    link: {
      type: String,
      required: true
    },
    ico: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
  a{
    text-decoration: none;
    .social-ico{
      font-size: 35px;
      -webkit-text-stroke: 1px #fff;
      -webkit-text-fill-color: transparent;
      transition: 300ms ease;
      &:hover{
        color: unset;
        -webkit-text-fill-color: unset;
      }
    }
  }
</style>
