<template>
  <div v-show="isLoad">
    <div class="menu-list" :class="{'isResponsive': isResponsive}">
      <template v-for="(item, key) in menus">
        <menu-item v-if="item.visible" :key="key" :item="item" @click="addCurrent(item.id)" />
      </template>
      <v-menu v-if="isResponsive" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            small
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              subject
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in menusNotVisible"
            :key="index"
            @click="addCurrent(item.id)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/search/menu/MenuItem'
export default {
  name: 'MenuList',
  components: { MenuItem },
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    isResponsive: false,
    isLoad: false
  }),
  computed: {
    menusNotVisible () {
      return this.menus.filter(x => !x.visible)
    }
  },
  watch: {
    isResponsive (value) {
      let menu
      if (value) {
        menu = this.menus.map((x) => {
          x.visible = x.isCurrent
          return x
        })
      } else {
        menu = this.menus.map((x) => {
          x.visible = true
          return x
        })
      }
      this.$emit('changecurrent', menu)
    }
  },
  mounted () {
    this.isLoad = true
    if (window.innerWidth < 437) {
      this.isResponsive = true
    }
    this.addMediaQuery()
  },
  methods: {
    addMediaQuery () {
      const media = window.matchMedia('(max-width: 437px)')
      const screenTest = (e) => {
        this.isResponsive = e.matches
      }
      media.addEventListener('change', screenTest)
    },
    addCurrent (id) {
      const menu = [...this.menus].map((x) => {
        x.isCurrent = x.id === id
        return x
      })
      console.log(menu, id)
      this.$emit('changecurrent', menu)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-list{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.isResponsive{
  justify-content: space-between;
  align-items: center;
}
</style>
