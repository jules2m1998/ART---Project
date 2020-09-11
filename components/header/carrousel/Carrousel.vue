<template>
  <div class="carrousel">
    <div class="slides">
      <carrousel-slide
        v-for="(item, key) in slides"
        :key="key"
        :item="item"
        :index="key"
        @show="showTitle"
      />
    </div>
    <v-container style="z-index: 22; height: 100%">
      <div class="other">
        <div id="logo__menu" class="d-flex flex-column">
          <div class="d-flex flex-row justify-space-between">
            <div id="logo">
              <img src="/logo-white.png" alt="logo de l'annuaire universel du cameroun">
            </div>
            <div id="btn-lang" class="d-flex flex-row">
              <div class="menu-item">
                <v-menu open-on-hover offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      id="menu-btn"
                      v-bind="attrs"
                      text
                      v-on="on"
                    >
                      A propos de nous <v-icon>keyboard_arrow_down</v-icon>
                    </v-btn>
                  </template>
                  <v-list class="mt-2">
                    <v-list-item
                      v-for="index in 5"
                      :key="index"
                    >
                      <v-list-item-title>Test</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <div class="menu-item">
                <select id="select-lang">
                  <option selected>
                    EN
                  </option>
                  <option>FR</option>
                </select>
              </div>
              <div class="menu-item">
                <div class="content-profile-btn">
                  <template>
                    <v-dialog v-model="dialog" persistent max-width="550px" style="overflow-y: hidden">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          id="profile-btn"
                          width="40"
                          height="40"
                          fab
                          dark
                          large
                          color="white"
                          depressed
                          v-bind="attrs"
                          v-on="on"
                          @click="removeOverflow"
                        >
                          <v-icon color="black">
                            person
                          </v-icon>
                        </v-btn>
                      </template>
                      <default-form v-model="dialog" type="signin" />
                    </v-dialog>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="search--pub">
          <div id="search">
            <div>
              <div v-show="text.isShow" class="my-title" :class="text.animation">
                <h1 id="my-title">
                  {{ text.title }}
                </h1>
              </div>
              <p v-show="text.isShow" class="my-subtitle" :class="opposite(text.animation)">
                {{ text.title }}
              </p>
            </div>
            <div class="search">
              <search />
              <p class="">
                Près de <span>04 millions</span> d'entreprises et proffessionnels à votre disposition
              </p>
            </div>
          </div>
          <div id="pub">
            Espace pub
          </div>
        </div>
        <div class="carrousel-pagination">
          <button v-for="n in slidesCount" :key="n" class="steppers" :class="{ active : n-1 === index}" @click="goto(n-1)" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import clamp from 'assets/js/clamp'
import CarrouselSlide from '~/components/header/carrousel/CarrouselSlide'
import Search from '@/components/search/Search'
import DefaultForm from '@/components/user/utils/DefaultForm'
export default {
  name: 'Carrousel',
  components: { DefaultForm, Search, CarrouselSlide },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    /**
     * @type {number}
     */
    index: 0,
    /**
     * @type {string}
     */
    direction: null,
    /**
     * @type {number}
     */
    interval: null,
    /**
     * @type {string[]}
     */
    animations: ['animePLeft', 'animePRight', 'animePTop'],
    /**
     * @type {string[]}
     */
    tmp: [],
    /**
     * @type {number}
     */
    loopTimer: 5000,
    /**
     * @type {Object}
     */
    text: {
      isShow: true,
      title: '',
      animation: ''
    },
    /**
     * Définit l'état de la boite de dialogue à savoir visible ou non
     * @type {Boolean}
     */
    dialog: false,
    /**
     * Menu visible une fois connecté
     * @type {Boolean}
     */
    userMenu: [
      {
        name: 'Profile',
        to: 'user/profile',
        icon: 'person'
      },
      {
        name: 'Administration',
        to: '',
        icon: 'settings'
      },
      {
        name: 'Deconnexion',
        to: '',
        icon: 'login'
      }
    ]
  }),
  computed: {
    /**
     * Retourne le nombre de slides
     * @return {number}
     */
    slidesCount () {
      return this.slides.length
    },
    /**
     * Retourne le nombre d'animation
     * @return {number}
     */
    animCount () {
      return this.animations.length
    },
    /**
     * Recupère l'utilisateur courant
     * @return {Object|null}
     */
    current () {
      return this.$store.state.user.current
    }
  },
  mounted () {
    this.startAutoSlide()
    const title = document.querySelector('#my-title')
    clamp(title, 2)
  },
  created () {
    this.tmp = [...this.animations]
    this.slides.forEach((item) => {
      item.animation = this.getAnimation()
    })
  },
  methods: {
    /**
     * Permet de retourner à la slide suivante
     */
    next () {
      this.index++
      this.direction = 'right'
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    /**
     * Permet de lancer le slide et de recommencer
     */
    slide () {
      if (this.index < this.slidesCount - 1) {
        this.direction = 'right'
        this.index++
      } else {
        this.direction = 'left'
        this.index = 0
      }
    },
    /**
     * Permet de retourner à la slide précédente
     */
    prev () {
      this.index--
      this.direction = 'left'
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    },
    /**
     * Perme de quitter directement d'une slide à une autre
     */
    goto (i) {
      clearInterval(this.interval)
      this.startAutoSlide()
      this.direction = i < this.index ? 'left' : 'right'
      this.index = i
    },
    /**
     * Lance le slide en boucle
     */
    startAutoSlide () {
      this.interval = setInterval(() => {
        this.slide()
      }, this.loopTimer)
    },
    /**
     * Retourne une animation au hasard
     * @return {string}
     */
    getAnimation () {
      if (this.animCount === 0) {
        this.animations = [...this.tmp]
      }
      const random = Math.floor(Math.random() * this.animCount)
      const value = this.animations[random].slice()
      this.animations.splice(random, 1)
      return value
    },
    /**
     * Affiche le titre de la slide courante
     * @param e {Object}
     */
    showTitle (e) {
      this.text.isShow = false
      setTimeout(() => {
        this.text = { isShow: true, ...e }
      }, 1)
    },
    /**
     * Retourne l'animation opposé à celle passé en paramètre
     * @param item {String}
     * @returns {string}
     */
    opposite (item) {
      if (item.toLowerCase().includes('left')) {
        return 'animePRight'
      }
      if (item.toLowerCase().includes('right')) {
        return 'animePLeft'
      }
      if (item.toLowerCase().includes('top')) {
        return 'animePBottom'
      }
      if (item.toLowerCase().includes('bottom')) {
        return 'animePTop'
      }
    },
    /**
     * Met le overflowY de la page à hidden
     */
    removeOverflow () {
      document.documentElement.style.overflowY = 'hidden'
    }
  }
}
</script>

