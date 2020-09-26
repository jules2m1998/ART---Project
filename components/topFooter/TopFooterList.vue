<template>
  <v-container class="d-flex flex-row justify-space-between" data-is-visible>
    <top-footer-item
      v-for="(item, key) in stats"
      :key="key"
      :ico="item.ico"
      :name="item.name"
      :number="item.number"
      :is-aniamte="isAnimate"
    />
  </v-container>
</template>

<script>
import TopFooterItem from '~/components/topFooter/TopFooterItem'
export default {
  name: 'TopFooterList',
  components: {
    TopFooterItem
  },
  props: {
    stats: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    isAnimate: false,
    _listerner: undefined
  }),
  mounted () {
    this._listerner = this.animateStats.bind(this)
    window.addEventListener('scroll', this._listerner)
  },
  methods: {
    /**
     * Determine si un element est visible ou non
     * @param element
     * @return {boolean|boolean}
     */
    isInViewport (element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    animateStats () {
      const element = document.querySelector('[data-is-visible]')
      if (this.isAnimate) {
        console.log('stop')
        window.removeEventListener('scroll', this._listerner)
      } else {
        this.isAnimate = this.isInViewport(element)
        console.log('go')
      }
      // console.log('suite')
    }
  }
}
</script>

<style scoped>
</style>
