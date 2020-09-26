<template>
  <div id="util-number">
    <header-second />
    <v-container style="margin-top: 27px;" class="util-number-container">
      <fil-ariane :links="ariane" :icon="false" />
      <div class="util-number-header">
        <page-presentation :information="headerInfo" />
        <div class="util-number-header-search">
          <the-filters :filters="filters" class="util-number-header-search-filter" />
          <search-input class="util-number-header-search-filter-search" />
        </div>
      </div>
      <div class="util-number-header-content">
        <div v-for="(v, k) in numbers" :key="k" class="util-number-header-content-section">
          <h2 class="util-number-header-content-section-title">
            {{ v.name }} ({{ v.phones.length }})
          </h2>
          <p class="util-number-header-content-section-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quasi rem sint? Adipisci alias commodi in laborum magni natus nisi optio perspiciatis, qui quidem quo quos recusandae sit tenetur voluptatum?
          </p>
          <numero-urgent-list :phones="v.phones" class="util-number-header-content-section-list" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import FilAriane from '@/components/searchs/filAriane/FilAriane'
import HeaderSecond from '@/components/header-second/HeaderSecond'
import PagePresentation from '@/components/page-presentation/PagePresentation'
import TheFilters from '@/components/searchs/filters/TheFilters'
import SearchInput from '@/components/searchs/search-input/SearchInput'
import NumeroUrgentList from '@/components/numero-urgent/NumeroUrgentList'
export default {
  name: 'UtilNumbers',
  components: { NumeroUrgentList, SearchInput, TheFilters, PagePresentation, HeaderSecond, FilAriane },
  data: () => ({
    ariane: [
      {
        title: 'Accueil',
        to: '/'
      },
      {
        title: 'Numéro utiles',
        to: '/'
      }
    ],
    headerInfo: {
      title: 'Numéros utiles',
      subtitle: 'Liste exclusive de plus de 23 numétos utiles et essentiels au cameroun'
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
    numbers: [
      {
        name: 'Les numéros d\'urgence',
        phones: [
          {
            number: '1510',
            color: '#B71C1C',
            title: "Numéro d'appel de la police",
            description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
          },
          {
            number: '1521',
            color: '#C62828',
            title: "Numéro d'appel de la police",
            description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
          },
          {
            number: '111',
            color: '#D32F2F',
            title: "Numéro d'appel de la police",
            description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
          },
          {
            number: '114',
            color: '#E53935',
            title: "Numéro d'appel de la police",
            description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
          },
          {
            number: '118',
            color: '#EF5350',
            title: "Numéro d'appel de la police",
            description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
          },
          {
            number: '119',
            color: '#E57373',
            title: "Numéro d'appel de la police",
            description: 'nihil saepe sapiente, velit? Aspernatur distinctio labore perferendis reprehenderit sunt!'
          }
        ]
      },
      {
        name: 'Les numéros de sécurité',
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
        ]
      },
      {
        name: 'Les numéros de conseils',
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
        ]
      },
      {
        name: 'Les numéros d\'Opérateurs',
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
        ]
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
#util-number{
  .util-number-container{
    .util-number-header{
      .util-number-header-search{
        display: flex;
        @media screen and (max-width: 569px){
          flex-wrap: wrap;
          .util-number-header-search-filter{
            width: 100%!important;
            margin-right: 0!important;
            margin-bottom: 8px;
          }
          .util-number-header-search-filter-search{
            width: 100%;
          }
        }
        .util-number-header-search-filter{
          width: calc(100% - 248px);
          margin-right: 10px;
        }
      }
    }
    .util-number-header-content{
      margin-top: 50px;
      .util-number-header-content-section{
        margin-bottom: 50px;
        .util-number-header-content-section-title{
          font-family: "Open Sans", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          color: $primary;
          display: flex;
          align-items: center;
          &:before{
            content: "";
            width: 6px;
            height: 6px;
            background: $primary;
            display: inline-block;
            border-radius: 6px;
            margin-right: 10px;
          }
        }
        .util-number-header-content-section-desc{
          font-family: 'Open sans', sans-serif;
          font-size: 13px;
          color: #333333;
          font-style: italic;
        }
        .util-number-header-content-section-list{
          @media screen and (max-width: 859px) {
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
