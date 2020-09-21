<template>
  <div id="the-formatter">
    <ul class="the-formatter-content">
      <li
        v-for="(v, k) in formatters"
        :key="k"
        class="the-formatter-content-item"
        :class="{ 'the-formatter-content-item-active': v.isActive }"
        @click="makeActive(v)"
      >
        <v-icon size="16" class="the-formatter-content-item-icon">
          {{ v.icon }}
        </v-icon>
        <div class="the-formatter-content-item-text">
          {{ v.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheFormatter',
  data: () => ({
    formatters: [
      {
        name: 'Liste',
        icon: 'format_list_bulleted',
        isActive: true
      },
      {
        name: 'Grille',
        icon: 'view_column',
        isActive: false
      },
      {
        name: 'Carte',
        icon: 'map',
        isActive: false
      }
    ]
  }),
  methods: {
    makeActive (active) {
      this.formatters.forEach((v) => {
        v.isActive = v.name === active.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$transition: 0.5s;
#the-formatter{
  .the-formatter-content{
    display: flex;
    .the-formatter-content-item{
      display: flex;
      align-items: center;
      font-family: Google Sans,sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.36);
      cursor: pointer;
      margin-right: 28px;
      transition: all $transition;
      .the-formatter-content-item-icon{
        color: rgba(0, 0, 0, 0.36);
        margin-right: 12px;
        transition: all $transition;
      }
      &.the-formatter-content-item-active{
        color: $primary;
        .the-formatter-content-item-icon{
          color: $primary;
        }
      }
    }
  }
}
</style>
