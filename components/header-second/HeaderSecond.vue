<template>
  <div class="header-second" data-sticky>
    <v-container>
      <div class="top">
        <header-logo class="logo" />
        <div class="menu">
          <header-btn />
          <div class="pulse-btn">
            <v-btn
              id="profile-btn"
              width="40"
              height="40"
              fab
              dark
              large
              color="white"
              depressed
            >
              <v-icon color="black" size="20">
                fas fa-bars
              </v-icon>
            </v-btn>
          </div>
        </div>
        <div data-animate class="bottom">
          <search data-search data-mount />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeaderLogo from '@/components/header-logo/HeaderLogo'
import HeaderBtn from '@/components/header-btn/HeaderBtn'
import sticky from '@/mixins/sticky'
import Search from '@/components/search/Search'
export default {
  name: 'HeaderSecond',
  components: { Search, HeaderBtn, HeaderLogo },
  mixins: [sticky]
}
</script>

<style lang="scss" scoped>
.header-second{
  background: url("/bg.jpg") no-repeat;
  .top{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    .logo{
      order: 1;
    }
    .menu{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: calc(100% - 270px);
      order: 2;
    }
    .bottom{
      order: 3;
      width: auto;
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      padding-top: 50px;
    }
    [data-animate]{
      //border: 1px solid red;
    }
  }
  &.sticky{
    .top{
      flex-wrap: nowrap;
      justify-content: space-between;
      .menu{
        order: 3;
        width: auto;
      }
      .bottom{
        order: 2;
        padding-top: 0;
      }
    }
  }
}
.sticky{
  position: fixed;
  top: 0;
  z-index: 15;
}
</style>
