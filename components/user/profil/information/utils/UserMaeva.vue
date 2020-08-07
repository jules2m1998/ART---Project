<template>
  <div>
    <v-form v-model="valid" class="mt-2">
      <v-container class="pt-0">
        <div class="row-box row-2">
          <div class="d-flex align-center">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Nom complet</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div class="my-double">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              required
              outlined
              dense
            />
            <v-text-field
              v-model="lastname"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :rules="nameRules"
              required
              outlined
              dense
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex  align-center input-block">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Nom à l'affichage</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div>
            <v-text-field
              v-model="displayedname"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :rules="nameRules"
              required
              outlined
              dense
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex  align-center">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Genre & Titre</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div class="my-double">
            <v-select
              v-model="gender"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :items="genders"
              outlined
              dense
            />
            <v-text-field
              v-model="title"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :rules="nameRules"
              required
              outlined
              dense
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex  align-center input-block">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Date de naissance</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="getDate"
                  :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
                  append-icon="event"
                  readonly
                  class="datepickerInput"
                  outlined
                  dense
                  v-bind="attrs"
                  @click:append="modal=true"
                />
              </template>
              <v-date-picker v-model="date" :show-current="date">
                <v-spacer />
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </div>
        </div>
        <br>
        <br>
        <div class="row-box row-2">
          <div class="d-flex  align-center">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">References</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div
            class="my-double"
          >
            <v-autocomplete
              v-model="country"
              :items="countries"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :filter="customFilter"
              item-text="name"
              append-icon="expand_more"
              outlined
              dense
              @change="getCapital()"
            />
            <v-autocomplete
              v-model="city"
              :items="getCities"
              :filter="customFilter"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              item-text="name"
              append-icon="expand_more"
              outlined
              dense
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex  align-center input-block">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Fuseau horaire préféré</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div>
            <v-autocomplete
              v-model="fuseau"
              :items="timezone"
              item-text="name"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              append-icon="expand_more"
              outlined
              dense
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex  align-center input-block">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Langue principale</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div cols="8">
            <v-autocomplete
              v-model="lang"
              :items="langcodeList"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              append-icon="expand_more"
              outlined
              dense
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex  align-center input-block">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Autres langues</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div cols="8">
            <v-autocomplete
              v-model="otherLang"
              :items="langcodeList"
              append-icon=""
              on-icon="check_box"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              small-chips
              multiple
              outlined
              dense
              disabled
            >
              <template #selection="{ item }">
                <v-chip
                  color="#D6DAEF"
                  text-color="#595B65"
                  small
                  close
                  close-icon="cancel"
                  @click:close="remove(item, otherLang)"
                >
                  {{ item }}
                </v-chip>
              </template>
            </v-autocomplete>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div class="d-flex justify-end">
          <v-btn :disabled="updateVerification">
            Annuler
          </v-btn>
          <v-btn :disabled="updateVerification" class="mx-2">
            Enregistrer
          </v-btn>
        </div>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { format } from 'date-fns'
