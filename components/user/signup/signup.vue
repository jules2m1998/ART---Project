<template>
  <div class="dialog-box-form">
    <div class="d-flex flex-row">
      <custom-form :inputs="names.first" class="mr-1" />
      <custom-form :inputs="names.last" class="ml-1" />
    </div>
    <custom-form :inputs="other" />
    <div class="bottom-form">
      <v-checkbox
        v-model="checkbox"
        label="Se souvenir de moi"
        dense
        style="height: 20px"
      ></v-checkbox>
      <a href="#">Mot de passe oublié</a>
    </div>
    <v-btn block color="secondary" class="mt-6 black--text">S'inscrire</v-btn>
  </div>
</template>

<script>
import CustomForm from '~/components/user/utils/CustomForm'
export default {
  name: 'signup',
  components: { CustomForm },
  data: () => ({
    names: {
      first: {
        label: 'Nom',
        icon: 'account_circle',
        value: '',
        type: 'text'
      },
      last: {
        label: 'Prénom',
        icon: '',
        value: '',
        type: 'email'
      }
    },
    other: {
      email: {
        label: 'Email',
        icon: 'alternate_email',
        value: '',
        type: 'email'
      },
      password: {
        label: 'Mot de passe',
        icon: 'https',
        value: '',
        type: 'password',
        show: false
      },
      passwordConfirm: {
        label: 'Confirmez votre mot de passe',
        icon: 'https',
        value: '',
        type: 'password',
        show: false
      }
    }
  })
}
</script>

<style lang="scss" scoped>
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
</style>
