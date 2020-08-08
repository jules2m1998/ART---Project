<template>
  <transition :name="transition">
    <div v-show="visible" class="carrousel-slide" :style="{ background: 'url(' + item.img + ') center no-repeat' }">
      <img :src="item.img" :alt="item.alt" height="20">
      <v-container style="z-index: 11; display: none">
        <p class="my-title delai" :class="item.animation">
          {{ item.title }}
        </p>
      </v-container>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CarrouselSlide',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    title: null,
    animClass: null,
    transitionType: 'fade'
  }),
  computed: {
    transition () {
      if (this.$parent.direction) {
        return this.transitionType + '-' + this.$parent.direction
      }
      return null
    },
    visible () {
      return this.index === this.$parent.index
    }
  },
  watch: {
    /**
     * Ecoute les changements d'affichage de l'élément
     * @param val {Boolean}
     * @param oldVa {Boolean}
     */
    visible (val, oldVa) {
      this.$emit(val ? 'show' : '', this.item)
    }
  },
  mounted () {
    if (this.visible) {
      this.$emit('show', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .carrousel-slide{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-size: cover!important;
    &:before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }
    img{
      display: none;
    }
    p{
      position: relative;
      top: 200px;
      font-size: 2.2rem;
      max-width: 720px;
      font-weight: 100 !important;
      width: 100%;
      color: white;
      text-shadow: 1px 1px 15px #00000054;
      z-index: 100;
    }
  }
</style>
