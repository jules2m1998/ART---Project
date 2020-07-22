<template>
  <v-container id="the-footer" fluid>
    <v-container id="content" class="font-sans">
      <v-btn id="float-button" fab large>
        <v-icon>arrow_upward</v-icon>
      </v-btn>
      <div id="box-top" class="">
        <div id="box-logo-desc-contact" class="">
          <div id="logo">
            <img src="/logo.png" alt="Logo de l'annuaire universel du cameroun">
          </div>
          <p class="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque culpa distinctio error ex expedita iure maiores perferendis quam sint? A assumenda autem beatae delectus ipsa ipsum iusto molestiae nulla.
          </p>
          <div id="num-title" class="">
            <v-icon class="mr-2">
              settings_phone
            </v-icon>
            <span>
              Service clientèle
            </span>
          </div>
          <div id="number" class="">
            +237 622 006 540
          </div>
          <div id="bottom-title" class="">
            Du lundi au vendredi entre 08h00 à 18h00
          </div>
        </div>
        <div id="box-social-link-form" class="">
          <div id="socials-lang" class="">
            <div id="social" class="">
              <social />
            </div>
            <div id="lang" class="">
              <span id="plan-site">plan du site</span>
              <div class="formfield-select">
                <div class="formfield-select--container">
                  <select id="mon_select">
                    <option>Français</option>
                    <option>English</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div id="links-form" class="">
            <div id="links" class="">
              <my-link id="links1" :links="list1" />
              <my-link id="links2" :links="list2" />
            </div>
            <div id="form" class="">
              <contact-form />
            </div>
          </div>
        </div>
      </div>
      <div id="box-bottom" class="">
        <div id="politique" class="">
          <a v-for="(item, key) in politiques" :key="key" :href="item.link">
            {{ item.title }}
          </a>
        </div>
        <div id="pay" class="">
          <pay :pay="payMods" />
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import MyLink from './my-links/MyLink'
import Social from '~/components/footer/social/Social'
import ContactForm from '~/components/footer/ContactForm'
import Pay from '~/components/footer/pay/Pay'
export default {
  name: 'TheFooter',
  components: { Pay, ContactForm, MyLink, Social },
  data: () => ({
    list1: {
      title: 'A propos de nous',
      list: [
        {
          link: '#',
          title: 'Contactez PJ'
        },
        {
          link: '#',
          title: 'Carrières'
        },
        {
          link: '#',
          title: 'Investisseurs'
        },
        {
          link: '#',
          title: 'Entreprise'
        },
        {
          link: '#',
          title: 'Annoncez avec nous'
        },
        {
          link: '#',
          title: 'S\'inscrire'
        },
        {
          link: '#',
          title: 'Prévénir la fraude'
        },
        {
          link: '#',
          title: 'Aide'
        }
      ]
    },
    list2: {
      title: 'Liens rapides',
      list: [
        {
          link: '#',
          title: 'Navigation par catégorie'
        },
        {
          link: '#',
          title: 'Naviguer par ville'
        },
        {
          link: '#',
          title: 'Naviguer par quartier'
        },
        {
          link: '#',
          title: 'Naviguer par domaines'
        },
        {
          link: '#',
          title: 'Numéros utiles'
        }
      ]
    },
    politiques: [
      {
        title: 'Politique de confidentialité',
        link: '#'
      },
      {
        title: 'Conditions générale d\'utilisation',
        link: '#'
      },
      {
        title: 'Déclaration de confidentialité',
        link: '#'
      }
    ],
    payMods: {
      title: 'Paiements supportés',
      list: [
        {
          src: '/om.svg',
          alt: 'Mode de payement par orange money'
        },
        {
          src: '/logo.png',
          alt: ''
        },
        {
          src: '/logo.png',
          alt: ''
        },
        {
          src: '/logo.png',
          alt: ''
        },
        {
          src: '/logo.png',
          alt: ''
        },
        {
          src: '/logo.png',
          alt: ''
        }
      ]
    }
  })
}
</script>

