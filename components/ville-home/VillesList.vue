<template>
  <div class="ville-list">
    <div class="content">
      <ville-item v-for="index in 10" :key="index" class="js-ville--item" />
    </div>
    <v-btn width="35" height="40" x-small color="secondary" class="ville--next--btn">
      <v-icon color="primary">
        navigate_next
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import VilleItem from '~/components/ville-home/VilleItem'
export default {
  name: 'VillesList',
  components: { VilleItem },
  data: () => ({
    activedClass: 'ville--actived'
  }),
  mounted () {
    const villes = document.querySelectorAll('.js-ville--item')
    this.makeFirstLarge()
    villes.forEach((item) => {
      item.addEventListener('mouseover', () => {
        this.mouseover(item)
      })
      item.addEventListener('mouseout', () => {
        this.mouseout(item)
      })
    })
  },
  methods: {
    makeFirstLarge () {
      document.querySelector('.js-ville--item').classList.add(this.activedClass)
    },

    /**
     * Ajoute la classe à active à la ville survolée
     * @param {HTMLElement} item
     */
    mouseover (item) {
      const current = document.querySelector('.' + this.activedClass)
      current.classList.remove(this.activedClass)
      item.classList.add(this.activedClass)
    },
    mouseout (item) {
      item.classList.remove(this.activedClass)
      this.makeFirstLarge()
    }
  }
}
</script>

<style lang="scss" scoped>
.ville-list{
  overflow: hidden;
  position: relative;
  width: 100%;
  .ville--next--btn{
    position: absolute;
    bottom: 35%;
    right: 20px;
  }
  .content{
    width: 500000px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .js-ville--item{
      width: 250px;
      margin: 0 5px 0 0;
      &.ville--actived.js-ville--item{
        width: 450px;
      }
    }
  }
}
</style>
