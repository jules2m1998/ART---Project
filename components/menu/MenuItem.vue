<template>
  <div :class="{ actived: myKey === 0}" class="mb-4">
    <template>
      <v-btn
        v-if="!isResponsive"
        :id="'js-menu-item-' + myKey"
        :to="element.to"
        color="white"
        :class="{ active: myKey === 0}"
        dark
        x-large
        min-width="100%"
        style="color: black; text-transform: capitalize"
      >
        <v-icon left>
          {{ element.ico }}
        </v-icon>
        {{ element.name }}
      </v-btn>
      <v-btn
        v-else
        :id="'js-menu-item-' + myKey"
        :to="element.to"
        color="white"
        :class="{ actived: myKey === 0}"
        dark
        x-large
        style="color: #F5C511; text-transform: capitalize; box-shadow: unset; font-size: 20px"
      >
        <v-icon medium>
          {{ element.ico }}
        </v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    element: {
      type: Object,
      required: true
    },
    isResponsive: {
      type: Boolean,
      required: true
    },
    myKey: {
      type: Number,
      required: true
    }
  },
  watch: {
    isResponsive (n, o) {
      const current = document.getElementById('js-menu-item-' + this.myKey)
      const child = current.querySelector('span')
      if (!n) {
        child.style.justifyContent = 'unset'
      } else {
        child.style.justifyContent = 'inherit'
      }
    }
  },
  mounted () {
    const current = document.getElementById('js-menu-item-' + this.myKey)
    if (!this.isResponsive) {
      const child = current.querySelector('span')
      child.style.justifyContent = 'unset'
    } else {
      const child = current.querySelector('span')
      child.style.justifyContent = 'inherit'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-btn__content{
    justify-content: unset!important;
  }
  a{
    border: 1px solid yellow;
  }
  .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
    opacity: 0!important;
  }
  .active{
    background: $yellow!important;
    border: unset;
  }
  .actived{
    border-bottom: 1px solid $yellow;
  }
</style>
