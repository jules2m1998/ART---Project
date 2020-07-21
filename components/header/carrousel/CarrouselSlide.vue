<template>
  <transition :name="transition">
    <div v-show="visible" class="carrousel-slide" :style="{ background: 'url(' + item.img + ') center no-repeat' }">
      <img :src="item.img" :alt="item.alt" height="20">
      <p class="my-title">
        {{ item.title }}
      </p>
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
    title: null
  }),
  computed: {
    transition () {
      if (this.$parent.direction) {
        return 'slide-' + this.$parent.direction
      }
      return null
    },
    visible () {
      return this.index === this.$parent.index
    }
  }
}
</script>

<style lang="scss" scoped>
  $timer: .5s;
  .carrousel-slide{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-size: cover!important;
    img{
      display: none;
    }
    p{
      font-size: 2.2rem;
      max-width: 720px;
      font-weight: 100 !important;
      width: 100%;
      text-align: center;
      color: white;
      text-shadow: 1px 1px 15px #00000054;
      z-index: 100;
    }
  }
  .slide-right-enter-active {
    animation: slideRightIn $timer;
  }
  .slide-right-leave-active {
    animation: slideRightOut $timer;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
  }
  @keyframes slideRightIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideRightOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .slide-left-enter-active {
    animation: slideLeftIn $timer;
  }
  .slide-left-leave-active {
    animation: slideLeftOut $timer;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
  }
  @keyframes slideLeftIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideLeftOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
</style>
