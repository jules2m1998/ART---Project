<template>
  <div id="the-filter">
    <div class="the-filter-content" data-content>
      <div class="the-filter-content-filter" data-first>
        <v-icon color="primary" size="18">
          filter_list
        </v-icon>
      </div>
      <v-btn
        v-if="isResponsive && isLeft"
        text
        class="the-filter-content-translate left"
        x-small
        data-last
        @click="translate(false)"
      >
        <v-icon color="primary" size="18" class="the-filter-content-translate-icon">
          more
        </v-icon>
      </v-btn>
      <div class="the-filter-content-container">
        <div class="the-filter-content-container-items" data-content-responsive>
          <template v-for="(v, k) in filters">
            <div :key="k" class="the-filter-content-item" :data-id="v.id">
              <button
                class="the-filter-content-item-button"
                :class="{'the-filter-content-item-button-active': v.isActive }"
                @click="e => makeActive(v, e)"
              >
                <span class="the-filter-content-item-button-text">
                  {{ v.title }}
                </span>
                <v-icon
                  v-if="v.isActive"
                  color="primary"
                  size="18"
                >
                  check_circle_outline
                </v-icon>
                <v-icon size="18" class="the-filter-content-item-button-icon-filter">
                  arrow_drop_down
                </v-icon>
              </button>
            </div>
          </template>
        </div>
      </div>
      <v-btn
        v-if="isResponsive && isRight"
        text
        class="the-filter-content-translate"
        x-small
        data-last
        @click="translate(true)"
      >
        <v-icon color="primary" size="18" class="the-filter-content-translate-icon">
          more
        </v-icon>
      </v-btn>
    </div>
    <div v-show="currentFilter" class="the-filter-list" @click="e => e.stopPropagation()">
      <div class="the-filter-list-header">
        <div class="the-filter-list-header-title">
          Choisissez le quartier que vous aimerez découvrir
        </div>
        <div class="close">
          <v-btn icon x-small @click="closeFilterList">
            <v-icon size="18px">
              close
            </v-icon>
          </v-btn>
        </div>
      </div>
      <v-divider class="my-3" />
      <div class="the-filter-list-content">
        <v-switch
          v-for="i in 7"
          :key="i"
          label="Show messages"
          class="the-filter-list-content-item"
          dense
          flat
          inset
        />
      </div>
      <v-divider class="my-3" />
      <div class="the-filter-list-footer">
        <v-btn color="primary" small>
          Appliquer
        </v-btn>
      </div>
      <div class="the-filter-list-arrow" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFilters',
  data: () => ({
    filters: [
      {
        title: 'Catégories',
        isActive: false,
        isVisible: true,
        id: 0
      },
      {
        title: 'Quartiers',
        isActive: false,
        isVisible: true,
        id: 1
      },
      {
        title: 'Ouverts',
        isActive: false,
        isVisible: true,
        id: 2
      },
      {
        title: 'Horaires',
        isActive: false,
        isVisible: true,
        id: 3
      },
      {
        title: 'Langues',
        isActive: false,
        isVisible: true,
        id: 4
      },
      {
        title: 'Test 1',
        isActive: true,
        isVisible: true,
        id: 5
      },
      {
        title: 'Test 2',
        isActive: false,
        isVisible: true,
        id: 6
      },
      {
        title: 'Test 3',
        isActive: false,
        isVisible: true,
        id: 7
      }
    ],
    /**
     * @type {HTMLElement}
     */
    responsive: undefined,
    /**
     * Conserve les informations sur les différents filtres à savoir son id et la largeur
     * @type {Array}
     **/
    responsiveChildreInfo: [],
    /**
     * Indique si la taille du contenus des filtres est trop grande
     * @type {boolean}
     **/
    isResponsive: false,

    /**
     * @type {boolean}
     **/
    isRight: true,
    /**
     * @type {boolean}
     **/
    isLeft: false,
    /**
     * @type {number}
     **/
    nbScroll: 0,
    /**
     * Stock le filtre sur lequel on vient de clicker
     * @type {Object}
     **/
    currentFilter: null
  }),
  mounted () {
    this.responsive = document.querySelector('[data-content-responsive]')
    this.getChildrenWidth()
    this.makeAdaptative()
    window.addEventListener('resize', this.makeAdaptative.bind(this))
    window.addEventListener('click', () => {
      this.currentFilter = null
    })
  },
  methods: {
    /**
     * Rends l'element sur lequel le click a été effectué actif
     * @param active
     */
    makeActive (active, e) {
      this.currentFilter = active
      e.stopPropagation()
      const arrow = document.querySelector('.the-filter-list-arrow')
      const element = e.target
      arrow.style.left = `${element.getBoundingClientRect().x - element.getBoundingClientRect().width / 2}px`
      console.log(element.clientWidth)
    },
    /**
     * Rend le filtre adaptatif
     */
    makeAdaptative () {
      this.responsive.parentNode.style.width = '100%'
      this.responsive.style.width = 'auto'
      if (this.getNumberOfvisibleElement() < this.responsiveChildreInfo.length) {
        this.responsive.parentNode.style.width = `${this.getParentWidth()}px`
        this.responsive.style.width = `${this.getParentWidth() + this.getInvivisibleElementsWidth()}px`
        this.isResponsive = true
      } else {
        this.isResponsive = false
      }
      this.visibleElement = this.getNumberOfvisibleElement()
    },
    /**
     * Recupère l'identifiant et la largeur des enfant du filtre liste
     */
    getChildrenWidth () {
      const childrens = this.responsive.children
      this.responsiveChildreInfo = []
      for (const c of childrens) {
        this.responsiveChildreInfo.push({
          id: parseInt(c.dataset.id, 10),
          width: c.clientWidth
        })
      }
    },
    /**
     * Retourne le nombre d'élément visibles
     * @return {number}
     */
    getNumberOfvisibleElement () {
      let somme = 0
      let index = 0
      for (const element of this.responsiveChildreInfo) {
        somme += element.width
        if (somme < this.responsive.parentNode.clientWidth) {
          index++
        } else {
          break
        }
      }
      return index
    },
    /**
     * Donne la taille du parent du parent des filtre
     * @return {number}
     */
    getParentWidth () {
      let acc = 0
      for (const e of this.responsiveChildreInfo) {
        if (e.id < this.getNumberOfvisibleElement()) {
          acc += e.width
        } else {
          break
        }
      }
      return acc
    },
    /**
     * Retourne la largeur des element invisible
     * @return {number}
     */
    getInvivisibleElementsWidth () {
      let acc = 0
      for (const e of this.responsiveChildreInfo) {
        if (e.id >= this.getNumberOfvisibleElement() + 1) {
          acc += e.width
        }
      }
      return acc
    },
    /**
     * Effectue une translation au click
     * @param isRight
     */
    translate (isRight) {
      if (isRight) {
        this.nbScroll += 1
      } else {
        this.nbScroll -= 1
      }
      this.isLeft = this.nbScroll > 0
      this.isRight = this.nbScroll < this.responsiveChildreInfo.length - this.getNumberOfvisibleElement()
      let width = 0
      for (const e of this.responsiveChildreInfo) {
        if (e.id >= this.getNumberOfvisibleElement() && e.id < this.getNumberOfvisibleElement() + this.nbScroll) {
          width += e.width
        }
      }
      this.responsive.style.transform = `translate3d(-${width}px, 0, 0)`
    },
    closeFilterList () {
      this.currentFilter = null
    }
  }
}
</script>

