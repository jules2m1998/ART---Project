<template>
  <div class="font-sans">
    <transition name="translate">
      <header-second v-if="isHeaderSecondVisible" :is-home="true" />
    </transition>
    <the-header :slides="sliders" />
    <defilement />
    <v-container>
      <div class="my-content pb-8">
        <div class="d-flex flex-column">
          <the-categories v-if="isSkeleton" :categories="categories" />
          <skeleton-the-categories v-else />
          <div class="inner-pub">
            pub
          </div>
          <the-numero-urgent v-if="isSkeleton" :phones="phones" />
          <skeleton-the-numero-urgent v-else />
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
          <the-home-enterprise v-if="isSkeleton" />
          <skeleton-the-home-enterprise v-else />
        </v-container>
      </div>
    </div>
    <v-container>
      <div class="pub--long">
        publicité
      </div>
      <div class="villes">
        <villes v-if="isSkeleton" />
        <skeleton-villes v-else />
      </div>
    </v-container>
    <div class="lines" />
    <v-container>
      <partner v-if="isSkeleton" />
      <skeleton-partner v-else />
    </v-container>
  </div>
</template>

<script>

import TheHeader from '~/components/header/TheHeader'
import TheCategories from '@/components/categoris/TheCategories'
import TheNumeroUrgent from '@/components/numero-urgent/TheNumeroUrgent'
import GoogleMap from '@/components/google-map/GoogleMap'
import TheHomeEnterprise from '@/components/home-enterprise/TheHomeEnterprise'
import Villes from '~/components/ville-home/Villes'
import Partner from '~/components/partner-home/Partner'
import Defilement from '@/components/defilement/Defilement'
import SkeletonTheCategories from '@/components/categoris/skeleton/SkeletonTheCategories'
import SkeletonTheNumeroUrgent from '@/components/numero-urgent/skeleton/SkeletonTheNumeroUrgent'
import SkeletonTheHomeEnterprise from '@/components/home-enterprise/skeleton/SkeletonTheHomeEnterprise'
import SkeletonVilles from '@/components/ville-home/skeleton/SkeletonVilles'
import SkeletonPartner from '@/components/partner-home/skeleton/SkeletonPartner'
import HeaderSecond from '@/components/header-second/HeaderSecond'
export default {
  components: { HeaderSecond, SkeletonPartner, SkeletonVilles, SkeletonTheHomeEnterprise, SkeletonTheNumeroUrgent, SkeletonTheCategories, Defilement, Partner, Villes, TheHomeEnterprise, GoogleMap, TheNumeroUrgent, TheCategories, TheHeader },
  data: () => ({
    /**
     * Liste des slides
     * @type {Array}
     */
    sliders: [
      {
        title: 'Consequuntur esse fuga libero maxime officia. Aliquam',
        img: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      },
      {
        title: 'Expected 1 line break before closing tag but no line breaks found',
        img: 'https://images.unsplash.com/photo-1560285509-3ebfa70a171d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=80'
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      },
      {
        title: "Les parenthèses attendues autour de l'argument",
        img: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Les parenthèses attendues autour de avec des accolades',
        img: 'https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      },
      {
        title: 'Les parenthèses attendues autour de avec des accolades',
        img: 'https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      }
    ],
    /**
     * Liste des catégories
     * @type {Array}
     */
    categories: [
      {
        text: 'Texte de test 2',
        to: '/',
        color: 'red darken-1',
        ico: 'home'
      },
      {
        text: 'Text 3',
        to: '/',
        color: 'purple darken-3',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'pink accent-4',
        ico: 'home'
      },
      {
        text: 'Text 1',
        to: '/',
        color: 'blue lighten-1',
        ico: 'home'
      }
    ],
    /**
     * Liste des numéros d'urgences
     * @type {Array}
     */
    phones: [
      {
        number: '118',
        color: 'red',
        title: "Numéro d'appel de la police",
        description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
      },
      {
        number: '118',
        color: 'green',
        title: "Numéro d'appel de la police",
        description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
      },
      {
        number: '118',
        color: 'black',
        title: "Numéro d'appel de la police",
        description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
      },
      {
        number: '118',
        color: 'blue',
        title: "Numéro d'appel de la police",
        description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
      }
    ],
    /**
     * Liste des entreprises à proximité
     * @type {Array}
     */
    enterprise: [
      {
        name: 'Groupe forget audioprothésistes',
        domain: 'Santé / Audioprothésie',
        location: '370-950 monté des Pionniers, Terrebeeeeeeeeeeeee',
        note: 12,
        open: '08h30',
        phone: '690981056',
        mail: '',
        site: ''
      }
    ],
    /**
     * determine si la barre des me,us est visible
     * @type {boolean}
     */
    isHeaderSecondVisible: false,
    isSkeleton: true
  }),
  mounted () {
    console.log(document.querySelector('[data-search]'))
    const search = document.querySelector('[data-search]')
    const searchY = search.getBoundingClientRect().y
    this.isHeaderSecondVisible = this.scrollY() > searchY + search.getBoundingClientRect().height

    window.addEventListener('scroll', () => {
      const s = search.getBoundingClientRect().y
      this.isHeaderSecondVisible = this.scrollY() > s + search.getBoundingClientRect().height
    })
  },
  methods: {
    scrollY () {
      const supportPageOffset = window.pageXOffset !== undefined
      const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    }
  },
  head: {
    title: 'Bienvenue dans l\'annuaire universelle',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js', defer: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js', defer: true }
    ]
  }
}
</script>

<style lang="scss">
.fake-menu{
  display: none!important;
}
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
.translate-enter-active{
  animation: translateTop linear .2s;
}
.translate-leave-active{
  animation: translateBottom linear .2s;
}
@keyframes translateTop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes translateBottom {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
