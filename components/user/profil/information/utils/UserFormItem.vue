<template>
  <div class="form--item">
    <label :for="'form-item' + theKey">{{ input.label }}</label>
    <div class="value" :id="'form-item-' + theKey">
      <template v-if="verify('checkbox')">
        <span
          v-for="(item, key) in input.items"
          :key="key"
        >
          <v-checkbox
            class="my-checkbox"
            v-model="input.value"
            :label="item.label"
            :value="item.label"
            dense
          />
        </span>
      </template>
      <template v-else-if="verify('radio')">
        <v-radio-group v-model="input.value" :mandatory="false" style="margin: 0;padding: 0;width: 100%">
          <div class="radio--group">
            <span v-for="(item, key) in input.items" :key="key">
              <v-radio dense :label="item.label" :value="item.label"></v-radio>
            </span>
          </div>
        </v-radio-group>
      </template>
      <template v-else-if="verify('text')">
        <v-text-field
          class="my-textflied"
          single-line
          outlined
          v-model="input.value"
          :type="input.type"
          dense
        ></v-text-field>
      </template>
      <template v-else-if="verify('date')">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="computedDateFormatted"
              prepend-inner-icon="event"
              v-bind="attrs"
              v-on="on"
              single-line
              outlined
              dense
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>
      </template>
      <template v-else-if="verify('phone')">
        <div class="number">
          <input type="text">
          <button class="verif">vérifier</button>
          <button class="add">
            <v-icon>add</v-icon>
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFormItem',
  props: {
    input: {
      type: Object,
      required: true
    },
    theKey: {
      type: String,
      required: true
    }
  },
  data: vm => ({
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu2: false
  }),
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.input.value.toISOString().substr(0, 10))
    }
  },
  watch: {
    input (val) {
      this.dateFormatted = this.formatDate(this.input.date)
    }
  },
  methods: {
    formatDate (date) {
      if (!date) {
        return null
      }

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    verify (value) {
      return this.input.type === value
    }
  }
}
</script>

<style lang="scss" scoped>
  .form--item{
    display: grid;
    grid-template-columns: 2fr 7fr;
    label{
      display: flex;
      margin-top: 5px;
    }
    .value{
      display: flex;
      flex-direction: row;
      span .my-checkbox{
        margin: 0;
        padding: 0;
      }
      span{
        width: 50%;
      }
      .radio--group{
        display: flex;
        flex-direction: row;
        span{
          width: 50%;
        }
      }
      .number{
        width: 100%;
        display: flex;
        flex-direction: row;
        input{
          flex-grow: 2;
          height: 36px;
          padding: 10px;
          border: 1px solid rgb(158, 158, 158);
          border-radius: 4px 0 0 4px;
        }
        .verif{
          background: #C2C5E3;
          padding: 6px;
          border-radius: 0 4px 4px 0;
          border-top: 1px solid rgb(158, 158, 158);
          border-right: 1px solid rgb(158, 158, 158);
          border-bottom: 1px solid rgb(158, 158, 158);
          color: black;
        }
        .add{
          padding: 5px;
          border-radius: 4px 4px 4px 4px;
          border: 1px solid rgb(158, 158, 158);
          margin-left: 2px;
        }
      }
    }
  }
</style>
