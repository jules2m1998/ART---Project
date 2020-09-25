<template>
  <div id="logo">
    <router-link to="/">
      <img src="/LOGO.svg" alt="logo de l'annuaire universel du cameroun" class="logo-big">
      <img src="/LOGO-mini.svg" alt="mini logo de l'annuaire universel du cameroun" class="logo-small">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo'
}
</script>

<style lang="scss" scoped>
#logo{
  @media screen and (max-width: 446px)  {
    .logo-big{
      display: none!important;
    }
    .logo-small {
      display: block!important;
    }
  }
  .logo-small {
    display: none;
  }
}
</style>
