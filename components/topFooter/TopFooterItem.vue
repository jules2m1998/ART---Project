<template>
  <div class="d-flex flex-row">
    <div class="ico">
      <v-icon>{{ ico }}</v-icon>
    </div>
    <div class="stats d-flex flex-column justify-center font-sans">
      <div class="number">
        +{{ number }}
      </div>
      <div class="title--custom">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopFooterItem',
  props: {
    ico: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    isAnimate: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    isAnimate (val) {
      return val
    }
  }
}
</script>

<style lang="scss" scoped>
  .ico{
    margin-right: 3px;
    i{
      font-size: 82px;
      color: #F5C511;
      opacity: .8;
    }
  }
  .stats{
    box-sizing: border-box;
    .number{
      margin: 0 0 5px;
      font-size: 35px;
      letter-spacing: 2px;
      font-weight: 700;
      color: rgba(255,255,255,.8);
      height: 36px;
    }
    .title--custom{
      color: rgba(255,255,255,.6);
      font-size: 15px;
      font-style: oblique;
    }
  }
</style>
