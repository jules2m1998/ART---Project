<template>
  <div class="carrousel">
    <div class="slides">
      <carrousel-slide v-for="(item, key) in slides" :key="key" :item="item" :index="key" />
    </div>
    <div class="other">
      <button class="buttons carrousel-next" @click.prevent="next" />
      <div class="carrousel-pagination">
        <button v-for="n in slidesCount" :key="n" class="steppers" :class="{ active : n-1 === index}" @click="goto(n-1)" />
      </div>
      <button class="buttons carrousel-prev" @click.prevent="prev" />
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
    interval: null
  }),
  computed: {
    slidesCount () {
      return this.slides.length
    }
  },
  mounted () {
    this.startAutoSlide()
  },
  methods: {
    next () {
      this.index++
      this.direction = 'right'
      if (this.index >= this.slidesCount) {
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
        this.next()
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
  $hStepper: 15px;
  *{
    z-index: 10;
  }
  .carrousel{
    width: 100%;
    height: 100%;
    position: relative;
    .slides{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      z-index: -1;
      &:before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
      }
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
        .steppers{
          width: $hStepper;
          height:  $hStepper;
          border-radius:  $hStepper;
          background: $yellow;
          margin-right: 10px;
          box-shadow: 0 0 9px 3px #0000008f;
          transition: 1s;
          &.active{
            width: 40px;
          }
        }
      }
    }
  }
</style>
