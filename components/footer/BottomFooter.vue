<template>
  <div class="primaryDark white--text">
    <v-container id="bottom-footer">
      <div id="copy">
        <p>Copyright 2019 ART - tous droits réservés</p>
      </div>
      <div id="dedicace">
        <p>
          Site développé avec
          <v-icon color="white" style="position: relative; bottom: 3px">
            fas fa-heartbeat
          </v-icon>
          par <img src="/mdem.png" alt="logo de la société mdem">
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BottomFooter'
}
</script>

<style lang="scss" scoped>
  #bottom-footer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 13px;
    color: rgba(255,255,255,.72) !important;
    padding: 20px 0 20px 0;
    #dedicace{
      p{
        margin: 0!important;
      }
      img{
        opacity: .6;
      }
    }
  }
  .v-application p {
    margin-bottom: 0;
  }
</style>
