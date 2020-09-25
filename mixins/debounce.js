export default {
  methods: {
    debounce (callback, delay) {
      let timer
      return () => {
        const args = arguments
        clearInterval(timer)
        timer = setTimeout(() => {
          callback.apply(args)
        }, delay)
      }
    }
  }
}
