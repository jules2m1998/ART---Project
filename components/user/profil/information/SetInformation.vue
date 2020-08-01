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
          <div id="form">
            <user-maeva />
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <set-password />
    </v-expansion-panels>
  </div>
</template>

<script>
import SetPassword from '~/components/user/profil/information/password/SetPassword'
import UserMaeva from '~/components/user/profil/information/utils/UserMaeva'
export default {
  name: 'SetInformation',
  components: { UserMaeva, SetPassword },
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
