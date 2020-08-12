<template>
  <div class="categoryList">
    <category-item v-for="(item, key) in rendCategori" :key="key" :item="item" />
    <div id="more-btn" @click="showMore">
      <v-btn class="mx-2" fab small color="secondary">
        <v-icon color="black">
          more_horiz
        </v-icon>
      </v-btn>
      {{ text }}
    </div>
  </div>
</template>

<script>
import CategoryItem from '@/components/categoris/CategoryItem'
export default {
  name: 'CategoryList',
  components: { CategoryItem },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    /**
     * Nombre d'élément à afficher
     * @type { number }
     */
    nbItem: 10,
    /**
     * Text voir plus ou moin
     */
    text: 'Voir plus'
  }),
  computed: {
    /**
     * Renvoie les éléments à afficher en fonction de nbItem
     * @return {Object[]}
     */
    rendCategori () {
      return this.categories.filter((value, key) => key < this.nbItem)
    },
    /**
     * Retourne le nombre de categorie
     * @return {number}
     */
    nbCategorie () {
      return this.categories.length
    }
  },
  methods: {
    showMore () {
      if (this.nbCategorie % this.nbItem !== this.nbCategorie) {
        this.nbItem += 10
      } else {
        this.nbItem = 10
      }
      this.text = this.nbCategorie % this.nbItem !== this.nbCategorie ? 'Voir plus' : 'Voir moin'
    }
  }
}
</script>

<style lang="scss" scoped>
#more-btn{
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
.v-btn--fab.v-size--small {
  height: 30px;
  width: 30px;
}
.categoryList{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transition: height .5s;
}

</style>
