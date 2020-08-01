<template>
  <div>
    <v-form v-model="valid" class="mt-2">
      <v-container class="pt-0">
        <div class="row-box row-1">
          <div class="d-flex justify-end align-center">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Nom complet</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              required
            />
          </div>
          <div>
            <v-text-field
              v-model="lastname"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :rules="nameRules"
              required
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex justify-end align-center input-block">
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
            />
          </div>
        </div>
        <div class="row-box row-1">
          <div class="d-flex justify-end align-center">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Genre & Titre</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div>
            <v-select
              v-model="gender"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :items="genders"
            />
          </div>
          <div>
            <v-text-field
              v-model="title"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :rules="nameRules"
              required
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex justify-end align-center input-block">
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
        <div class="row-box row-1">
          <div class="d-flex justify-end align-center">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">References</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div
            cols="4"
          >
            <v-autocomplete
              v-model="country"
              :items="countries"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              :filter="customFilter"
              item-text="name"
              append-icon="expand_more"
              @change="getCapital()"
            />
          </div>

          <div>
            <v-autocomplete
              v-model="city"
              :items="getCities"
              :filter="customFilter"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              item-text="name"
              append-icon="expand_more"
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex justify-end align-center input-block">
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
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex justify-end align-center input-block">
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
            />
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex justify-end align-center input-block">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Autres langues</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div cols="8">
            <v-autocomplete
              v-model="otherLang"
              :items="langcodeList"
              append-icon="expand_more"
              on-icon="check_box"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              small-chips
              multiple
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
        <div class="row-box row-2">
          <div class="d-flex justify-end align-center input-block">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Adresses mails</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div>
            <v-autocomplete
              v-model="emails"
              :items="emailList"
              readonly
              item-text="name"
              item-value="name"
              append-icon="edit"
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              chips
              multiple
              @append="$router.push('/parameter/userprofile/identifiant')"
            >
              <template v-slot:selection="data">
                <v-chip
                  small
                  color="#D6DAEF"
                  text-color="#595B65"
                  v-bind="data.attrs"
                  @click:close="$router.push('/parameter/userprofile/identifiant')"
                >
                  <v-icon v-if="data.item.valid" small left color="green">
                    check_circle
                  </v-icon>
                  <v-icon v-if="!data.item.valid" small left color="red">
                    error
                  </v-icon>
                  {{ data.item.name }}
                  <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon small v-bind="attrs" right color="#595B65" v-on="on">
                        cancel
                      </v-icon>
                    </template>
                    <v-card>
                      <v-card-title class="headline">
                        Redirection
                      </v-card-title>
                      <v-card-text>Vous allez être rediriger vers la page identiant pour pouvoir effectuer cette opération</v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn color="green darken-1" text @click="dialog = false">
                          Annuler
                        </v-btn>
                        <v-btn color="green darken-1" text @click="$router.push('/parameter/userprofile/identifiant')">
                          Accepter
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-chip>
              </template>
            </v-autocomplete>
          </div>
        </div>
        <div class="row-box row-2">
          <div class="d-flex justify-end align-center input-block">
            <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Numéros de téléphone</span>
            <v-icon class="label-icon">
              person
            </v-icon>
          </div>
          <div>
            <v-autocomplete
              v-model="phones"
              :items="phonenumberList"
              readonly
              item-text="name"
              item-value="name"
              append-icon="edit"
              small
              chips
              multiple
              :class="{'disable-input':updateVerification,'enable-input':!updateVerification}"
              @click:append="$router.push('/parameter/userprofile/identifiant')"
            >
              <template v-slot:selection="data">
                <v-chip
                  small
                  color="#D6DAEF"
                  text-color="#595B65"
                  v-bind="data.attrs"
                  @click:close="$router.push('/parameter/userprofile/identifiant')"
                >
                  <v-icon v-if="data.item.valid" small left color="green">
                    check_circle
                  </v-icon>
                  <v-icon v-if="!data.item.valid" small left color="orange">
                    error
                  </v-icon>
                  {{ data.item.name }}
                  <v-dialog v-model="dialog1" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon small v-bind="attrs" right color="#595B65" v-on="on">
                        cancel
                      </v-icon>
                    </template>
                    <v-card>
                      <v-card-title class="headline">
                        Redirection
                      </v-card-title>
                      <v-card-text>Vous allez être rediriger vers la page identiant pour pouvoir effectuer cette opération</v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn color="green darken-1" text @click="dialog1 = false">
                          Annuler
                        </v-btn>
                        <v-btn color="green darken-1" text @click="$router.push('/parameter/userprofile/identifiant')">
                          Accepter
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
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
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
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
    firstname: 'Freddy',
    lastname: 'Kamgang',
    displayedname: 'Freddy Kamgang',
    gender: 'Homme',
    genders: ['Homme', 'Femme'],
    title: 'Ing.',
    city: 'Douala',
    country: 'Cameroun',
    date: '1996-05-20',
    fuseau: '(GMT+01:00) Hour of West Central Africa(Africa/Algiers)',
    lang: 'French - FR',
    otherLang: ['English - EN'],
    emails: ['freddykamgang.gmail.com', 'freddykamgang.chickdev.space'],
    emailList: [
      {
        name: 'freddykamgang.gmail.com',
        valid: true
      },
      {
        name: 'freddykamgang.chickdev.space',
        valid: false
      }
    ],
    phones: ['690552927', '673415829'],
    phonenumberList: [
      {
        name: '690552927',
        valid: true
      },
      {
        name: '673415829',
        valid: true
      }
    ],
    langcodeList: [],
    initialForm: {},
    modal: false,
    dialog: false,
    dialog1: false,
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
</style>
