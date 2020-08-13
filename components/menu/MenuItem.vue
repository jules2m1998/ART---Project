<template>
  <div :class="{ actived: myKey === 0}" class="mb-4">
    <template>
      <v-btn
        v-if="!isResponsive"
        :id="'js-menu-item-' + myKey"
        :to="element.to"
        color="white"
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
        class="responsive-item"
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
    /**
     * Ecoute les changements ur la propriété isResponsive et rajoute des comportement en fonction de sa valeur
     * @param n {Boolean}
     * @param o {Boolean}
     */
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
  .v-btn--active{
    background: $yellow!important;
    border: unset;
  }
  .responsive-item.v-btn--active{
    border-bottom: 2px solid !important;
    background: unset!important;
    border-radius: 0;
  }
  .v-btn__content {
    justify-content: flex-start!important;
  }
</style>
