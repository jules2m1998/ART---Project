export default {
  methods: {
    regexPhone (data) {
      const phoneno = /6[^134][0-9]{7}/
      return !!data.match(phoneno) && data.length === 9
    },
    regexEmail (data) {
      const email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
      return !!data.match(email)
    }
  }
}
