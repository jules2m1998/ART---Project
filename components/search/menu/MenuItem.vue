<template>
  <div>
    <nuxt-link class="menu" :to="item.to">
      <span>
        {{ item.name.toUpperCase() }}
      </span>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu{
    padding: 6px 22px;
    color: $yellow;
    font-weight: bold;
    position: relative;
    text-shadow: 0 0 4px #f5c511bd;
    &::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 6px;
    }
    &.nuxt-link-active:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 6px;
      background: $yellow;
      border-radius: 8px 8px 0 0;
    }
  }
</style>
