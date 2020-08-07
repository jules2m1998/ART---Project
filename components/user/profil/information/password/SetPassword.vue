<template>
  <v-expansion-panel class="mt-2 expendable--title">
    <v-expansion-panel-header>Modifier le mot de passe</v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="row-box row-2">
        <div class="d-flex  align-center input-block">
          <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Ancien mot de passe</span>
        </div>
        <div cols="8">
          <custom-form v-model="old.value" :input="old" />
        </div>
      </div>
      <div class="row-box row-2">
        <div class="d-flex align-center">
          <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Nouveau mot de passe</span>
        </div>
        <div class="my-double">
          <v-text-field
            v-model="newPassword"
            type="password"
            label="Nouveau mot de passe"
            required
            single-line
            outlined
            dense
          />
          <v-text-field
            v-model="passwordConfirm"
            type="password"
            label="confirmer votre mot de passe"
            required
            single-line
            outlined
            dense
          />
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <div class="d-flex justify-end">
        <v-btn :disabled="setVerify">
          Annuler
        </v-btn>
        <v-btn :disabled="setVerify" class="mx-2">
          Enregistrer
        </v-btn>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import CustomForm from '~/components/user/utils/CustomForm'
export default {
  name: 'SetPassword',
  components: { CustomForm },
  data: () => ({
    old: {
      label: '',
      icon: '',
      value: '',
      type: 'password',
      show: false
    },
    newPassword: '',
    passwordConfirm: ''
  }),
  computed: {
    setVerify () {
      return this.old.value === '' || this.newPassword === '' || this.passwordConfirm === ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile) > .v-expansion-panel--active {
    border-radius: $radius!important;
  }
  .phone-chip, .email-chip{
    display: flex;
    flex-direction: row;
    align-items: center;
    .operator{
      padding: 8px;
      color: white;
      margin-right: 6px;
      background: blue;
    }
    .buttons{
      display: flex;
      flex-direction: row;
      margin-left: 6px;
      button{
        height: 16px;
        border-radius: 16px;
        width: 16px;
        background: blue;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 3px;
        &.edit--btn{
          background: transparent;
          margin-left: 12px;
          i{
            color: black;
          }
        }
        i{
          font-size: 10px;
        }
      }
    }
  }
  .phone-chip--parent{
    padding: 0!important;
  }
  .row-box {
    height: 60px !important;
  }
  .datepickerInput >>> .v-text-field__slot input {
    cursor: default !important;
  }
  .disable-input >>> .v-text-field__slot input{
    color: rgba(0,0,0,.78) !important;
  }
  .disable-input >>> .v-input__slot{
    &:before{
      border-color: #EDEDED !important;
    }
  }
  .disable-input >>> .v-input__icon--append .v-icon {
    color: rgba(0,0,0,.2) !important;
  }
  .disable-input >>> .v-text-field__slot input{
    color: rgba(0,0,0,.78) !important;
  }
  .enable-input >>> .v-input__slot{
    &:before{
      border-color: rgba(0,0,0,.5) !important;
    }
  }
  .enable-input >>> .v-input__icon--append .v-icon {
    color: rgba(0,0,0,.5) !important;
  }
  .enable-input >>> .v-text-field__slot input{
    color: rgba(0,0,0,.87) !important;
  }
  .close-icon >>> .v-chip .v-chip__close.v-icon.v-icon--right {
    color: rgba(0,0,0,.78) !important;
  }
  @media (min-width: 600px) {
    .row-1 {
      display: grid;
      grid-template-columns: 2fr 3fr 3fr;
      grid-gap: 30px;
      padding: 10px;
    }
    .row-2 {
      display: grid;
      grid-template-columns: 2fr 6fr;
      grid-gap: 30px;
      padding: 10px;
    }
    .label-text{
      display: block;
    }
  }
  @media (max-width: 600px){
    .row-1 {
      display: grid;
      grid-template-columns: 20px auto auto;
      grid-gap: 20px;
      padding: 10px;
    }
    .row-2 {
      display: grid;
      grid-template-columns: 20px auto;
      grid-gap: 20px;
      padding: 10px;
    }
    .label-text{
      display: none;
    }
    .label-icon{
      display: block;
    }
  }
  .my-double{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
  .label-text{
    position: relative;
    bottom: 10px;
    color: black!important;
    font-size: 12px!important;
  }
  .input--dialog--box{
    position: relative;
    .input--dialog--box--button{
      position: absolute;
      top: 2px;
      right: 0;
      button{
        i{
          font-size: 18px!important;
        }
      }
    }
  }
</style>
