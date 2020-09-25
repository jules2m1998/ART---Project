<template>
  <div id="defilement">
    <v-container class="marquee">
      <div class="marquee-inner">
        <div v-for="index in 10" :key="index" class="marquee-item">
          <div class="marquee-title">
            Texte de défilement
          </div>
          <div class="marquee-link">
            <a href="#" class="">Voir plus</a>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Defilement'
}
</script>

<style lang="scss" scoped>
#defilement{
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 3px 0 #0000008a;
  .marquee{
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .marquee-inner{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      animation: marquee 120s linear infinite;
      .marquee-item{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 13px;
        &:last-child{
          .marquee-link{
            &:after{
              content: "";
              width: 0;
              height: 0;
              border-radius: 0;
              background: unset;
              margin: 0 0;
            }
          }
        }
        .marquee-title{
          font-family: "Open Sans", sans-serif;
          font-weight: 600;
          font-size: 13px;
          white-space: nowrap;
        }
        .marquee-link{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          & a{
            color: #020b89;
            font-family: "Open Sans", sans-serif!important;
            font-size: 13px!important;
            white-space: nowrap;
          }
          &:after{
            content: "";
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background: $yellow;
            margin: 0 24px;
          }
          &:before{
            content: "";
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background: $yellow;
            margin: 0 24px;
          }
        }
      }
    }
  }
}
@keyframes marquee {
  0% {
    transform: translateX(50%);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(50%);
  }
}
</style>
