<template>
  <div class="header-second" data-sticky>
    <v-container>
      <div class="top" data-inme>
        <header-logo />
        <div style="display: flex; flex-direction: row;">
          <header-btn data-disappear style="padding-right: 12px" />
          <div data-appear style="min-height: 100px; padding-left: 12px;padding-right: 12px;">
            <div class="pulse-btn" style="position: relative; top: 26px;">
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
        </div>
      </div>
      <div class="bottom">
        <search data-search data-mount />
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;
  }
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
}
.sticky{
  position: fixed;
  top: 0;
  z-index: 15;
}
</style>
