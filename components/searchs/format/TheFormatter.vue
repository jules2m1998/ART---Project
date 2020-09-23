<template>
  <div id="the-formatter" :class="{ small }">
    <div class="the-formatter-btn">
      <button>
        <v-icon color="primary" size="18" class="the-formatter-btn-icon">
          sort
        </v-icon>
        <div class="the-formatter-btn-text">
          Pertinence
        </div>
        <v-icon size="18" class="the-formatter-btn-icon-filter">
          arrow_drop_down
        </v-icon>
      </button>
    </div>
    <ul class="the-formatter-content">
      <template
        v-for="(v, k) in formatters"
      >
        <li
          :key="k"
          class="the-formatter-content-item"
          :class="{ 'the-formatter-content-item-active': v.isActive, 'invisible': v.smallInvisible }"
          @click="makeActive(v)"
        >
          <v-icon size="16" class="the-formatter-content-item-icon">
            {{ v.icon }}
          </v-icon>
          <div class="the-formatter-content-item-text">
            {{ v.name }}
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheFormatter',
  props: {
    small: {
      type: Boolean,
      default: false,
      required: false
    }
  },
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
        isActive: false,
        smallInvisible: true
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
  &.small{
    .the-formatter-btn{
      order: 2;
      border-left: 1px solid #cccccc;
      padding-left: 10px;
    }
    .the-formatter-content {
      padding-left: 0;
      padding-right: 10px;
      border-left: unset;
      .the-formatter-content-item.invisible{
        display: none;
      }
    }
  }
  .the-formatter-btn{
    margin-right: 10px;
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
    }
  }
  .the-formatter-content{
    display: flex;
    border-left: 1px solid #cccccc;
    padding-left: 10px;
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
