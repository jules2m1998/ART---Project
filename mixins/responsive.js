export default {
  /**
   * @callback responsiveCallBack
   * @param {boolean} e
   */
  methods: {
    /**
     * Rajoute un media query en considérant le max-width
     * @param {number} maxwidth
     * @param {responsiveCallBack} setIsRensponsive
     */
    addMediaQuery (maxwidth, setIsRensponsive) {
      const media = window.matchMedia(`(max-width: ${maxwidth}px)`)
      const screenTest = (e) => {
        setIsRensponsive(e.matches)
      }
      media.addEventListener('change', screenTest)
      setIsRensponsive(window.innerWidth <= maxwidth)
    },
    /**
     * Rajoute un media query en considérant le min-width
     * @param {number} minwidth
     * @param {responsiveCallBack} setIsRensponsive
     */
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
