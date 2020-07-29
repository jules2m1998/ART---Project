<template>
  <v-card
    class="font-sans"
    id="my-dialog"
  >
    <div class="dialog-header">
      <span id="dialog-title">{{ title }}</span>
      <v-btn icon @click="closeDialog" color="black">
        <v-icon>close</v-icon>
      </v-btn>
    </div>
    <div class="dialog-box-mail">
      <div class="dialog-box-title">
        <div class="blue-block"></div>
        <div class="text">
          Par mail
        </div>
      </div>
      <component :is="isSignin ? 'Signin' : 'signup'" />
    </div>
    <div class="dialog-box-social">
      <div class="dialog-box-title">
        <div class="blue-block"></div>
        <div class="text">
          Ou via réseaux sociaux
        </div>
      </div>
      <div class="social-connect">
        <ul>
          <li v-for="(item, key) in icons" :key="key">
            <v-btn class="mx-2" dark small :color="item.color">
              <v-icon class="white--text">{{ item.ico }}</v-icon>
            </v-btn>
          </li>
        </ul>
        <p>Soyez sans crainte, nous ne publierons rien sur vos médias sociaux sans votre accord</p>
      </div>
      <template>
        <p class="insc" v-if="isSignin">
          Pas encore de compte? <a href="#" @click="isSignin=false">Cliquez ici pour vous inscrire !</a>
        </p>
        <p class="insc" v-else>
          Déja un compte ? <a href="#" @click="isSignin=true">Cliquez ici pour vous connecter !</a>
        </p>
      </template>
    </div>
  </v-card>
</template>

<script>
import CustomForm from '~/components/user/utils/CustomForm'
import Signin from '~/components/user/signin/Signin'
import signup from '~/components/user/signup/signup'

export default {
  name: 'DefaultForm',
  components: { CustomForm, Signin, signup },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    checkbox: false,
    icons: [
      {
        ico: 'fab fa-google-plus-g',
        link: '#',
        color: 'google'
      },
      {
        ico: 'fab fa-facebook-f',
        link: '#',
        color: 'facebook'
      },
      {
        ico: 'fab fa-twitter',
        link: '#',
        color: 'twitter'
      },
      {
        ico: 'fab fa-linkedin-in',
        link: '#',
        color: 'linkedin'
      }
    ],
    elt: null,
    type: 'Signin',
    isSignin: true
  }),
  methods: {
    closeDialog (e) {
      this.$emit('input', false)
      document.documentElement.style.overflowY = 'auto'
      this.isSignin = true
    }
  },
  mounted () {
    this.elt = document.getElementById('my-dialog')
    const firstParent = this.elt?.parentElement
    firstParent.style.overflowY = 'scroll'
    firstParent.style.maxWidth = 'none'
    firstParent.style.margin = '0'
    firstParent.style.paddingTop = '20px'
    firstParent.style.paddingBottom = '20px'
    firstParent.style.minHeight = '100%'
    document.body.style.overflow = 'none'
    document.documentElement.style.overflowY = 'hidden'
  },
  computed: {
    title () {
      return this.isSignin ? 'Se connecter' : 'S\'inscrire'
    }
  }
}
</script>

<style lang="scss" scoped>
  $padding: 28px;
  $mt: 40px;
  @font-face {
    font-family: kaushanscript;
    src: url('/fonts/KaushanScript-Regular.ttf');
  }
  #my-dialog{
    max-width: 500px;
    margin: auto;
    overflow: hidden;
    @media screen and (max-width: 615px) {
      max-width: 90%;
    }
  }
  .dialog-header{
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 $padding 0 $padding;
    background: #e4b727;
    border-bottom: 2px solid $primary;
    span{
      color: $primary;
      font-size: 26px;
      font-family: kaushanscript,sans-serif;
    }
  }
  .dialog-box-mail{
    margin-top: $mt;
    .dialog-box-form{
      padding: 0 $padding 0 $padding;
      .bottom-form{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .v-input--selection-controls {
          margin-top: 0;
          padding-top: 0;
        }
        a{
          color: #312f2f;
          text-decoration: underline;
        }
      }
      button{
        font-weight: bold;
      }
    }
  }
  .dialog-box-social{
    margin-top: $mt;
    .social-connect{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 20px;
      ul{
        width: 76%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-left: 0!important;
        li{
          margin-bottom: 10px;
          button{
            width: 33px;
            min-width: 0;
          }
        }
      }
      p{
        width: 78%;
        text-align: center;
        color: #312f2f;
        font-size: 12px;
        font-style: italic;
      }
    }
    p.insc{
      text-align: center;
      font-size: 0.9rem;
      padding-bottom: 20px;
      a{
        font-weight: 600;
        color: $primary;
        transition: color 0.1s;
        &:hover{
          color: #0653c6;
        }
      }
    }
  }
  .dialog-box-title{
    color: $primary;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    .blue-block{
      box-sizing: border-box;
      width: $padding;
      background: $primary;
      position: relative;
      right: 6px;
      border-radius: 0 4px 4px 0;
      height: 17px;
      align-self: center;
    }
  }
</style>
