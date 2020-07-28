<template>
  <div class="d-flex flex-column">
    <template v-for="(item, key) in items">
      <v-text-field
        class="my-textflied"
        v-if="item.type === 'email' || item.type === 'text'"
        :key="key"
        :label="item.label"
        single-line
        outlined
        :prepend-inner-icon="item.icon"
        v-model="item.value"
        :type="item.type"
        dense
      ></v-text-field>
      <div class="div-pass" :key="key" v-else-if="item.type === 'password'">
        <v-text-field
          class="my-textflied"
          :type="item.show ? 'text' : 'password'"
          :label="item.label"
          single-line
          outlined
          :prepend-inner-icon="item.icon"
          v-model="item.value"
          dense
        ></v-text-field>
        <v-btn class="btn-pass" @mousedown="item.show = true" @mouseup="item.show = false" icon>
          <v-icon>{{ item.show ? 'visibility' : 'visibility_off' }}</v-icon>
        </v-btn>
      </div>
      <div class="div-phone" :key="key" v-else-if="item.type === 'phone'">
        <v-text-field
          class="my-textflied"
          single-line
          outlined
          :value="item.code"
          disabled
          dense
        ></v-text-field>
        <v-text-field
          class="my-textflied"
          :type="item.type"
          :label="item.label"
          single-line
          outlined
          :prepend-inner-icon="item.icon"
          v-model="item.value"
          dense
        ></v-text-field>
      </div>
      <v-autocomplete
        :items="proffessions"
        v-if="item.type === 'auto-complate'"
        :filter="customFilter"
        :key="key"
        item-text="name"
        :label="item.label"
        :value="item.value"
        :prepend-inner-icon="item.icon"
        single-line
        outlined
        dense
      ></v-autocomplete>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CustomForm',
  props: {
    inputs: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    proffessions: [
      { name: 'Florida', abbr: 'FL', id: 1 },
      { name: 'Georgia', abbr: 'GA', id: 2 },
      { name: 'Nebraska', abbr: 'NE', id: 3 },
      { name: 'California', abbr: 'CA', id: 4 },
      { name: 'New York', abbr: 'NY', id: 5 }
    ]
  }),
  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.includes(searchText) ||
        textTwo.includes(searchText)
    }
  },
  computed: {
    items () {
      const result = []
      if (this.inputs.label !== undefined) {
        return [this.inputs]
      }
      Object.keys(this.inputs).forEach((key) => {
        result.push(this.inputs[key])
      })
      return result
    }
  }
}
</script>

<style lang="scss">
  .v-text-field.v-text-field--enclosed .v-text-field__details{
    margin-bottom: 0!important;
  }
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot, .v-text-field.v-text-field--enclosed .v-text-field__details{
    margin-bottom: 0!important;
  }
  .my-textflied{
    margin-bottom: 10px!important;
    &:last-child{
      margin-bottom: 0!important;
    }
  }
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
