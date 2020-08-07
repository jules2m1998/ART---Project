export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  mounted () {
    this.elt = document.getElementById('my-dialog')
    const firstParent = this.elt?.parentElement
    firstParent.style.overflowY = 'auto'
    firstParent.style.maxWidth = 'none'
    firstParent.style.margin = '0'
    firstParent.style.paddingTop = '20px'
    firstParent.style.paddingBottom = '20px'
    firstParent.style.minHeight = '100%'
    firstParent.style.display = 'flex'
    document.body.style.overflow = 'none'
    document.documentElement.style.overflowY = 'hidden'
  },
  methods: {
    closeDialog (e) {
      this.$emit('input', false)
      document.documentElement.style.overflowY = 'auto'
      this.isSignin = true
      document.documentElement.style.overflowY = 'auto'
    }
  },
  destroyed () {
    document.documentElement.style.overflowY = 'auto'
  }
}
