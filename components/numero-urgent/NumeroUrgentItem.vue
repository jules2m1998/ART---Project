<template>
  <div class="my-number ma-1" :style="'background:' + item.color">
    <div class="header-title">
      <div class="my-phone">
        <v-icon color="white">
          phone
        </v-icon>
        {{ item.number }}
      </div>
      <div class="my-title">
        {{ item.title }}
      </div>
    </div>
    <div class="my-descr">
      {{ item.description }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'NumeroUrgentItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$carre: 200px;
.my-number{
  width: $carre;
  height: $carre;
  border-radius: 6px;
  padding: 10px 20px;
  @media screen and (max-width: 440px){
    width: 100%;
  }
  @media screen and (max-width: 648px) and (min-width: 440px){
    width: 45%;
  }
  .header-title{
    display: flex;
    width: 100%;
    flex-direction: column;
    .my-phone{
      color: white;
      font-size: 36px;
      font-weight: bold;
    }
    .my-title{
      font-size: 14px;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
    }
  }
  .my-descr{
    font-size: 11px;
    text-overflow: ellipsis;
    color: #e5dada;
  }
}
</style>
