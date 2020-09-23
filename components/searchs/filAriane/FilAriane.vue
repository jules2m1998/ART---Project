<template>
  <div id="fil-ariane">
    <div class="fil-ariane-ico">
      <v-icon>
        home
      </v-icon>
      <div class="fil-ariane-ico-dots">
        <v-icon v-for="i in 3" :key="i" size="6" class="fil-ariane-ico-dot">
          lens
        </v-icon>
      </div>
    </div>
    <ul class="fil-ariane-container">
      <li v-for="(v, k) in links" :key="k" class="fil-ariane-container-item">
        <router-link :to="v.to" class="fil-ariane-container-item-link">
          {{ v.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilAriane',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#fil-ariane{
  display: flex;
  align-items: center;
  .fil-ariane-ico{
    margin-right: 18px;
    position: relative;
    .fil-ariane-ico-dots{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 28px;
      left: 9px;
      top: 28px;
      position: absolute;
      .fil-ariane-ico-dot{
        &:first-child{
          color: rgba(#000000, .42);
        }
        &:nth-child(2){
          color: rgba(#000000, .28);
        }
        &:last-child{
          color: rgba(#000000, .18);
        }
      }
    }
  }
  .fil-ariane-container{
    display: flex;
    padding: 0;
    .fil-ariane-container-item{
      padding-right: 16px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 405px) {
        padding-right: 8px;
      }
      &:last-child{
        padding-right: 0;
      }
      &:before{
        content: "";
        width: 6px;
        height: 6px;
        background: #C4C4C4;
        display: inline-block;
        border-radius: 6px;
        margin: 0 16px;
      }
      &:first-child:before{
        margin-left: 0;
      }
      .fil-ariane-container-item-link{
        font-family: Google Sans,sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 17px;
        color: rgba(0, 0, 0, 0.87);
        white-space: nowrap;
        @media screen and (max-width: 405px) {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 53px;
        }
      }
    }
  }
}
</style>
