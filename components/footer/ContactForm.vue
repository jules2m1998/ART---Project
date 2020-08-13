<template>
  <div style="max-width: 450px;">
    <h1>
      {{ title.toUpperCase() }}
    </h1>
    <div id="form">
      <div id="names" class="mt-5">
        <span id="last">
          <input type="text" placeholder="Prénom">
        </span>
        <span id="firts">
          <input id="second" type="text" placeholder="Nom">
        </span>
      </div>
      <div id="email" class="mt-4">
        <input type="email" placeholder="Email">
        <button>S'abonner</button>
      </div>
      <div id="msg-desa">
        Vous pouvez vous désabonner en tout temps
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    /**
     * Le titre du formulaire
     */
    title: 'Abonnez-vous a notre newsletter'
  })
}
</script>

<style lang="scss" scoped>
  $radius: 8px;
  $border: 1px;
  $inputh: 40px;
  *{
    color: white;
  }
  h1{
    font-size: 18px;
  }
  #form{
    input{
      padding: 13px;
      &::placeholder{
        color: $yellow;
        opacity: .54;
        font-style: italic;
      }
    }
    #names{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      span{
        height: $inputh;
        border: $border solid rgba(255,255,255,.5);
        width: 50%;
        input{
          height: 100%;
          color: $yellow;
          width: 100%;
          display: flex;
        }
        &:first-child{
          border-right: none;
          border-radius: $radius 0 0 $radius;
        }
        &:last-child{
          border-left: none;
          border-radius: 0 $radius $radius 0;
          position: relative;
          &:before{
            content: '';
            height: 70%;
            border: $border solid rgba(255,255,255,.5);
            width: 1px;
            position: absolute;
            top: 5px;
            right: 100%;
          }
        }

      }
    }
    #email{
      border: $border solid rgba(255,255,255,.5);
      border-radius: $radius;
      display: flex;
      flex-direction: row;
      height: $inputh;
      @media screen and (max-width: 358px){
        flex-direction: column;
      }
      input{
        color: $yellow;
        flex-grow: 4;
      }
      button{
        background: $yellow;
        border-radius: 0 $radius $radius 0;
        padding: 6px 16px;
        color: $primary;
        @media screen and (max-width: 358px){
          border-radius: $radius;
        }
      }
    }
    #msg-desa{
      color: $yellow;
      font-size: .75rem;
      display: flex;
      justify-content: flex-end;
      margin-top: 12px;
      font-style: oblique;
    }
  }
</style>
