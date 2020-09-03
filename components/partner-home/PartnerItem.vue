<template>
  <div class="partner--item">
    <div class="partner--img">
      <img :src="item.img" alt="mtn">
    </div>
    <div class="partner-title">
      MTN Cameroun
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .partner--item{
    width: 120px;
    height: 120px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 6px;
    .partner--img{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 70%;
      img{
        width: 70%;
      }
    }
    .partner-title{
      font-size: 12px;
      text-align: center;
    }
  }
</style>
