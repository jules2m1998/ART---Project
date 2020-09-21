<template>
  <div id="fil-ariane">
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
  .fil-ariane-container{
    display: flex;
    padding: 0;
    .fil-ariane-container-item{
      padding-right: 16px;
      display: flex;
      align-items: center;
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
      }
    }
  }
}
</style>
