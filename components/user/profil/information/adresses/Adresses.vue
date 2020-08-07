<template>
  <v-expansion-panel class="mt-2 expendable--title">
    <v-expansion-panel-header>Modifier vos adresses</v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="row-box row-2">
        <div class="d-flex  align-center input-block">
          <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Lieu de residence</span>
          <v-icon class="label-icon">
            person
          </v-icon>
        </div>
        <div cols="8">
          <v-text-field
            v-model="lieu"
            required
            outlined
            dense
          />
        </div>
      </div>
      <div class="row-box row-2">
        <div class="d-flex  align-center input-block">
          <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Adresses mails</span>
          <v-icon class="label-icon">
            person
          </v-icon>
        </div>
        <div>
          <div class="input--dialog--box">
            <v-autocomplete
              v-model="emailList"
              :items="emailList"
              readonly
              item-text="name"
              item-value="name"
              append-icon=""
              chips
              multiple
              outlined
              dense
              disabled
            >
              <template v-slot:selection="data">
                <v-chip
                  small
                  color="#D6DAEF"
                  text-color="#595B65"
                  v-bind="data.attrs"
                >
                  <div class="email-chip">
                    <div class="verify">
                      <v-icon v-if="data.item.valid" small left color="green">
                        check_circle
                      </v-icon>
                      <v-icon v-if="!data.item.valid" small left color="red">
                        error
                      </v-icon>
                    </div>
                    <div class="value">
                      {{ data.item.name }}
                    </div>
                    <div class="buttons">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <div v-bind="attrs" v-on="on">
                            <v-dialog v-model="isDialogEmailUpdate" persistent max-width="550px" style="overflow-y: hidden">
                              <template v-slot:activator="{on, attrs}" v-on="on">
                                <button class="edit--btn" v-bind="attrs" v-on="on" @click.prevent>
                                  <v-icon>fas fa-pencil-alt</v-icon>
                                </button>
                              </template>
                              <dialog-form
                                v-model="isDialogEmailUpdate"
                                type="email-update"
                                title="Modifier une adresse mail"
                                :element="data.item"
                                @email-update="emailUpdate"
                                @email-delete="removeEmail"
                              />
                            </v-dialog>
                          </div>
                        </template>
                        <span style="font-size: 10px">Modifier</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <button style="background: transparent" v-bind="attrs" @click.prevent="removeEmail(data.item.id)" v-on="on">
                            <v-icon class="black--text">
                              fas fa-times
                            </v-icon>
                          </button>
                        </template>
                        <span style="font-size: 10px">Supprimer</span>
                      </v-tooltip>
                    </div>
                  </div>
                </v-chip>
              </template>
            </v-autocomplete>
            <div class="input--dialog--box--button">
              <v-dialog v-model="isDialogEmailAdd" persistent max-width="550px" style="overflow-y: hidden">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    color="green"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fas fa-plus-circle</v-icon>
                  </v-btn>
                </template>
                <dialog-form
                  v-model="isDialogEmailAdd"
                  type="email-add"
                  title="Ajouter une adresse email"
                  :element="{}"
                  @email="setEmail"
                  @add="addEmail"
                />
              </v-dialog>
            </div>
          </div>
        </div>
      </div>
      <div class="row-box row-2">
        <div class="d-flex  align-center input-block">
          <span class="grey--text text--lighten-1-1 text-subtitle-1 label-text">Numéros de téléphone</span>
          <v-icon class="label-icon">
            person
          </v-icon>
        </div>
        <div class="input--dialog--box">
          <v-autocomplete
            v-model="phones"
            :items="phones"
            readonly
            item-text="name"
            item-value="name"
            append-icon=""
            small
            chips
            multiple
            outlined
            dense
            disabled
          >
            <template v-slot:selection="data">
              <v-chip
                small
                color="#D6DAEF"
                text-color="#595B65"
                v-bind="data.attrs"
                class="phone-chip--parent"
                style="margin: 5px 5px 5px 0"
              >
                <div class="phone-chip">
                  <div class="operator" :style="{ background: data.item.operator.color }">
                    {{ data.item.operator.name }}
                  </div>
                  <div class="number">
                    {{ data.item.name }} <span v-if="data.item.isPro">(pro)</span>
                  </div>
                  <div class="buttons">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <button class="black" v-bind="attrs" v-on="on">
                          <v-icon>fas fa-info</v-icon>
                        </button>
                      </template>
                      <span />
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on">
                          <v-dialog v-model="isDialogPhoneUpdate" persistent max-width="550px" style="overflow-y: hidden">
                            <template v-slot:activator="{ on, attrs }" v-on="on">
                              <button class="edit--btn" v-bind="attrs" v-on="on" @click.prevent>
                                <v-icon>fas fa-pencil-alt</v-icon>
                              </button>
                            </template>
                            <dialog-form
                              v-model="isDialogPhoneUpdate"
                              type="phone-update"
                              title="Modifier un numéro de téléphone"
                              :element="data.item"
                              @phone-update="phoneUpdate"
                              @phone-delete="removePhone"
                            />
                          </v-dialog>
                        </div>
                      </template>
                      <span style="font-size: 10px">Modifier</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <button style="background: transparent" v-bind="attrs" @click.prevent="removePhone(data.item.id)" v-on="on">
                          <v-icon class="black--text">
                            fas fa-times
                          </v-icon>
                        </button>
                      </template>
                      <span style="font-size: 10px">Supprimer</span>
                    </v-tooltip>
                  </div>
                </div>
              </v-chip>
            </template>
          </v-autocomplete>
          <div class="input--dialog--box--button">
            <v-dialog v-model="isDialogPhoneAdd" persistent max-width="550px" style="overflow-y: hidden">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  color="green"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>fas fa-plus-circle</v-icon>
                </v-btn>
              </template>
              <dialog-form
                v-model="isDialogPhoneAdd"
                type="phone-add"
                title="Ajouter un numéro de téléphone"
                :element="{}"
                @number="setPhone"
                @add="addPhone"
              />
            </v-dialog>
          </div>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import DialogForm from '~/components/user/utils/DialogForm'
