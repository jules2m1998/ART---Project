<template>
  <div class="partner-list">
    <h2 class="partner-list-title">
      <v-btn
        class="mr-1"
        fab
        color="#6e6e6e"
        width="15"
        height="15"
        x-small
        @click="tooglePartner"
      >
        <v-icon color="white" size="15">
          {{ toogle ? 'remove' : 'add' }}
        </v-icon>
      </v-btn> Avec les opérateurs concesseionnaires
    </h2>
    <div class="partner-list-content d-flex flex-row js-content show">
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
    toogle: true
  }),
  methods: {
    /**
     * Affiche et masque une liste de partenaires
     * @param {MouseEvent} e
     */
    tooglePartner (e) {
      const parts = e.path[4].querySelector('.js-content')
      this.toogle = !parts.classList.contains('show')
      if (parts.classList.contains('show')) {
        parts.classList.remove('show')
        parts.classList.add('hide')
      } else {
        parts.classList.add('show')
        parts.classList.remove('hide')
      }
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
      margin-bottom: 15px;
    }
  }
  .js-content{
    height: auto;
    transition: all .5s ease-out;
    overflow: hidden;
  }
  .show{
    max-height: 120px;
    opacity: 1;
  }
  .hide{
    max-height: 0;
    opacity: 0;
  }
</style>
