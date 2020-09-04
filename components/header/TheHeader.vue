<template>
  <header
    id="header"
    class="pt-5 bg--cover js-editable-class"
  >
    <div id="carrousel">
      <carrousel v-model="value" />
    </div>
  </header>
</template>

<script>
import Carrousel from '~/components/header/carrousel/Carrousel'

export default {
  name: 'TheHeader',
  components: { Carrousel },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
  }),
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  *{
    z-index: 2;
  }
  header {
    height: 90vh;
    max-height: 620px;
    min-height: 520px;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 440px){
      min-height: 670px;
    }
    #carrousel {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    .bg--cover, .bg--cover2 {
      background-size: cover !important;
      transition: background 2s ease-in;
    }

    .bg--cover2 {
      background: url('/header/home_background.jpg') no-repeat center;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity 1s, transform 1s;
    }

    .fade-enter, .fade-leave-active {
      opacity: 0;
      transform: translate(20px);
    }
  }
</style>
