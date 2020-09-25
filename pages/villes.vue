<template>
  <div id="villes">
    <header-second />
    <v-container class="villes-container">
      <fil-ariane :links="ariane" :icon="false" />
      <div class="villes-container-header">
        <page-presentation :information="headerInfo" />
        <div class="villes-container-header-search">
          <the-filters :filters="filters" class="villes-container-header-search-filter" />
          <search-input class="villes-container-header-search-search" />
        </div>
      </div>
      <div class="villes-container-content">
        <ul class="villes-container-content-list">
          <li v-for="(v, i) in villes" :key="i" class="villes-container-content-list-item" :class="{'horizontal': i % 3 === 0, 'vertical': i % 4 === 0, 'big': i % 6 === 0 }">
            <img :src="v.img" class="villes-container-content-list-item-img" alt="Test">
            <div class="villes-container-content-list-item-inner">
              <span class="_ville-name">{{ v.name }}</span>
              <span class="_enterprise-number">{{ v.nbEnterprise }} entreprises</span>
              <span class="_ville-region">{{ v.region }}</span>
            </div>
          </li>
        </ul>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeaderSecond from '@/components/header-second/HeaderSecond'
import FilAriane from '@/components/searchs/filAriane/FilAriane'
import PagePresentation from '@/components/page-presentation/PagePresentation'
import TheFilters from '@/components/searchs/filters/TheFilters'
import SearchInput from '@/components/searchs/search-input/SearchInput'
export default {
  name: 'Villes',
  components: { SearchInput, TheFilters, PagePresentation, FilAriane, HeaderSecond },
  data: () => ({
    ariane: [
      {
        title: 'Accueil',
        to: '/'
      },
      {
        title: 'Liste des villes',
        to: '/'
      }
    ],
    headerInfo: {
      title: 'Liste des villes',
      subtitle: 'Plus de 30 villes disponibles sur l\'annuaire universelle du Cameroun'
    },
    filters: [
      {
        title: 'Catégories',
        isActive: false,
        filters: [
          {
            id: 0,
            name: 'Filtre 0',
            isActive: false
          },
          {
            id: 1,
            name: 'Filtre 1',
            isActive: false
          },
          {
            id: 2,
            name: 'Filtre 2',
            isActive: false
          },
          {
            id: 3,
            name: 'Filtre 3',
            isActive: false
          },
          {
            id: 4,
            name: 'Filtre 4',
            isActive: false
          },
          {
            id: 5,
            name: 'Filtre 5',
            isActive: false
          }
        ],
        id: 0
      },
      {
        title: 'Links',
        isActive: false,
        id: 1
      },
      {
        title: 'Langues',
        isActive: false,
        filters: [
          {
            id: 0,
            name: 'Francais',
            isActive: false
          },
          {
            id: 1,
            name: 'Anglais',
            isActive: false
          }
        ],
        id: 2
      },
      {
        title: 'Links',
        isActive: false,
        id: 3
      },
      {
        title: 'Links',
        isActive: false,
        id: 4
      }
    ],
    villes: [
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      },
      {
        name: 'Douala',
        nbEnterprise: 42,
        region: 'Littoral',
        img: 'https://www.annuaire-universel.cm/front/images/cities/douala.png',
        direction: 'horizontal'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  #villes{
    .villes-container{
      margin-top: 27px;
      .villes-container-header{
        .villes-container-header-search{
          display: flex;
          @media screen and (max-width: 569px){
            flex-wrap: wrap;
            .villes-container-header-search-filter{
              width: 100%!important;
              margin-right: 0!important;
              margin-bottom: 8px;
            }
            .villes-container-header-search-search{
              width: 100%;
            }
          }
          .villes-container-header-search-filter{
            width: calc(100% - 248px);
            margin-right: 10px;
          }
        }
      }
      .villes-container-content{
        margin-top: 27px;
        .villes-container-content-list{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          grid-auto-rows: 240px;
          grid-auto-flow: dense;
          gap: 8px;
          margin-bottom: 36px;
          @media only screen and (max-width: 600px) {
            grid-template-columns: auto;
          }
          @media only screen and (max-width: 450px) {
            grid-template-columns: 1fr;
            .villes-container-content-list-item{
              grid-column: auto/span 2;
            }
          }
          .villes-container-content-list-item{
            border-radius: 4px;
            cursor: pointer;
            position: relative;
            display: -webkit-box;
            display: flex;
            height: 100%;
            overflow: hidden;
            background-color: #ccc;
            -webkit-box-align: start;
            align-items: flex-start;
            -webkit-box-pack: end;
            justify-content: flex-end;
            &.horizontal {
              grid-column: auto/span 2;
              .villes-container-content-list-item-img{
                max-width: 200%;
                max-height: 200%;
              }
            }
            &.vertical {
              grid-row: span 2;
              .villes-container-content-list-item-img{
                max-width: unset;
                max-height: 200%;
              }
            }
            &.big {
              grid-column: span 2;
              grid-row: span 2;
              .villes-container-content-list-item-img{
                max-width: 200%;
                max-height: 200%;
              }
            }
            @media screen and (max-width: 450px) {
              &.big, &.vertical{
                grid-row: auto;
              }
              &.big .villes-container-content-list-item-img, &.vertical .villes-container-content-list-item-img{
                max-width: 100%;
                max-height: 100%;
              }
            }
            &:hover{
              background-color: #fafafa !important;
              .villes-container-content-list-item-inner{
                background-color: rgba(0, 0, 0, 0.12);
                ._ville-name, ._enterprise-number{
                  color: #ffffff;
                }
              }
            }
            .villes-container-content-list-item-img{
              position: absolute;
              min-width: 100%;
              min-height: 100%;
              max-width: unset;
              max-height: 150%;
              top: 0%;
              left: 0%;
              &:hover{
                -webkit-transform: scale(1.2, 1.2);
                transform: scale(1.2, 1.2);
              }
            }
            .villes-container-content-list-item-inner{
              max-width: 80%;
              max-height: 80%;
              margin: 8px;
              padding: 8px 24px;
              border-radius: 5px;
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              display: -webkit-box;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              flex-direction: column;
              font-size: smaller;
              font-style: italic;
              color: #ffffff;
              background-color: #f9c80f;
              &:hover{
                background-color: rgba(0, 0, 0, 0.12);
              }
              ._ville-name{
                font-style: normal;
                font-family: sans-serif;
                text-align: left;
                font-size: 1.2rem;
                font-weight: 600;
                text-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
                line-height: 1.5;
              }
              ._enterprise-number, ._ville-name{
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
  * {
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box !important;
  }
</style>
