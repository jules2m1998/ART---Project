<template>
  <div>
    <the-profil />
    <set-information />
  </div>
</template>

<script>
import TheProfil from '~/components/user/profil/TheProfil'
import SetInformation from '~/components/user/profil/information/SetInformation'
export default {
  name: 'Index',
  components: { SetInformation, TheProfil }
}
</script>

<style scoped>

</style>
