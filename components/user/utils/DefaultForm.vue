<template>
  <v-card
    class="font-sans"
    id="form"
  >
    <div class="dialog-header">
      <span>S'inscrire</span>
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
      <component :is="type" />
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
      <p class="insc" v-if="type === 'Signin'">
        Pas encore de compte? <a href="#" @click="type='signup'">Cliquez ici pour vous inscrire</a>
      </p>
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
    type: 'Signin'
  }),
  methods: {
    closeDialog (e) {
      this.$emit('input', false)
      document.documentElement.style.overflowY = 'auto'
      console.log(document.documentElement)
    }
  },
  mounted () {
    this.elt = document.getElementById('form')
    this.elt.style.maxWidth = '500px'
    this.elt.style.margin = 'auto'
    this.elt.style.overflow = 'hidden'
    const firstParent = this.elt?.parentElement
    firstParent.style.overflowY = 'scroll'
    firstParent.style.maxWidth = 'none'
    firstParent.style.margin = '0'
    firstParent.style.paddingTop = '20px'
    firstParent.style.paddingBottom = '20px'
    firstParent.style.minHeight = '100%'
    document.body.style.overflow = 'none'
    document.documentElement.style.overflowY = 'hidden'
  }
}
</script>

<style lang="scss" scoped>
  $padding: 28px;
  $mt: 40px;
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
      font-size: 20px;
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
        li{
          margin: 10px;
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
      font-size: 14px;
      padding-bottom: 20px;
      a{
        font-weight: bold;
        color: black;
        text-decoration: underline;
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
