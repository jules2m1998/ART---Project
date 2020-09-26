<template>
  <div id="page-presentation">
    <div class="page-presentation-container">
      <h1 class="page-presentation-container-title">
        {{ information.title }}
      </h1>
      <div class="page-presentation-container-subtitle">
        {{ information.subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePresentation',
  props: {
    information: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#page-presentation{
  background: url("/utilNumber/categoriesPageCover.jpg") center no-repeat;
  background-size: cover;
  height: 140px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  .page-presentation-container{
    background: rgba(2, 11, 137, 0.78);
    height: 100%;
    padding: 10px;
    border-radius: inherit;
    color: white;
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .page-presentation-container-title{
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-size: 30px;
      font-weight: 400;
      line-height: 42px;
      text-align: center;
    }
    .page-presentation-container-subtitle{
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      text-align: center;
    }
  }
}
</style>
