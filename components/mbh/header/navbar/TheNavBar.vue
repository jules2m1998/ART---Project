<template>
  <div id="the-nav-bar" class="mbh-container">
    <div class="the-nav-bar-logo">
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
    </div>
    <div class="the-nav-bar-menu">
      <ul class="the-nav-bar-menu-list">
        <li
          v-for="(v, i) in menus"
          :key="i"
          class="the-nav-bar-menu-list-item"
          :class="{ active: v.isActive }"
        >
          <span class="the-nav-bar-menu-identify" />
          <nuxt-link :to="'#'" class="the-nav-bar-menu-list-item-link" @click.prevent="e => makeActive(v, e)">
            {{ v.name }}
          </nuxt-link>
        </li>
      </ul>
      <div class="the-nav-bar-menu-burger" @click="d_visisble = true">
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24H36V20H0V24ZM0 14H36V10H0V14ZM0 0V4H36V0H0Z" fill="#6D1F1C" />
        </svg>
      </div>
    </div>
    <div class="the-nav-bar-drawer" :class="{ d_visisble }">
      <div class="the-nav-bar-drawer-header">
        <div class="the-nav-bar-drawer-header-logo">
          <logo white />
        </div>
        <v-btn color="white" icon @click="d_visisble = false">
          <v-icon>close</v-icon>
        </v-btn>
      </div>
      <div class="separator" />
      <div class="the-nav-bar-drawer-menu">
        <ul class="the-nav-bar-drawer-menu-list">
          <li
            v-for="(v, i) in menus"
            :key="i"
            class="the-nav-bar-drawer-menu-list-item"
            :class="{ active: v.isActive }"
          >
            <span class="the-nav-bar-drawer-menu-identify" />
            <nuxt-link :to="'#'" class="the-nav-bar-drawer-menu-list-item-link">
              {{ v.name }}
            </nuxt-link>
          </li>
        </ul>
        <div class="circle" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/mbh/header/navbar/logo'
export default {
  name: 'TheNavBar',
  components: { Logo },
  data: () => ({
    menus: [
      {
        name: 'Home',
        to: '/',
        isActive: true
      },
      {
        name: 'About us',
        to: '/',
        isActive: false
      },
      {
        name: 'Services',
        to: '/',
        isActive: false
      },
      {
        name: 'Our Team',
        to: '/',
        isActive: false
      },
      {
        name: 'Contact',
        to: '/',
        isActive: false
      }
    ],
    d_visisble: false
  }),
  mounted () {
    window.addEventListener('resize', () => {
      this.d_visisble = false
    })
  },
  methods: {
    makeActive (active, e) {
      e.preventDefault()
      this.menus.forEach((v) => {
        v.isActive = v.name === active.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$active-color:  #6D1F1C;
  #the-nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    background: white;
    .the-nav-bar-menu{
      display: flex;
      @media screen and (max-width: 890px){
        .the-nav-bar-menu-burger{
          display: inline-block!important;
        }
        .the-nav-bar-menu-list{
          display: none!important;
        }
      }
      .the-nav-bar-menu-burger{
        display: none;
      }
      .the-nav-bar-menu-list {
        display: flex;
        .the-nav-bar-menu-list-item{
          &.active{
            position: relative;
            .the-nav-bar-menu-identify{
              width: 24px;
              height: 4px;
              background: $active-color;
              display: inline-block;
              position: absolute;
              left: 50%;
              transform: translate(-50%, 0);
              top: -22px;
              &:after{
                content: '';
                display: inline-block;
                width: 2px;
                height: 24px;
                background: $active-color;

                position: absolute;
                left: 50%;
                transform: translate(-50%, -100%);
              }
            }
            .the-nav-bar-menu-list-item-link{
              color: $active-color;
            }
          }
          .the-nav-bar-menu-list-item-link{
            font-family: Titillium Web, sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 28px;
            color: #BBBBBB;
            margin: 0 18px;
            white-space: nowrap;
          }
        }
      }
    }
    .the-nav-bar-drawer{
      position: absolute;
      transform: translateX(100%);
      display: none;
      background: $active-color;
      right: 0;
      top: 0;
      width: 100%;
      height: 760px;
      overflow-y: hidden;
      z-index: 12;
      transition: transform 0.1s linear;
      &.d_visisble{
        transform: translateX(0);
        display: inline-block;
      }
      .the-nav-bar-drawer-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 16px 18px 16px;
      }
      .separator{
        width: 100%;
        height: 2px;
        background: #FFFFFF;
        margin-bottom: 50px;
      }
      .the-nav-bar-drawer-menu-list{
        .the-nav-bar-drawer-menu-list-item{
          margin-bottom: 56px;
          display: flex;
          align-items: center;
          &.active{
            .the-nav-bar-drawer-menu-list-item-link{
              color: #FFFFFF;
            }
          }
          .the-nav-bar-drawer-menu-identify{
            width: 4px;
            height: 24px;
            display: inline-block;
            background: white;
            position: relative;
            margin-left: 12px;
            &:after{
              content: '';
              display: inline-block;
              width: 12px;
              height: 2px;
              background: white;
              position: absolute;
              top: 50%;
              transform: translate(-100%, -50%);
            }
          }
          .the-nav-bar-drawer-menu-list-item-link{
            font-family: Titillium Web, sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            color: #BBBBBB;
            margin-left: 36px;
          }
        }
      }
      .circle{
        width: 339px;
        height: 339px;
        border-radius: 50%;
        background: #C4C4C4;
        position: absolute;
        right: -84px;
        bottom: -31px;
        opacity: .2;
      }
    }
  }
</style>