<style lang="scss" scoped>
#the-filter{
  position: relative;
  .the-filter-content{
    display: flex;
    padding: 10px 0;
    border: 1px solid #E0E0E0;
    align-items: center;
    box-sizing: border-box;
    border-radius: 4px;
    justify-content: space-between;
    .the-filter-content-container{
      overflow: hidden;
      .the-filter-content-container-items{
        display: flex;
        transition:transform .3s;
        transform:translateZ(0);
        .the-filter-content-item{
          display: flex;
          align-items: center;
          padding-left: 14px;
          &:first-child{
            padding-left: 0;
          }
          &:after{
            content: '';
            width: 1px;
            height: 80%;
            background: #E0E0E0;
            display: inline-block;
          }
          &:last-child:after{
            display: none;
          }
          .the-filter-content-item-button{
            display: flex;
            align-items: center;
            font-family: Google Sans,sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            color: rgba(0, 0, 0, 0.87);
            margin-right: 10px;
            position: relative;
            &.the-filter-content-item-button-active{
              color: $primary;
            }
            .the-filter-content-item-button-text{
              margin-right: 12px;
              white-space: nowrap;
            }
          }
        }
      }
    }
    .the-filter-content-filter{
      padding: 0 19px;
    }
    .the-filter-content-translate{
      display: flex;
      align-items: center;
      margin-right: 8px;
      .the-filter-content-translate-icon{
        transform: rotate(180deg);
      }
      &.left{
        .the-filter-content-translate-icon{
          transform: rotate(0deg);
        }
      }
    }
  }
  .the-filter-list{
    width: 100%;
    position: absolute;
    z-index: 20;
    border-radius: 4px;
    margin-top: 10px;
    border: 1px solid #E0E0E0;
    background: white;
    padding: 25px 15px 12px;
    .the-filter-list-header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .the-filter-list-footer{
      display: flex;
      justify-content: flex-end;
    }
    .the-filter-list-content {
      display: flex;
      flex-wrap: wrap;
      .the-filter-list-content-item{
        margin-right: 10px;
      }
    }

    .the-filter-list-arrow{
      position: absolute;
      width: 0;
      height: 0;
      border: 8px solid #ccc;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 30px solid transparent;
      left: 50%;
      top: -19px;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
