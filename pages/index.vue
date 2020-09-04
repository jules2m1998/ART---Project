<template>
  <div class="font-sans">
    <the-header v-model="index.components['0']" />
    <v-container>
      <div class="my-content pb-8">
        <div class="d-flex flex-column">
          <the-categories v-model="index.components['1']" />
          <div class="inner-pub">
            pub
          </div>
          <the-numero-urgent v-model="index.components['2']" />
        </div>
        <div class="pub">
          Publicités
        </div>
      </div>
    </v-container>
    <div class="index-bottom">
      <google-map />
      <div class="enterprise">
        <v-container>
          <the-home-enterprise v-model="index.components['3']" />
        </v-container>
      </div>
    </div>
    <v-container>
      <div class="pub--long">
        publicité
      </div>
      <div class="villes">
        <villes v-model="index.components['4']" />
      </div>
    </v-container>
    <div class="lines" />
    <v-container>
      <partner v-model="index.components['5']" />
    </v-container>
  </div>
</template>

<script>

import Axios from 'axios'
import TheHeader from '~/components/header/TheHeader'
import TheCategories from '@/components/categoris/TheCategories'
import TheNumeroUrgent from '@/components/numero-urgent/TheNumeroUrgent'
import GoogleMap from '@/components/google-map/GoogleMap'
import TheHomeEnterprise from '@/components/home-enterprise/TheHomeEnterprise'
import Villes from '~/components/ville-home/Villes'
import Partner from '~/components/partner-home/Partner'
export default {
  components: { Partner, Villes, TheHomeEnterprise, GoogleMap, TheNumeroUrgent, TheCategories, TheHeader },
  async asyncData ({ params, app }) {
    const messageRef = app.$fireDb.ref('home-page') // Where 'cases' is the json object
    const { data } = await Axios.get(messageRef.toString() + '.json')
    return {
      index: data
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.my-content{
  margin-top: 56px;
  display: grid;
  grid-template-columns: auto 300px;
  grid-gap: 10px;
  @media screen and (max-width: 749px) {
    grid-template-columns: 1fr;
  }
  .inner-pub{
    width: 300px;
    height: 100px;
    display: none;
    background: #cccccc;
    border-radius: 6px;
    margin: 56px auto auto;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 760px){
      display: flex;
    }
  }
  .pub{
    width: 300px;
    background: #cccccc;
    border-radius: 6px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 749px) {
      width: 300px;
      height: 100px;
      margin: auto;
    }
  }
}
.index-bottom{
  height: 700px;
  position: relative;
  .enterprise{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.pub--long{
  width: 100%;
  background: #cccccc;
  height: 111px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 56px auto;
}
.lines{
  width: 100%;
  height: 2px;
  background: $yellow;
  margin-bottom: 50px;
}
</style>