export default {
  name: 'Adresses',
  components: { DialogForm },
  data: () => ({
    isDialogPhoneAdd: false,
    isDialogEmailAdd: false,
    isDialogPhoneUpdate: false,
    isDialogEmailUpdate: false,
    emailList: [
      {
        name: 'freddykamgang@gmail.com',
        valid: true,
        id: 0
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
    lieu: 'Douala, Cameroun'
  }),
  methods: {
    setPhone (e) {
      this.phones = e
    },
    setEmail (e) {
      this.emailList = e
    },
    removePhone (id) {
      const deleted = this.phones.filter(x => x.id === id)[0]
      this.phones.splice(this.phones.indexOf(deleted), 1)
    },
    removeEmail (id) {
      const deleted = this.emailList.filter(x => x.id === id)[0]
      this.emailList.splice(this.phones.indexOf(deleted), 1)
    },
    addPhone (e) {
      if (!this.phones.includes(e)) {
        e.id = this.phones.length
        this.phones.push(e)
      }
    },
    addEmail (e) {
      if (!this.emailList.includes(e)) {
        e.id = this.emailList.length
        this.emailList.push(e)
      }
    },
    phoneUpdate (e) {
      this.phones = this.phones.map((x) => {
        if (x.id === e.id) {
          return e
        }
        return x
      })
    },
    emailUpdate (e) {
      console.log(e)
      this.emailList = this.emailList.map((x) => {
        if (x.id === e.id) {
          return e
        }
        return x
      })
      console.log(this.emailList)
    }
  }
}
</script>

<style lang="scss" scoped>
  .phone-chip, .email-chip{
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
