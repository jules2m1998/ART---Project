<template>
  <div class="d-flex flex-row flex-wrap">
    <category-item v-for="(item, key) in categories" :key="key" :item="item" />
    <div id="more-btn">
      <v-btn class="mx-2" fab small color="secondary">
        <v-icon color="black">
          more_horiz
        </v-icon>
      </v-btn>
      Voir plus
    </div>
  </div>
</template>

<script>
import CategoryItem from '@/components/categoris/CategoryItem'
export default {
  name: 'CategoryList',
  components: { CategoryItem },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#more-btn{
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 12px;
  font-weight: bold;
}
.v-btn--fab.v-size--small {
  height: 30px;
  width: 30px;
}

</style>
