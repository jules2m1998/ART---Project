export default {
  methods: {
    addMediaQuery (maxwidth, setIsRensponsive) {
      const media = window.matchMedia(`(max-width: ${maxwidth}px)`)
      const screenTest = (e) => {
        setIsRensponsive(e)
      }
      media.addEventListener('change', screenTest)
    }
  }
}