<style lang="scss" scoped>
$hStepper: 8px;
p{
  margin: 0;
}
.carrousel{
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, .5);
    z-index: 10;
  }
  .other{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    #logo__menu{
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 10;
      margin-top: 10px;
      #btn-lang{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .menu-item{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          &:after{
            content: "";
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background: white;
            margin-right: 12px;
            margin-left: 14px;
          }
          &:last-child:after{
            content: "";
            width: 0;
            height: 0;
            border-radius: 0;
            background: none;
            margin-right: 0;
            margin-left: 0;
          }
          #select-lang{
            color: white;
            padding: 10px;
            option{
              background: transparent;
              color: black;
            }
          }
          .content-profile-btn{
            border: 22px solid $yellow;
            width: 42px;
            height: 42px;
            border-radius: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            animation: pulse 2s infinite;
            #profile-btn{
            }
          }
          #menu-btn{
            font-size: 14px;
            font-family: "Open Sans", sans-serif;
            font-weight: 700;
            position: relative;
            color: white;
            padding: 0;
            transition: all 0.5s;
            &:after{
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 30px;
              height: 3px;
              background: white;
              border-radius: 1px;
              transition: all 0.5s;
            }
            &:hover:after{
              width: 50%;
              background: $yellow;
            }
            &:hover{
              color: $yellow
            }
          }
        }
      }
    }
    #search--pub{
      display: grid;
      grid-template-columns: auto 300px;
      grid-gap: 20px;
      width: 100%;
      @media screen and (max-width: 760px){
        grid-template-columns: 1fr;
      }
      #search{
        color: white;
        display: flex;
        height: 300px;
        flex-direction: column;
        justify-content: space-between;
        .search{
          p{
            font-family: 'Open sans', sans-serif;
            font-size: 12px;
            font-style: italic;
            margin-top: 12px;
            span{
              background: rgba($yellow, .6);
            }
          }
        }
        .my-title{
          height: 112px;
          overflow: hidden;
          font-family: 'Open sans', sans-serif;
          font-size: 48px;
          line-height: 56px;
          font-weight: 600;
          display: flex;
          align-items: flex-end;
          h1{
            font-size: inherit;
          }
        }
        .my-subtitle{
          font-family: 'Open sans', sans-serif;
          font-size: 16px;
        }
      }
      #pub{
        width: 300px;
        height: 250px;
        background: white;
        display: flex;
        justify-content: center;
        align-self: flex-end;
        align-items: center;
        border-radius: 4px;
        @media screen and (max-width: 760px){
          display: none;
        }
      }
    }
    .carrousel-pagination{
      align-self: flex-start;
      margin-bottom: 20px;
      z-index: 101;
      .steppers{
        width: $hStepper;
        height:  $hStepper;
        border-radius:  $hStepper;
        background: white;
        margin-right: 10px;
        box-shadow: 0 0 9px 3px #0000008f;
        transition: 1s;
        &.active{
          width: 36px;
          background: $yellow;
        }
      }
    }
  }
}
.slides{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
</style>