import french from 'date-fns/locale/fr'
import _ from 'lodash'
import citiesFile from 'cities.json'
import timezoneFile from './../../../../../assets/json/timezone.json'
import countriesFile from './../../../../../assets/json/countries.json'
import langcodeFile from './../../../../../assets/json/langcode.json'
export default {
  name: 'UserMaeva',
  data: () => ({
    valid: false,
    updated: false,
    timezone: [],
    countries: [],
    firstname: 'Junior',
    lastname: 'Essono',
    displayedname: 'Essono',
    gender: 'Homme',
    genders: ['Homme', 'Femme'],
    title: 'Ing.',
    city: 'Douala',
    country: 'Cameroun',
    date: '1996-05-20',
    fuseau: '(GMT+01:00) Hour of West Central Africa(Africa/Algiers)',
    lang: 'French - FR',
    otherLang: ['English - EN'],
    emailList: [
      {
        name: 'freddykamgang@gmail.com',
        valid: true
      }
    ],
    phones: [
      {
        id: 0,
        name: '690552927',
        valid: true,
        operator: {
          name: 'Orange',
          color: '#ff6600'
        },
        isPro: true
      }
    ],
    langcodeList: [],
    initialForm: {},
    modal: false,
    dialog: false,
    dialog1: false,
    dialogAdd: false,
    dialogUpdate: false,
    nameRules: [
      v => !!v || 'Name is required'
    ]
  }),
  computed: {
    getDate () {
      const date = new Date(this.date)
      return date ? format(date, 'dd MMMM yyyy', { locale: french }) : ''
    },
    getCities (country) {
      const cities = []
      for (const y in countriesFile) {
        if (this.country === countriesFile[y].translations.fr) {
          const code = countriesFile[y].alpha2Code
          for (const i in citiesFile) {
            if (citiesFile[i].country === code) {
              cities.push({ name: citiesFile[i].name, code: citiesFile[i].country })
            }
          }
        }
      }
      return cities.sort(this.getSortOrder('name'))
    },
    updateVerification () {
      const update = {
        name: this.firstname,
        lastname: this.lastname,
        gender: this.gender,
        title: this.title,
        date: this.date,
        country: this.country,
        city: this.city,
        timezone: this.fuseau,
        language: this.lang,
        otherLang: this.otherLang,
        emails: this.emails,
        phones: this.phones
      }
      return _.isEqual(update, this.initialForm)
    }
  },
  created () {
    const initial = {
      name: this.firstname,
      lastname: this.lastname,
      gender: this.gender,
      title: this.title,
      date: this.date,
      country: this.country,
      city: this.city,
      timezone: this.fuseau,
      language: this.lang,
      otherLang: this.otherLang,
      emails: this.emails,
      phones: this.phones
    }
    const initialString = JSON.stringify(initial)
    this.timezone = this.getTimezone()
    this.countries = this.getCountries()
    this.langcodeList = this.getLangcode()

    this.initialForm = JSON.parse(initialString)
  },
  methods: {
    getTimezone () {
      const timezone = []
      for (const item in timezoneFile) {
        timezone.push('(' + timezoneFile[item].display + ') Hour of ' + timezoneFile[item].name + '(' + timezoneFile[item].timezone + ')')
      }
      return timezone
    },
    getLangcode () {
      const langcode = []
      for (const item in langcodeFile) {
        langcode.push(langcodeFile[item].name + ' - ' + langcodeFile[item].code.toUpperCase())
      }
      return langcode
    },
    getCountries () {
      const countries = []
      for (const i in countriesFile) {
        countries.push({ name: countriesFile[i].translations.fr, code: countriesFile[i].alpha3Code })
      }
      return countries.sort(this.getSortOrder('name'))
    },
    getCapital () {
      for (const i in countriesFile) {
        if (countriesFile[i].translations.fr === this.country) {
          this.city = countriesFile[i].capital
        }
      }
    },
    getSortOrder (prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1
        } else if (a[prop] < b[prop]) {
          return -1
        }
        return 0
      }
    },
    remove (item, list) {
      list.splice(list.indexOf(item), 1)
      list = [...list]
    },
    customFilter (item, queryText) {
      if (item.name !== null) {
        const textOne = item.name.toLowerCase()
        const textTwo = item.code.toLowerCase()
        const searchText = queryText.toLowerCase()
        return textOne.includes(searchText) ||
          textTwo.includes(searchText)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .phone-chip{
    display: flex;
    flex-direction: row;
    align-items: center;
    .operator{
      padding: 8px;
      color: white;
      margin-right: 6px;
      background: blue;
    }
    .buttons{
      display: flex;
      flex-direction: row;
      margin-left: 6px;
      button{
        height: 16px;
        border-radius: 16px;
        width: 16px;
        background: blue;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 3px;
        &.edit--btn{
          background: transparent;
          margin-left: 12px;
          i{
            color: black;
          }
        }
        i{
          font-size: 10px;
        }
      }
    }
  }
  .phone-chip--parent{
    padding: 0!important;
  }
  .row-box {
    height: 60px !important;
  }
  .datepickerInput >>> .v-text-field__slot input {
      cursor: default !important;
  }
  .disable-input >>> .v-text-field__slot input{
    color: rgba(0,0,0,.78) !important;
  }
  .disable-input >>> .v-input__slot{
    &:before{
      border-color: #EDEDED !important;
    }
  }
  .disable-input >>> .v-input__icon--append .v-icon {
    color: rgba(0,0,0,.2) !important;
  }
  .disable-input >>> .v-text-field__slot input{
    color: rgba(0,0,0,.78) !important;
  }
  .enable-input >>> .v-input__slot{
    &:before{
      border-color: rgba(0,0,0,.5) !important;
    }
  }
  .enable-input >>> .v-input__icon--append .v-icon {
    color: rgba(0,0,0,.5) !important;
  }
  .enable-input >>> .v-text-field__slot input{
    color: rgba(0,0,0,.87) !important;
  }
  .close-icon >>> .v-chip .v-chip__close.v-icon.v-icon--right {
    color: rgba(0,0,0,.78) !important;
  }
  @media (min-width: 600px) {
    .row-1 {
      display: grid;
      grid-template-columns: 2fr 3fr 3fr;
      grid-gap: 30px;
      padding: 10px;
    }
    .row-2 {
      display: grid;
      grid-template-columns: 2fr 6fr;
      grid-gap: 30px;
      padding: 10px;
    }
    .label-text{
      display: block;
    }
    .label-icon{
      display: none;
    }
  }
  @media (max-width: 600px){
    .row-1 {
      display: grid;
      grid-template-columns: 20px auto auto;
      grid-gap: 20px;
      padding: 10px;
    }
    .row-2 {
      display: grid;
      grid-template-columns: 20px auto;
      grid-gap: 20px;
      padding: 10px;
    }
    .label-text{
      display: none;
    }
    .label-icon{
      display: block;
    }
  }
  .my-double{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
  .label-text{
    position: relative;
    bottom: 10px;
    color: black!important;
    font-size: 12px!important;
  }
  .input--dialog--box{
    position: relative;
    .input--dialog--box--button{
      position: absolute;
      top: 2px;
      right: 0;
      button{
        i{
          font-size: 18px!important;
        }
      }
    }
  }
</style>
