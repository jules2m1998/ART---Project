<template>
  <v-card
    class="my-enterprise mx-2"
    max-width="400"
  >
    <div class="my-top">
      <div class="shadow" />
      <div class="my-text">
        <div class="my-title">
          Groupe forguet Audioprothésistes
        </div>
        <div class="my-type">
          <v-icon size="16" color="black">
            home
          </v-icon> Santé / Audioprothésie
        </div>
      </div>
    </div>
    <div class="my-middle">
      <div class="location ellipsis">
        Lorem ipsum dolor sit amet, consectetur
      </div>
      <div class="rating-links">
        <div class="rating mr-1">
          <v-rating v-model="rating" color="secondary" dense small /> (12)
        </div>
        <div class="open">
          Ouvert à 08h30
        </div>
      </div>
    </div>
    <div class="my-bottom">
      <div id="btns">
        <v-btn color="primary" x-small height="36" width="36">
          <v-icon size="14">
            call
          </v-icon>
        </v-btn>
        <v-btn color="primary" x-small height="36" width="36">
          <v-icon size="14">
            email
          </v-icon>
        </v-btn>
        <v-btn color="primary" x-small height="36" width="36">
          <v-icon size="14">
            language
          </v-icon>
        </v-btn>
      </div>
      <div class="itineraire">
        <nuxt-link to="/" color="primary">
          itinéraire >>
        </nuxt-link>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'HomeEnterpriseItem',
  data: () => ({
    /**
     * La note d'une entreprise
     */
    rating: 1
  })
}
</script>

<style lang="scss" scoped>
.my-enterprise{
  padding: 6px;
  width: 250px;
  display: flex;
  flex-direction: column;
  .my-top{
    background: url("https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    background-size: cover;
    height: 90px;
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    position: relative;
    .shadow{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 0;
    }
    .my-text{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      .my-title{
        font-size: 14px;
        color: white;
        height: 40px;
        max-width: 180px;
        display: flex;
        align-items: flex-end;
        font-family: 'open sans',sans-serif;
        z-index: 2;
        margin: 8px 0 8px 12px;
      }
      .my-type{
        background: rgba($yellow, .8);
        display: inline-block;
        font-size: 11px;
        border-radius: 0 12px 12px 0;
        padding: 0 12px 0 12px;
        height: 24px;
        line-height: 24px;
      }
    }
  }
  .my-middle{
    display: flex;
    flex-direction: column;
    margin: 12px 2px 2px 2px;
    .location{
      font-size: 12px;
      color: #7f828b;
    }
    .rating-links{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      .rating{
        display: flex;
        font-size: 13px;
        font-family: 'Open sans', sans-serif;
      }
      .open{
        font-size: 10px;
      }
    }
  }
  .my-bottom{
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .itineraire{
      a{
        color: $primary;
        font-size: 11px;
        font-family: 'Open sans', sans-serif;
        font-weight: 600;
      }
    }
  }
}
</style>
