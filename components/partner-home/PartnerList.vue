<template>
  <div class="partner-list">
    <h2 class="partner-list-title" @click="clickBtn">
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
        <v-icon color="white" size="15">
          {{ isVisible ? 'remove' : 'add' }}
        </v-icon>
      </v-btn> Avec les opérateurs concesseionnaires
    </h2>
    <div class="partner-list-content d-flex flex-row js-content">
      <partner-item v-for="iten in 4" :key="iten" class="mr-6" />
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
    isVisible: true
  }),
  methods: {
    /**
     * Affiche et masque une liste de partenaires
     * @param {MouseEvent} e
     */
    tooglePartner (e) {
      e.stopPropagation()
      const parts = e.path[4].querySelector('.js-content')
      console.log(parts)
      parts.classList.toggle('hide')
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
  }
  .js-content{
    height: auto;
    overflow: hidden;
    max-height: 120px;
    opacity: 1;
    transition: all .5s ease-out;
  }
  .hide{
    max-height: 0;
    opacity: 0;
  }
</style>
