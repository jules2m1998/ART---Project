<template>
  <div class="d-flex flex-column">
    <v-text-field
      v-if="input.type === 'email' || input.type === 'text'"
      v-model="element"
      class="my-textflied"
      :label="input.label"
      single-line
      outlined
      :prepend-inner-icon="input.icon"
      :type="input.type"
      @input="setElement"
      dense
    />
    <div v-else-if="input.type === 'password'" class="div-pass">
      <v-text-field
        v-model="element"
        class="my-textflied"
        :type="input.show ? 'text' : 'password'"
        :label="input.label"
        single-line
        outlined
        :prepend-inner-icon="input.icon"
        @input="setElement"
        dense
      />
      <v-btn class="btn-pass" icon @mousedown="input.show = true" @mouseup="input.show = false">
        <v-icon>{{ input.show ? 'visibility' : 'visibility_off' }}</v-icon>
      </v-btn>
    </div>
    <div v-else-if="input.type === 'phone'" class="div-phone">
      <v-text-field
        class="my-textflied"
        single-line
        outlined
        :value="input.code"
        disabled
        dense
      />
      <v-text-field
        v-model="element"
        class="my-textflied"
        :type="input.type"
        :label="input.label"
        single-line
        outlined
        :prepend-inner-icon="input.icon"
        @input="setElement"
        :rules="errors"
        dense
      />
    </div>
    <v-autocomplete
      v-if="input.type === 'auto-complate'"
      :items="input.list"
      item-text="name"
      item-value="name"
      :label="input.label"
      v-model="element"
      @input="setElement"
      :prepend-inner-icon="input.icon"
      :rules="errors"
      single-line
      outlined
      dense
    />
  </div>
</template>

<script>
import regex from '~/mixins/regex'
export default {
  name: 'CustomForm',
  mixins: [regex],
  props: {
    /**
     * Exemple : first: {
        label: 'Nom',
        icon: 'account_circle',
        value: '',
        type: 'text'
      },
     */
    input: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    isRequired: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    element: ''
  }),
  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()
      return textOne.includes(searchText) ||
        textTwo.includes(searchText)
    },
    isType (type) {
      return this.input.type === type
    },
    setElement () {
      this.$emit('input', this.element)
    }
  },
  computed: {
    errors () {
      const rules = []
      if (this.isRequired) {
        rules.push(value => !!value || 'Champs obligatoire')
      }
      if (this.isType('phone')) {
        rules.push(value => this.regexPhone(value) || 'Numéro de téléphone invalide')
      }
      return rules
    }
  }
}
</script>

<style lang="scss">
  .div-pass{
    position: relative;
    .btn-pass{
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .div-phone{
    display: grid;
    grid-template-columns: 2fr 12fr;
    grid-gap: 8px;
    @media screen and (max-width: 568px) and (min-width: 423px){
      grid-template-columns: 3fr 12fr;
    }
    @media screen and (max-width: 423px){
      grid-template-columns: 3fr 10fr;
    }
  }
</style>
