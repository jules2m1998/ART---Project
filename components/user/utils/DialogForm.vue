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
      <custom-form v-model="newElement.value" :input="newElement" v-if="isType('phone-add')" :is-required="true"/>
      <custom-form v-model="operators.value" :input="operators" v-if="isType('phone-add')" :is-required="true"/>
      <v-checkbox
        v-model="isPro"
        :label="'Etes-vous un proffessionnel ?'"
        dense
      ></v-checkbox>
    </div>
    <v-card-actions>
      <div class="right">
        <v-btn color="red" text @click="resetClose" v-if="type.includes('update')">Supprimer</v-btn>
      </div>
      <div class="left">
        <v-btn color="green" text @click="save" :disabled="!required">Ajouter</v-btn>
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
      console.log(this.operators.value)
      const number = {
        name: this.newElement.value,
        operator: this.operators.list.filter(phone => phone.name === this.operators.value)[0],
        valid: false,
        isPro: this.isPro
      }
      this.$emit('add', number)
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
      return (this.operators.value !== undefined && this.operators.value !== '') &&
        (this.newElement.value !== undefined && this.newElement.value !== '' && this.regexPhone(this.newElement.value))
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
    if (this.isType('phone-add')) {
      this.newElement.label = 'Nouveau numéro de téléphone'
      this.newElement.type = 'phone'
    }
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
