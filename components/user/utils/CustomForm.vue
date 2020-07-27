<template>
  <div class="d-flex flex-column">
    <template v-for="(item, key) in items">
      <v-text-field
        class="my-textflied"
        v-if="item.type !== 'password'"
        :key="key"
        :label="item.label"
        single-line
        outlined
        :prepend-inner-icon="item.icon"
        v-model="item.value"
        dense
      ></v-text-field>
      <div class="div-pass" :key="key" v-else-if="item.type === 'password'">
        <v-text-field
          class="my-textflied"
          :key="key"
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
  computed: {
    items () {
      const result = []
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
</style>
