<template>
  <div class="villes">
    <div class="description">
      <h1 class="home--title editable" @save="setTitle" @reset="resetTitle">
        {{ value.content.title }}
      </h1>
      <p class="editable" @save="setDescription" @reset="resetDescription">
        {{ value.content.description }}
      </p>
    </div>
    <villes-list v-model="value.content.villes" style="margin-bottom: 26px;" />
  </div>
</template>

<script>
import VillesList from '~/components/ville-home/VillesList'
export default {
  name: 'Villes',
  components: { VillesList },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    setTitle (e) {
      this.value.content.title = e.target.textContent.trim()
    },
    resetTitle (e) {
      e.target.textContent = this.value.content.title
    },
    setDescription (e) {
      this.value.content.description = e.target.textContent.trim()
    },
    resetDescription (e) {
      e.target.textContent = this.value.content.description
    }
  }
}
</script>

<style lang="scss" scoped>
.villes{
  .description{
    margin-bottom: 26px;
    .home--title{
      font-size: 16px;
      margin-bottom: 16px;
    }
    p{
      font-size: 13px;
      font-family: 'roboto', sans-serif;
      font-weight: 300;
      color: #333333;
    }
  }
}

</style>
