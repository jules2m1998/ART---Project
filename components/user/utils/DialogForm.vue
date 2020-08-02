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
      <custom-form v-model="this.newElement.value" :input="newElement" v-if="isType('phone-add')"/>
      {{ newElement }}
    </div>
    <v-card-actions>
      <v-btn color="red" text @click="resetClose">Annuler</v-btn>
      <v-btn color="green" text @click="save">Ok</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import dialog from '~/mixins/dialog'
import CustomForm from '~/components/user/utils/CustomForm'
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
  mixins: [dialog],
  methods: {
    remove (item, list) {
      list.splice(list.indexOf(item), 1)
      list = [...list]
    },
    saveElement (e) {
      const val = {
        name: this.tel,
        valid: false
      }
      this.phones.push({ ...val })
      this.tel = ''
    },
    save () {
      const vl = this.phones
      this.tel = ''
      this.$emit('number', vl)
      this.closeDialog()
    },
    resetClose () {
      this.reset()
      this.closeDialog()
    },
    isType (element) {
      return this.type === element
    },
    setPhone (e) {
      this.newElement.value = e
    }
  },
  data: () => ({
    tel: '',
    phones: [],
    newElement: {}
  }),
  created () {
    if (this.isType('phone-add')) {
      this.newElement = {
        label: 'Nouveau numéro de téléphone',
        value: '',
        type: 'phone',
        code: '+237'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form{
    padding: 0 $padding 0 $padding;
  }
</style>
