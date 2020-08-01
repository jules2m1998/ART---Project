<template>
  <div class="carrousel">
    <div class="slides">
      <carrousel-slide v-for="(item, key) in slides" :key="key" :item="item" :index="key" />
    </div>
    <div class="other">
      <button class="buttons carrousel-next" @click.prevent="next">
        go
      </button>
      <div class="carrousel-pagination">
        <button v-for="n in slidesCount" :key="n" class="steppers" :class="{ active : n-1 === index}" @click="goto(n-1)" />
      </div>
      <button class="buttons carrousel-prev" @click.prevent="prev">
        rebff
      </button>
    </div>
  </div>
</template>

<script>
import CarrouselSlide from '~/components/header/carrousel/CarrouselSlide'
export default {
  name: 'Carrousel',
  components: { CarrouselSlide },
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
    loopTimer: 5000
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
      flex-direction: row;
      justify-content: space-between;
      .buttons{
        &.carrousel-next{

        }
        &.carrousel-prev{

        }
      }
      .carrousel-pagination{
        align-self: flex-end;
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
