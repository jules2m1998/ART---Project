<template>
  <div class="header-second" data-sticky>
    <v-container>
      <div class="top">
        <header-logo class="logo" />
        <div class="menu">
          <div class="search-btn mr-3">
            <v-btn icon color="white" @click="toogleSearbarVisibility">
              <v-icon>
                <template v-if="!isSearch">
                  fas fa-search
                </template>
                <template v-else>
                  fas fa-times
                </template>
              </v-icon>
            </v-btn>
          </div>
          <div class="show">
            <header-btn />
          </div>
          <div class="unshow">
            <div class="pulse-btn">
              <v-btn
                id="profile-btn"
                width="40"
                height="40"
                fab
                dark
                large
                color="white"
                depressed
              >
                <v-icon color="black" size="20">
                  fas fa-bars
                </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div data-animate class="bottom" data-bottom-render>
          <search :is-top-visible="isTopVisible" :is-search-bar-responsive="isSearchResponsive" :is-menu-responsive="isMenuResponsive" data-search data-mount />
        </div>
        <div class="the-box">
          <v-btn class="the-box-btn" color="#fff" text>
            Catégories
            <div class="down ml-1">
              <v-icon size="14">
                fa fa-caret-down
              </v-icon>
            </div>
          </v-btn>
          <v-btn class="the-box-btn" color="#fff" text>
            lieux
            <div class="down ml-1">
              <v-icon size="14">
                fa fa-caret-down
              </v-icon>
            </div>
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeaderLogo from '@/components/header-logo/HeaderLogo'
import HeaderBtn from '@/components/header-btn/HeaderBtn'
import sticky from '@/mixins/sticky'
import Search from '@/components/search/Search'
import responsive from '@/mixins/responsive'
export default {
  name: 'HeaderSecond',
  components: { Search, HeaderBtn, HeaderLogo },
  mixins: [sticky, responsive],
  data: () => ({
    /**
     * Determine si la search bar du de la barre de recherche doit être responsive ou non
     * @type {Boolean}
     */
    isSearchResponsive: false,
    /**
     * Determine si le menu de la barre de recherche doit être visible doit être responsive ou non
     * @type {Boolean}
     */
    isMenuResponsive: false,
    /**
     * @type {HTMLElement}
     */
    bottom: undefined,
    /**
     * Determine si le boutton lors du click est rechercher ou fermer
     * @type {boolean}
     **/
    isSearch: false
  }),
  mounted () {
    this.bottom = document.querySelector('[data-bottom-render]')
    window.addEventListener('resize', () => {
      this.bottom.classList.remove('visible')
      this.isSearch = this.bottom.classList.contains('visible')
    })
    this.addMediaQuery(565, (e) => {
      this.isSearchResponsive = e
    })
    this.addMediaQuery(640, (e) => {
      this.isMenuResponsive = e
    })
  },
  methods: {
    /**
     * Affiche la barre de recherche lors du click sur le boutton de recherche en sticky
     */
    toogleSearbarVisibility () {
      this.bottom.classList.toggle('visible')
      this.isSearch = this.bottom.classList.contains('visible')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-second{
  background: url("/bg.jpg") no-repeat;
  background-size: cover;
  .top{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    position: relative;
    .the-box{
      position: absolute;
      bottom: 0;
      left: 0;
      .the-box-btn{
        margin-right: 10px;
        .down{
          background: white;
          border-radius: 50%;
          width: 24px;
          color: black;
          height: 24px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
    }
    .logo{
      order: 1;
    }
    .menu{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: calc(100% - 270px);
      order: 2;
      @media screen and (max-width: 623px) {
        .show{
          opacity: 0;
          width: 0!important;
          display: none;
        }
        .unshow{
          opacity: 1;
          width: auto!important;
          display: inline-block;
        }
      }

      .search-btn{
        display: none;
      }
    }

    @media screen and (max-width: 996px){
      .bottom{
        width: 100%!important;
        &>div{
          width: 100%;
        }
      }
      .the-box {
        display: none;
      }
    }
    .bottom{
      order: 3;
      width: auto;
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      padding-top: 50px;
      @media screen and (max-width: 1263px){
        width: 60%;
      }
    }
  }
  &.sticky{
    @media screen and (max-width: 809px) {
      height: auto !important;
    }
    .top{
      flex-wrap: nowrap;
      justify-content: space-between;
      .the-box{
        display: none;
      }
      .menu{
        order: 3;
        width: auto;
        @media screen and (max-width: 1884px) {
          .show{
            opacity: 0;
            width: 0;
            display: none;
          }
          .unshow{
            opacity: 1;
            width: auto;
            display: inline-block;
          }
        }
      }
      @media screen and (max-width: 809px){
        height: auto!important;
        flex-wrap: wrap;
        .menu{
          order: 2;
          .search-btn{
            display: block;
          }
        }
        .bottom{
          order: 3;
          display: none;
          &.visible{
            display: block;
          }
        }
      }
      .bottom{
        order: 2;
        padding-top: 0;
        width: 100%;
        margin: auto 10px;
        [data-search]{
          width: 100%;
          .my-menu{
            display: none;
            border: 1px solid red;
          }
        }
        &.visible{
          margin: auto;
        }
      }
    }
  }
  .show{
    opacity: 1;
    width: auto;
    display: inline-block;
  }
  .unshow{
    opacity: 0;
    width: 0;
    display: none;
  }
}
.sticky{
  position: fixed;
  top: 0;
  z-index: 21;
}
</style>
