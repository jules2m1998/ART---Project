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
    <div class="form">
      <template v-if="type.includes('phone')">
        <custom-form v-model="newElement.value" :input="newElement" :is-required="true"/>
        <custom-form v-model="operators.value.name" :input="operators" :is-required="true"/>
        <v-checkbox
          v-model="isPro"
          :label="'Est-ce un numéro professionnel ?'"
          dense
        ></v-checkbox>
      </template>
      <template v-if="type.includes('mail')">
        <custom-form v-model="newEmail.value" :input="newEmail" />
      </template>
    </div>
    <v-card-actions>
      <div class="right">
        <v-btn color="red" text v-if="type.includes('update')" @click="deleteElt">Supprimer</v-btn>
      </div>
      <div class="left">
        <v-btn color="green" text @click="save" :disabled="required">
          <template v-if="type.includes('update')">
            Modifier
          </template>
          <template v-else>
            Ajouter
          </template>
        </v-btn>
        <v-btn color="red" text @click="resetClose">Annuler</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import dialog from '~/mixins/dialog'
import CustomForm from '~/components/user/utils/CustomForm'
import regex from '~/mixins/regex'
export default {
  name: 'DialogForm',
  components: { CustomForm },
  props: {
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    element: {
      type: Object,
      required: true
    }
  },
  mixins: [dialog, regex],
  methods: {
    remove (item, list) {
      list.splice(list.indexOf(item), 1)
      list = [...list]
    },
    save () {
      const number = {
        name: this.newElement.value,
        operator: this.operators.list.filter(phone => phone.name === this.operators.value.name)[0],
        valid: false,
        isPro: this.isPro
      }
      const email = {
        name: this.newElement.value,
        valid: false
      }
      if (this.isType('phone-add')) {
        this.$emit('add', number)
      }
      if (this.isType('phone-update')) {
        number.id = this.element.id
        this.$emit('phone-update', number)
      }
      if (this.isType('email-add')) {
        this.$emit('add', email)
      }
      if (this.isType('email-update')) {
        email.id = this.element.id
        this.$emit('email-update', email)
      }
      this.closeDialog()
    },
    deleteElt () {
      if (this.type.includes('phone')) {
        this.$emit('phone-delete', this.element.id)
      } else if (this.type.includes('email')) {
        this.$emit('email-delete', this.element.id)
      }
      this.closeDialog()
    },
    resetClose () {
      this.reset()
      this.closeDialog()
    },
    isType (element) {
      return this.type === element
    },
    reset () {
      this.newElement = {
        label: 'Nouveau numéro de téléphone',
        value: '',
        type: '',
        code: '+237'
      }
    },
    phoneRequired () {
      if (this.type.includes('phone')) {
        console.log(this.operators.value)
        return !((this.operators.value.name !== undefined && this.operators.value.name !== '') &&
          (this.newElement.value !== undefined && this.newElement.value !== '' && this.regexPhone(this.newElement.value)))
      } else if (this.type.includes('email')) {
        return !(this.newEmail.value !== '' && this.regexEmail(this.newEmail.value))
      }
    }
  },
  data: () => ({
    tel: '',
    phones: [],
    newElement: {
      label: 'Nouveau numéro de téléphone',
      value: '',
      type: '',
      code: '+237'
    },
    newEmail: {
      label: 'Email',
      icon: 'alternate_email',
      value: '',
      type: 'email'
    },
    operators: {
      label: 'Choisissez votre opérateur de téléphonie',
      icon: 'work',
      value: '',
      type: 'auto-complate',
      list: [
        {
          name: 'Orange',
          color: '#ff6600'
        },
        {
          name: 'MTN',
          color: '#febc00'
        },
        {
          name: 'Nextell',
          color: '#E31A22'
        },
        {
          name: 'Camtel',
          color: '#00adef'
        }
      ]
    },
    isPro: false
  }),
  created () {
    this.newElement = {
      label: 'Nouveau numéro de téléphone',
      value: '',
      type: '',
      code: '+237'
    }
    this.operators.value = {
      name: '',
      color: ''
    }
    if (this.type.includes('phone')) {
      this.newElement.type = 'phone'
      if (this.isType('phone-add')) {
        this.newElement.label = 'Nouveau numéro de téléphone'
      } else {
        this.newElement.value = this.element.name
        this.operators.value = this.element.operator
        this.isPro = this.element.isPro
      }
    }
    if (this.type.includes('email')) {
      this.newElement.type = 'email'
      if (!this.isType('email-add')) {
        this.newEmail.value = this.element.name
        this.newElement.valid = this.element.valid
      }
    }
    console.log(this.element)
  },
  computed: {
    required () {
      return this.phoneRequired()
    }
  }
}
</script>

<style lang="scss" scoped>
  .form{
    padding: 0 $padding 0 $padding;
    margin-top: 28px;
  }
  .v-card__actions{
    justify-content: space-between!important;
  }
</style>
