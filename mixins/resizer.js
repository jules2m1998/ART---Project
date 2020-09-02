export default {
  methods: {
    ellipsizeTextBox (id) {
      const el = document.querySelector('#' + id)
      const wordArray = el.innerHTML.split(' ')
      while (el.scrollHeight > el.offsetHeight) {
        wordArray.pop()
        el.innerHTML = wordArray.join(' ') + '...'
      }
    }
  }
}