<style lang="scss" scoped>
  $primary: rgba(10, 19, 141, 0.54);
  $mt: 24px;
  $h: 72px;
  $cm: 5px;
  #the-footer{
    background: $primary;
    color: white;
    @media screen and (max-width: 425px) {
      padding: 0;
    }
    #content{
      display: flex;
      flex-direction: column;
      position: relative;
      #float-button{
        background: $yellow;
        color: white;
        border: 3px solid white;
        position: absolute;
        top: -44px;
        z-index: 2000;
        right: 0;
      }
      #box-top{
        display: grid;
        grid-template-columns: 3fr 7fr;
        grid-gap: 15px;
        #box-logo-desc-contact{
          display: flex;
          flex-direction: column;
          #logo{
            width: 100%;
            margin-bottom: $mt;
            img{
              height: 100%;
            }
          }
          p{
            width: 100%;
            margin-bottom: $mt;
            font-size: 13px;
            @media screen and (max-width: 768px) {
              display: none;
            }
          }
          #num-title{
            width: 100%;
            margin-bottom: $cm;
            font-size: 15px;
            color: white;
            i {
              color: white;
            }
          }
          #number{
            width: 100%;
            margin-bottom: $cm;
            font-size: 30px;
            font-weight: bold;
          }
          #bottom-title{
            font-size: .75rem;
            font-style: italic;
            width: 100%;
          }
        }
        #box-social-link-form{
          margin-top: 32px;
          #socials-lang{
            display: grid;
            grid-template-columns: 7fr 5fr;
            grid-gap: 20px;
            @media screen and (max-width: 425px) {
              grid-template-columns: 1fr;
              #social{
                display: none;
              }
              #lang{
                justify-content: flex-start!important;
              }
            }
            @media screen and (max-width: 768px) {
              border-top: 1px solid rgba(255,255,255,.5);
              margin-top: 20px;
              #social{
                display: flex;
                align-items: center;
              }
            }
            #social{
              height: 71px;
            }
            #lang{
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-self: center;
              #plan-site{
                align-self: center;
                &:after{
                  content: '';
                  width: 1px;
                  height: 1px;
                  border-right: 1px solid rgba(255,255,255,.5);
                  margin-left: 10px;
                }
              }
              .formfield-select {
                position: relative;
                margin-left: 10px;
              }
              .formfield-select--container{
                position: relative;
                overflow: hidden;
                width: 100px;
                select {
                  appearance: none;
                  height: auto;
                  border: 0;
                  border-radius: 0;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color: $yellow;
                  background: $primary;
                  padding: 10px;
                  option{
                    margin: 20px;
                  }
                }
                &::after {
                  content: '';
                  position: absolute;
                  top: 23px;
                  margin-top: -3px;
                  right: .5em;
                  display: block;
                  width: 0; height: 0;
                  border-color: transparent;
                  border-top-color: $yellow;
                  border-width: 6px;
                  border-style: solid;
                  pointer-events: none;
                }
              }
            }
          }
          #links-form{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            border-top: 1px solid rgba(255,255,255,.5);
            padding-top: 20px;
            padding-left: 5px;
            @media screen and (max-width: 1024px) {
              grid-template-columns: 4fr 8fr;
            }
            @media screen and (max-width: 768px) {
              grid-template-columns: 1fr;
              #links{
                display: none;
              }
            }
            @media screen and (max-width: 1024px) {
              grid-template-columns: 1fr 1fr;
            }
            @media screen and (max-width: 518px) {
              grid-template-columns: 1fr;
              grid-gap: 0;
              #links{
                display: none!important;
              }
              #form{
                padding-left: 0!important;
              }
            }
            @media screen and (max-width: 960px) {
              grid-template-columns: 1fr 2fr;
              #links2{
                display: none!important;
              }
              #form{
                padding-left: 0!important;
              }
            }
            #links{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }
            #form{
              padding-left: 24px;
            }
          }
        }
        @media screen and (max-width: 768px){
          grid-template-columns: 1fr;
          grid-gap: 5px;
          #box-social-link-form{
            margin-top: 0;
          }
        }
      }
      #box-bottom{
        display: grid;
        grid-template-columns: 7fr 5fr;
        grid-gap: 20px;
        margin-top: 20px;
        @media screen and (max-width: 512px) {
          grid-template-columns: 1fr;
        }
        #politique{
          display: flex;
          align-self: end;
          flex-wrap: wrap;
          a{
            padding-right: 24px;
            padding-bottom: 12px;
          }
        }
        #pay{}
      }
    }
  }
</style>
