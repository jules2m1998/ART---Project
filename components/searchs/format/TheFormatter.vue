<template>
  <div id="the-formatter">
    <div class="bottom-fil-ariane-filter">
      <button>
        <v-icon color="primary" size="18" class="bottom-fil-ariane-filter-icon">
          sort
        </v-icon>
        <div class="bottom-fil-ariane-filter-text">
          Pertinence
        </div>
        <v-icon size="18" class="bottom-fil-ariane-filter-icon-filter">
          arrow_drop_down
        </v-icon>
      </button>
    </div>
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
  display: flex;
  .bottom-fil-ariane-filter{
    margin-right: 20px;
    button{
      display: flex;
      font-family: Google Sans,sans-serif;
      color: $primary;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 17px;
      justify-content: space-between;
      width: 150px;
      @media screen and (max-width: 336px) {
        width: auto;
        .bottom-fil-ariane-filter-icon{
          margin-right: 3px;
        }
      }
      .bottom-fil-ariane-filter-icon{

      }
    }
  }
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
      &:last-child{
        margin-right: 0;
      }
      .the-formatter-content-item-text{
        @media screen and (max-width: 431px){
          display: none;
        }
      }
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
