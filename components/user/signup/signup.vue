<template>
  <div class="dialog-box-form">
    <div class="d-flex flex-row">
      <custom-form :inputs="form.first" class="mr-1" />
      <custom-form :inputs="form.last" class="ml-1" />
    </div>
    <custom-form :inputs="form.email" />
    <custom-form :inputs="form.phone" />
    <custom-form :inputs="form.password" class="mr-1" />
    <v-checkbox
      v-model="checkbox"
      label="Je suis un professionnel"
      color="primary"
      hide-details
      dense
      style="position: relative; bottom: 12px"
    />
    <transition name="wither">
      <custom-form v-if="checkbox" :inputs="form.proffessions" />
    </transition>
    <v-btn block color="secondary" class="mt-6 black--text">
      S'inscrire
    </v-btn>
  </div>
</template>

<script>
import CustomForm from '~/components/user/utils/CustomForm'
export default {
  name: 'Signup',
  components: { CustomForm },
  data: () => ({
    form: {
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
      },
      email: {
        label: 'Email',
        icon: 'alternate_email',
        value: '',
        type: 'email'
      },
      phone: {
        label: 'Téléphone',
        value: '',
        type: 'phone',
        code: '+237'
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
      },
      proffessions: {
        label: 'Choississez votre proffession',
        icon: 'work',
        value: '',
        type: 'auto-complate'
      }
    },
    checkbox: false
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

  .wither-enter-active {
    animation: animWithIn 1s;
  }
  .wither-leave-active {
    animation: animWithOut 1s;
  }
  @keyframes animWithOut {
    from {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    to {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }

  @keyframes animWithIn {
    from {
      width: 0;
      height: 0;
      opacity: 0;
    }
    to {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
  }
</style>
