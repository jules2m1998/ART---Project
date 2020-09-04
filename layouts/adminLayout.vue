<template>
  <v-app class="w-100">
    <v-main>
      <nuxt />
    </v-main>
    <template v-if="!$router.currentRoute.fullPath.includes('map') && index !== null">
      <top-footer :datas="datas" class="responsive" />
      <footer>
        <the-footer v-model="index.components['7']" class="js-editable-class" />
      </footer>
    </template>
  </v-app>
</template>

<script>
import Axios from 'axios'
import TopFooter from '~/components/topFooter/TopFooter'
import TheFooter from '~/components/footer/TheFooter'
export default {
  components: { TopFooter, TheFooter },
  data () {
    return {
      datas: [
        {
          ico: 'business',
          name: 'Companies',
          number: 10
        },
        {
          ico: 'person',
          name: 'Individuals',
          number: 653
        },
        {
          ico: 'category',
          name: 'Categories',
          number: 75
        },
        {
          ico: 'gps_fixed',
          name: 'Rentals',
          number: 41
        }
      ],
      index: null
    }
  },
  async created () {
    const messageRef = this.$fireDb.ref('home-page') // Where 'cases' is the json object
    const { data } = await Axios.get(messageRef.toString() + '.json')
    this.index = data
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');
@media screen and (max-width: 768px) {
  .responsive{
    display: none!important;
  }
}
.w-100{
  width: 100%;
}
body{
  font-family: 'Open sans', sans-serif;
}

/**
** Editable element css
 */
.js-container{
  position: absolute;
  top:0;
  margin-top:-15px;
  right: -15px;
  display: flex;
  flex-direction: row;
  z-index: 2000;
}
.js-edit-btn, .js-delete-btn, .js-save-btn{
  width:30px;
  height:30px;
  background:#fff url(https://image.flaticon.com/icons/svg/598/598234.svg) center center no-repeat;
  background-size:12px 12px;
  border-radius:50%;
  box-shadow:0 15px 35px #3232321a,0 5px 15px #0000001a;
  cursor:pointer;
  display: none;
  margin-right: 3px;
}
.js-editable-class> .js-container{
  margin-top:0;
  left: 0;
  right: unset;
}
.js-delete-btn{
  background:transparent url(https://image.flaticon.com/icons/svg/1828/1828843.svg) center center no-repeat;
  background-size: cover;
}
.js-save-btn{
  background:transparent url(https://image.flaticon.com/icons/svg/1828/1828640.svg) center center no-repeat;
  background-size: cover;
}
.editable{
  border: 2px solid transparent;
}
.editable:hover, .js-editable-class:hover{
  border: 2px dashed #a8a8a8!important;
}
.editable:hover .visible.js-edit-btn, .js-editable-class:hover> .direct .visible.js-edit-btn{
  display: block!important;
}
</style>
