<template>
  <div id="the-filter">
    <div class="the-filter-content" data-content>
      <div class="the-filter-content-filter" data-first>
        <v-icon color="primary" size="18">
          filter_list
        </v-icon>
      </div>
      <ul class="the-filter-content-items" data-content-responsive>
        <template v-for="(v, k) in filters">
          <li v-if="v.isVisible" :key="k" class="the-filter-content-item" :data-id="v.id">
            <button
              class="the-filter-content-item-button"
              :class="{'the-filter-content-item-button-active': v.isActive }"
              @click="makeActive(v)"
            >
              <div class="the-filter-content-item-button-text">
                {{ v.title }}
              </div>
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
          </li>
        </template>
      </ul>
      <div class="the-filter-content-translate" data-last>
        <v-icon color="primary" size="18" class="the-filter-content-translate-icon">
          more
        </v-icon>
      </div>
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
    responsiveChildreInfo: [],
    defaultVisibleElement: [],
    content: undefined
  }),
  mounted () {
    this.responsive = document.querySelector('[data-content-responsive]')
    this.defaultVisibleElement = [
      {
        id: 1,
        width: document.querySelector('[data-first]').clientWidth
      },
      {
        id: 2,
        width: document.querySelector('[data-last]').clientWidth
      }
    ]
    this.content = document.querySelector('[data-content]')
    this.makeAdaptative()
  },
  methods: {
    makeActive (active) {
      this.filters.forEach((v) => {
        v.isActive = v.title === active.title
      })
    },
    makeAdaptative () {
      const child = this.responsive.children
      for (let i = 0; i < child.length; i++) {
        const element = child[i]
        const children = {
          id: parseInt(element.dataset.id, 10),
          width: element.clientWidth
        }
        this.responsiveChildreInfo.push(children)
      }
      const responsiveElt = []
      let somme = this.defaultVisibleElement[0].width + this.defaultVisibleElement[0].width
      console.log(this.content.getBoundingClientRect().width)
      for (let i = 0; i < this.responsiveChildreInfo.length; i++) {
        const element = this.responsiveChildreInfo[i]
        somme += element.width
        if (somme <= this.content.clientWidth) {
          responsiveElt.push(element.id)
          console.log(responsiveElt)
        } else {
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#the-filter{
  .the-filter-content{
    display: flex;
    padding: 10px 0;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    .the-filter-content-items{
      display: flex;
      overflow: hidden;
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
          /* identical to box height */
          color: rgba(0, 0, 0, 0.87);
          margin-right: 10px;
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
    .the-filter-content-filter{
      padding: 0 19px;
    }
    .the-filter-content-translate{
      display: flex;
      align-items: center;
      &:before{
        margin-right: 14px;
        content: '';
        width: 1px;
        height: 80%;
        background: #E0E0E0;
        display: inline-block;
      }
      .the-filter-content-translate-icon{
        transform: rotate(180deg);
      }
    }
  }
}
</style>
