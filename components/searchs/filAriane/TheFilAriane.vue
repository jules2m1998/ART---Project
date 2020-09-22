<template>
  <div id="the-fil-ariane">
    <fil-ariane :links="ariane" style="margin-bottom: 27px;" />
    <bottom-fil-ariane />
  </div>
</template>

<script>
import FilAriane from '@/components/searchs/filAriane/FilAriane'
import BottomFilAriane from '@/components/searchs/filAriane/BottomFilAriane'
export default {
  name: 'TheFilAriane',
  components: { BottomFilAriane, FilAriane },
  props: {
    ariane: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#the-fil-ariane{
}
</style>
