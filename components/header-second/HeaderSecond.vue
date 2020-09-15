<template>
  <div class="header-second" data-sticky>
    <v-container>
      <header-logo />
      <header-btn />
    </v-container>
  </div>
</template>

<script>
import HeaderLogo from '@/components/header-logo/HeaderLogo'
import HeaderBtn from '@/components/header-btn/HeaderBtn'
import sticky from '@/mixins/sticky'
export default {
  name: 'HeaderSecond',
  components: { HeaderBtn, HeaderLogo },
  mixins: [sticky]
}
</script>

<style lang="scss" scoped>
  .header-second{
    background: url("/bg.jpg") no-repeat;
    .container{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .sticky{
    position: fixed;
    top: 0;
    z-index: 15;
  }
</style>
