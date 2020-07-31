<template>
  <div>
    <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel class="mt-2 expendable--title">
        <v-expansion-panel-header>Informations personnelles</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div style="display: flex; justify-content: flex-end" class="mt-10">
            <v-btn color="secondary">Modifier</v-btn>
          </div>
          <div id="form">
            <UserFormItem :input="form.langue" the-key="lang" />
            <UserFormItem :input="form.genre" the-key="genre" />
            <UserFormItem :input="form.lastname" the-key="prenom" class="mt-5" />
            <UserFormItem :input="form.firstname" the-key="nom" />
            <UserFormItem :input="form.date" the-key="date" />
            <UserFormItem :input="form.id" the-key="identifiant" />
            <UserFormItem :input="form.tel" the-key="phone" />
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <set-password />
    </v-expansion-panels>
  </div>
</template>

<script>
import SetPassword from '~/components/user/profil/information/password/SetPassword'
import UserFormItem from '~/components/user/profil/information/utils/UserFormItem'
export default {
  name: 'SetInformation',
  components: { UserFormItem, SetPassword },
  data: () => ({
    panel: [0, 1],
    disabled: false,
    form: {
      langue: {
        label: 'langue',
        type: 'checkbox',
        items: [
          {
            label: 'France',
            value: false
          },
          {
            label: 'Anglais',
            value: false
          }
        ],
        value: []
      },
      genre: {
        label: 'genre',
        type: 'radio',
        items: [
          {
            label: 'Masculin'
          },
          {
            label: 'Feminin'
          }
        ],
        value: ''
      },
      lastname: {
        label: 'Prenom',
        type: 'text',
        value: 'Jules Junior'
      },
      firstname: {
        label: 'Nom',
        type: 'text',
        value: 'Meva\'a'
      },
      date: {
        label: 'Date de naissance',
        type: 'date',
        value: new Date()
      },
      id: {
        label: 'Identifiant',
        type: 'text',
        value: 'identifiant'
      },
      tel: {
        label: 'Téléphone',
        type: 'phone',
        value: '690981056'
      }
    }
  })
}
</script>

<style scoped>

</style>
