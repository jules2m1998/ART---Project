export default {
  data: {
    callBack: []
  },
  methods: {
    addMediaQuery (maxwidth, setIsRensponsive) {
      const media = window.matchMedia(`(max-width: ${maxwidth}px)`)
      const screenTest = (e) => {
        setIsRensponsive(e.matches)
      }
      media.addEventListener('change', screenTest)
      setIsRensponsive(window.innerWidth <= maxwidth)
    },
    addMediaQueryMin (minwidth, setIsRensponsive) {
      const media = window.matchMedia(`(min-width: ${minwidth}px)`)
      const screenTest = (e) => {
        setIsRensponsive(e.matches)
      }
      media.addEventListener('change', screenTest)
      setIsRensponsive(window.innerHeight >= minwidth)
    }
  }
}
