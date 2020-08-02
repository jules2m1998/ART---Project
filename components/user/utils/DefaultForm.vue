<template>
  <v-card
    id="my-dialog"
    class="font-sans"
  >
    <div class="dialog-header">
      <span id="dialog-title">{{ title }}</span>
      <v-btn color="black" icon @click="closeDialog">
        <v-icon>close</v-icon>
      </v-btn>
    </div>
    <div class="dialog-box-mail">
      <div class="dialog-box-title">
        <div class="blue-block" />
        <div class="text">
          Par mail
        </div>
      </div>
      <component :is="isSignin ? 'Signin' : 'signup'" />
    </div>
    <div class="dialog-box-social">
      <div class="dialog-box-title">
        <div class="blue-block" />
        <div class="text">
          Ou via réseaux sociaux
        </div>
      </div>
      <div class="social-connect">
        <ul>
          <li v-for="(item, key) in icons" :key="key">
            <v-btn class="mx-2" dark small :color="item.color">
              <v-icon class="white--text">
                {{ item.ico }}
              </v-icon>
            </v-btn>
          </li>
        </ul>
        <p>Soyez sans crainte, nous ne publierons rien sur vos médias sociaux sans votre accord</p>
      </div>
      <template>
        <p v-if="isSignin" class="insc">
          Pas encore de compte? <a href="#" @click="isSignin=false">Cliquez ici pour vous inscrire !</a>
        </p>
        <p v-else class="insc">
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
import dialog from '~/mixins/dialog'

export default {
  name: 'DefaultForm',
  components: { CustomForm, Signin, signup },
  mixins: [dialog],
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
  computed: {
    title () {
      return this.isSignin ? 'Se connecter' : 'S\'inscrire'
    }
  }
}
</script>

<style lang="scss" scoped>
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
