<template>
  <v-card id="pre">
    <div id="avatar">
      <v-avatar size="120">
        <v-icon style="font-size: 126px" color="grey darken-3">
          fas fa-user-circle
        </v-icon>
      </v-avatar>
    </div>
    <div id="text">
      <div id="name">
        Hello <span>{{ user.username }}</span>
      </div>
      <div id="welcome">
        Bienvenue dans votre espace membre
      </div>
      <div id="prof">
        {{ user.profession }} - {{ user.age }} ans
      </div>
      <div id="place">
        {{ user.place }}
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ThePresentation',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  #pre{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 28px;
    border-radius: $radius;
    @media screen and (max-width: 425px) {
      justify-content: center;
      flex-direction: column;
    }
    #avatar{
      display: flex;
      justify-content: center;
    }
    #text{
      margin-left: 30px;
      color: $primary;
      @media screen and (max-width: 425px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        margin: 0;
      }
      #name{
        font-size: 1.7rem;
        span{
          font-weight: bold;
        }
      }
      #welcome{
        font-size: 1.45rem;
      }
      #prof{
        font-size: 0.8rem;
        font-style: oblique;
        margin-top: 8px;
      }
      #place{
        color: #808085;
        font-style: oblique;
        font-size: 0.7959rem;
        margin-top: 8px;
      }
    }
  }
</style>
