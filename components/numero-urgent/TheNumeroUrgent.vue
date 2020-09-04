<template>
  <div class="urgents">
    <h1 class="home-title editable" @save="setTitle" @reset="resetTitle">
      {{ value.content.title }}
    </h1>
    <p class="my-msg editable" @save="setSubTitle" @reset="resetSubTitle">
      {{ value.content['sub-title'] }}
    </p>
    <numero-urgent-list v-model="value.content.numbers" />
  </div>
</template>

<script>
import NumeroUrgentList from '@/components/numero-urgent/NumeroUrgentList'
export default {
  name: 'TheNumeroUrgent',
  components: { NumeroUrgentList },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  mounted () {
  },
  methods: {
    setTitle (e) {
      this.value.content.title = e.target.textContent.trim()
    },
    resetTitle (e) {
      e.target.textContent = this.value.content.title
    },
    setSubTitle (e) {
      this.value.content['sub-title'] = e.target.textContent.trim()
    },
    resetSubTitle (e) {
      e.target.textContent = this.value.content['sub-title']
    }
  }
}
</script>

<style lang="scss" scoped>
  .urgents{
    margin-top: 72px;
    .my-msg{
      font-family: 'Open sans', sans-serif;
      font-size: 13px;
      color: #333333;
    }
  }
</style>
