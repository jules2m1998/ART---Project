<template>
  <div class="carrousel">
    <div class="slides">
      <carrousel-slide
        v-for="(item, key) in slides"
        :key="key"
        :item="item"
        :index="key"
        @hidden="hideTitle"
        @show="showTitle"
      />
    </div>
    <v-container style="z-index: 22">
      <div class="other">
        <div id="search-pub">
          <div id="search">
            <div v-show="text.isShow" class="my-title" :class="text.animation">
              <p>
                {{ text.title }}
              </p>
            </div>
            <p class="my-subtitle">
              Votre annuaire universelle et service de renseignement
            </p>
            <div class="search">
              <search />
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
import CarrouselSlide from '~/components/header/carrousel/CarrouselSlide'
import Search from '@/components/search/Search'
export default {
  name: 'Carrousel',
  components: { Search, CarrouselSlide },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    index: 0,
    direction: null,
    interval: null,
    animations: ['animePLeft', 'animePRight', 'animePBottom', 'animePTop'],
    tmp: [],
    loopTimer: 5000,
    text: {
      isShow: true,
      title: '',
      animation: ''
    }
  }),
  computed: {
    slidesCount () {
      return this.slides.length
    },
    animCount () {
      return this.animations.length
    }
  },
  mounted () {
    this.startAutoSlide()
  },
  created () {
    this.tmp = [...this.animations]
    this.slides.forEach((item) => {
      item.animation = this.getAnimation()
    })
  },
  methods: {
    next () {
      this.index++
      this.direction = 'right'
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    slide () {
      if (this.index < this.slidesCount - 1) {
        this.direction = 'right'
        this.index++
      } else {
        this.direction = 'left'
        this.index = 0
      }
    },
    prev () {
      this.index--
      this.direction = 'left'
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    },
    goto (i) {
      clearInterval(this.interval)
      this.startAutoSlide()
      this.direction = i < this.index ? 'left' : 'right'
      this.index = i
    },
    startAutoSlide () {
      this.interval = setInterval(() => {
        this.slide()
      }, this.loopTimer)
    },
    getAnimation () {
      if (this.animCount === 0) {
        this.animations = [...this.tmp]
      }
      const random = Math.floor(Math.random() * this.animCount)
      const value = this.animations[random].slice()
      this.animations.splice(random, 1)
      return value
    },
    showTitle (e) {
      this.text.isShow = false
      this.text = { isShow: true, ...e }
    }
  }
}
</script>

<style lang="scss" scoped>
  $hStepper: 8px;
  *{
    /*z-index: 0;*/
  }
  .carrousel{
    width: 100%;
    height: 100%;
    position: relative;
    background: black;
    display: flex;
    .slides{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
    }
    .other{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      #search-pub{
        display: grid;
        grid-template-columns: auto 300px;
        grid-gap: 20px;
        margin-bottom: 100px;
        width: 100%;
        #search{
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          .my-title{
            font-size: 2.2rem;
            max-width: 720px;
            font-weight: 100 !important;
            width: 100%;
            color: white;
            text-shadow: 1px 1px 15px #00000054;
            z-index: 100;
          }
          p{
            margin: 0!important;
          }
          .my-subtitle{
            font-size: 0.8rem;
            max-width: 720px;
            font-weight: 100 !important;
            width: 100%;
            color: white;
            text-shadow: 1px 1px 15px #00000054;
          }
          .search{
            align-self: flex-end;
            width: 80%;
          }
        }
        #pub{
          width: 300px;
          height: 300px;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
        }
      }
      .buttons{
        &.carrousel-next{

        }
        &.carrousel-prev{

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
</style>
