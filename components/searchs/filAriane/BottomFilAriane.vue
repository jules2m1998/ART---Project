<template>
  <div id="bottom-fil-ariane">
    <div class="bottom-fil-ariane-text">
      <div class="bottom-fil-ariane-text-title">
        ART à Yaoundé
      </div>
      <div class="bottom-fil-ariane-text-subtitle">
        (214 Résultats en 233ms)
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  name: 'BottomFilAriane'
}
</script>

<style lang="scss" scoped>
#bottom-fil-ariane{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
    }
    .bottom-fil-ariane-text-subtitle{
      font-family: Open Sans,sans-serif;
      font-style: italic;
      font-weight: 300;
      font-size: 14px;
      padding-bottom: 6px;
    }
  }
  .bottom-fil-ariane-filter{
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
      .bottom-fil-ariane-filter-icon{

      }
    }
  }
}
</style>
