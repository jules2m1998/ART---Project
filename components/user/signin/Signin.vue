<template>
  <div class="dialog-box-form">
    <custom-form :input="forms.email" v-model="forms.email.value" />
    <custom-form :input="forms.password" v-model="forms.email.value" />
    <div class="bottom-form">
      <v-checkbox
        v-model="checkbox"
        label="Se souvenir de moi"
        dense
        style="height: 20px"
      />
      <a href="#">Mot de passe oublié</a>
    </div>
    <v-btn block color="secondary" class="mt-6 black--text" @click="submit">
      Se connecter
    </v-btn>
  </div>
</template>

<script>
import CustomForm from '~/components/user/utils/CustomForm'
export default {
  name: 'Signin',
  components: { CustomForm },
  data: () => ({
    forms: {
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
      }
    },
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
    elt: null
  }),
  methods: {
    closeDialog (e) {
      this.$emit('input', false)
      document.documentElement.style.overflowY = 'auto'
    },
    setPassword (e) {
      this.forms.password.value = e
    },
    setEmail (e) {
      this.forms.email.value = e
    },
    submit () {
      this.$router.push('/user/profile')
    }
  }
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
