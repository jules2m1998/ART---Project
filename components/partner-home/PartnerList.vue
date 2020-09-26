<template>
  <div class="partner-list">
    <h2 class="partner-list-title" data-partner-toogle @click="clickBtn">
      <v-btn
        id="js-btn"
        class="mr-1"
        fab
        color="#6e6e6e"
        width="15"
        height="15"
        x-small
        depressed
        @click="tooglePartner"
      >
        <v-icon color="white" size="15" @click="e => { e.preventDefault(); e.stopPropagation()}">
          {{ isVisible ? 'remove' : 'add' }}
        </v-icon>
      </v-btn> Avec les opérateurs concesseionnaires
    </h2>
    <div class="partner-list-content js-content" data-show>
      <partner-item v-for="item in 4" :key="item" class="mr-6" />
    </div>
  </div>
</template>

<script>
import PartnerItem from '~/components/partner-home/PartnerItem'
export default {
  name: 'PartnerList',
  components: { PartnerItem },
  data: () => ({
    /**
     * @type {boolean}
     */
    isVisible: true,
    h: 0
  }),
  methods: {
    /**
     * Affiche et masque une liste de partenaires
     * @param {MouseEvent} e
     */
    tooglePartner (e) {
      e.stopPropagation()
      console.log(e.target)
      const element = e.target.parentNode.parentNode
      // eslint-disable-next-line no-undef
      const tweenLite = TweenLite
      const child = element.querySelector('[data-show]')
      this.h = child.getBoundingClientRect().height !== 0 ? child.getBoundingClientRect().height : this.h
      const isHide = child.classList.toggle('partners-hide')
      this.isVisible = !isHide
      if (isHide) {
        tweenLite.fromTo(child, 0.4, { height: this.h, opacity: 1 }, { height: 0, opacity: 0 })
      } else {
        tweenLite.fromTo(child, 0.4, { height: 0, opacity: 0 }, { height: this.h, opacity: 1 })
        setTimeout(() => {
          child.style.height = 'auto'
        }, 600)
      }
    },
    /**
     * @param {MouseEvent} e
     */
    clickBtn (e) {
      e.stopPropagation()
      const elt = e.target.querySelector('#js-btn')
      elt.click()
    }
  }
}
</script>

<style lang="scss" scoped>
  .partner-list{
    &:first-child{
      margin-bottom: 30px;
    }
    .partner-list-title{
      font-size: 12px;
      color: #6e6e6e;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .partner-list-content{
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: 452px) {
        justify-content: center;
      }
    }
  }
  .js-content{
    height: auto;
    overflow: hidden;
  }
</style>
