<template>
  <transition :name="transition">
    <div v-show="visible" class="carrousel-slide" :style="{ background: 'url(' + item.img + ') center no-repeat' }">
      <img :src="item.img" :alt="item.alt" height="20">
      <p class="my-title" :class="item.animation">
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
    title: null,
    animClass: null
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
  $pduration: 1.5s;
  .carrousel-slide{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-size: cover!important;
    &:before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }
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
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide-right-leave-active {
    animation: slideRightOut $timer;
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
  .animePLeft{
    animation: animePLeft $pduration;
  }
  @keyframes animePLeft {
    from {
      opacity: 0;
      transform: translate3d(100px, 0, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  .animePRight{
    animation: animePRight $pduration;
  }
  @keyframes animePRight {
    from {
      opacity: 0;
      transform: translate3d(-100px, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
  .animePBottom{
    animation: animePBottom $pduration;
  }
  @keyframes animePBottom {
    from {
      opacity: 0;
      transform: translate3d(0, 100px, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
  .animePTop{
    animation: animePTop $pduration;
  }
  @keyframes animePTop {
    from {
      opacity: 0;
      transform: translate3d(0, -100px, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
  .animePZ1{
    animation: animePZ1 $pduration;
  }
  @keyframes animePZ1 {
    from {
      opacity: 0;
      transform: translate3d(0, 0, 100px);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
</style>
