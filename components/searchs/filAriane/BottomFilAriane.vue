<template>
  <div id="bottom-fil-ariane" :class="{ small: small }">
    <v-icon class="bottom-fil-ariane-icon">
      settings_backup_restore
    </v-icon>
    <div class="bottom-fil-ariane-text">
      <div class="bottom-fil-ariane-text-title">
        ART à Yaoundé
      </div>
      <div class="bottom-fil-ariane-text-subtitle">
        (214 Résultats en 233ms)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomFilAriane',
  props: {
    small: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
#bottom-fil-ariane{
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: auto;
  &.small{
    .bottom-fil-ariane-text{
      .bottom-fil-ariane-text-title{
        font-size: 16px;
      }
      .bottom-fil-ariane-text-subtitle{
        font-size: 14px;
        padding-bottom: 2px;
      }
    }
  }
  .bottom-fil-ariane-icon{
    margin-right: 18px;
    @media screen and (max-width: 405px) {
      margin-top: 7px;
      align-self: flex-start;
    }
  }
  .bottom-fil-ariane-text{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    .bottom-fil-ariane-text-title{
      font-family: Open Sans,sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      margin-right: 13px;
      white-space: nowrap;
    }
    .bottom-fil-ariane-text-subtitle{
      font-family: Open Sans,sans-serif;
      font-style: italic;
      font-weight: 300;
      font-size: 14px;
      padding-bottom: 6px;
      white-space: nowrap;
    }
  }
}
</style>
