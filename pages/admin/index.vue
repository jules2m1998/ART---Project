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
          <the-numero-urgent v-model="index.components['2']" class="js-editable-class" />
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
          <the-home-enterprise v-model="index.components['3']" class="js-editable-class" />
        </v-container>
      </div>
    </div>
    <v-container>
      <div class="pub--long">
        publicité
      </div>
      <div class="villes">
        <villes v-model="index.components['4']" class="js-editable-class" />
      </div>
    </v-container>
    <div class="lines" />
    <v-container>
      <partner v-model="index.components['5']" class="js-editable-class" />
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
  async asyncData ({ app }) {
    const messageRef = app.$fireDb.ref('home-page') // Where 'cases' is the json object
    const { data } = await Axios.get(messageRef.toString() + '.json')
    return {
      index: data
    }
  },
  data: () => ({
    iteration: 0
  }),
  computed: {
    getIndex () {
      return this.index
    }
  },
  watch: {
    index: {
      async handler (val) {
        if (this.iteration > 0) {
          const messageRef = this.$fireDb.ref('home-page') // Where 'cases' is the json object
          const { data } = await Axios.put(messageRef.toString() + '.json', val)
          console.log(data)
        }
        this.iteration++
      },
      deep: true
    }
  },
  created () {
  },
  mounted () {
    const editBtn = this.createEditButton('js-edit-btn')
    const saveBtn = this.createEditButton('js-save-btn')
    const deleteBtn = this.createEditButton('js-delete-btn')
    const container = this.createEditButton('js-container')
    const containerComp = this.createEditButton('js-container')

    container.appendChild(editBtn.cloneNode())
    container.appendChild(saveBtn.cloneNode())
    container.appendChild(deleteBtn.cloneNode())

    containerComp.appendChild(editBtn)

    const editable = document.querySelectorAll('.editable')
    const component = document.querySelectorAll('.js-editable-class')
    editable.forEach((editable) => {
      this.fromOne(editable, container)
    })
    component.forEach((component) => {
      this.fromOneComponent(component, containerComp)
    })
  },
  methods: {
    fromOne (editable, container) {
      editable.style.border = '2px solid transparent'
      editable.style.position = 'relative'
      editable.appendChild(container.cloneNode(true))
      const editBtn = editable.querySelector('.js-edit-btn')
      const deleteBtn = editable.querySelector('.js-delete-btn')
      const saveBtn = editable.querySelector('.js-save-btn')
      editBtn.classList.add('visible')

      editBtn.addEventListener('click', () => {
        editable.contentEditable = true
        deleteBtn.style.display = 'block'
        saveBtn.style.display = 'block'
        editBtn.classList.remove('visible')
      })
      deleteBtn.addEventListener('click', () => {
        editable.contentEditable = false
        this.emitter(editable, 'reset')
        this.fromOne(editable, container)
      })
      saveBtn.addEventListener('click', () => {
        deleteBtn.style.display = 'none'
        saveBtn.style.display = 'none'
        editBtn.classList.add('visible')
        editable.contentEditable = false
        this.emitter(editable, 'save')
      })
    },
    fromOneComponent (editable, container) {
      editable.style.position = 'relative'
      container.classList.add('direct')
      editable.appendChild(container.cloneNode(true))
      const editBtn = editable.querySelector('.direct').querySelector('.js-edit-btn')
      console.log(editBtn)
      editBtn.classList.add('visible')
    },
    createEditButton (name) {
      const div = document.createElement('div')
      div.setAttribute('class', name)
      return div
    },
    emitter (element, type) {
      const event = new CustomEvent(type)
      element.dispatchEvent(event)
    }
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
