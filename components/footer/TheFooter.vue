<template>
  <div>
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
          <div id="mobile">
            <h2>Télécharger nos applications mobiles</h2>
            <div class="app--links">
              <a href="#"><img src="data:image/png;base64,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" alt=""></a>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" alt=""></a>
            </div>
          </div>
        </div>
      </v-container>
    </v-container>
    <bottom-footer />
  </div>
</template>

<script>
import MyLink from './my-links/MyLink'
import Social from '~/components/footer/social/Social'
import ContactForm from '~/components/footer/ContactForm'
import BottomFooter from '~/components/footer/BottomFooter'
export default {
  name: 'TheFooter',
  components: { BottomFooter, ContactForm, MyLink, Social },
  data: () => ({
    /**
     * Première liste des lien footer
     */
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
    /**
     * Deuxième liste des lien footer
     */
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
    /**
     * Liste des politiques
     */
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
    /**
     * Liste des modes de payement
     */
    payMods: {
      title: 'Paiements supportés',
      list: [
        {
          src: '/pay/orange.png',
          alt: 'Mode de payement par orange'
        },
        {
          src: '/pay/mtn.png',
          alt: 'Mode de payement par mtn'
        },
        {
          src: '/pay/visa.png',
          alt: 'Mode de payement par visa'
        },
        {
          src: '/pay/master.png',
          alt: 'Mode de payement par master card'
        },
        {
          src: '/pay/paypal.png',
          alt: 'Mode de payement via paypal'
        }
      ]
    }
  })
}
</script>

<style lang="scss" scoped>
  $primary: rgba(10, 19, 141);
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
        z-index: 20;
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
              padding-left: 0;
              #links{
                display: none!important;
              }
              #form{
                padding-left: 0!important;
              }
            }
            @media screen and (max-width: 960px) and (min-width: 518px) {
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
              display: flex!important;
              justify-content: flex-end!important;
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: wrap;
        #politique{
          display: flex;
          flex-wrap: wrap;
          a{
            color: white!important;
            display: flex;
            justify-content: center;
            align-items: center;
            &:after{
              content: "";
              width: 5px;
              height: 5px;
              border-radius: 5px;
              background: white;
              margin: 0 10px;
            }
            &:last-child:after{
              content: "";
              width: 0;
              height: 0;
              border-radius: 0;
              background: none;
              margin-right: 0;
              margin-left: 0;
            }
          }
        }
        #mobile{
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          h2{
            margin-bottom: 16px;
          }
          .app--links{
            display: flex;
            flex-direction: row;
            img{
              height: 40px;
              width: 135px;
            }
            a:first-child{
              margin-right: 12px;
            }
          }
        }
      }
    }
  }
</style>
