<template>
  <div>
    <the-presentation :user="user" />
  </div>
</template>

<script>
import ThePresentation from '~/components/user/profil/presentation/ThePresentation'
export default {
  name: 'TheProfil',
  components: { ThePresentation },
  data: () => ({
    user: {
      username: 'Essono',
      profession: 'Codeur',
      age: 33,
      place: 'Douala, Douala'
    }
  })
}
</script>

<style scoped>

</style>
