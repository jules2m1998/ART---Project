export default {
  data: () => ({
    element: undefined,
    fake: undefined,
    rect: null,
    top: null
  }),
  methods: {
    scrollY () {
      const supportPageOffset = window.pageXOffset !== undefined
      const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    },
    onscroll () {
      const hasScrollClass = this.element.classList.contains('sticky')
      if (this.scrollY() > this.top && !hasScrollClass) {
        this.element.classList.add('sticky')
        this.element.style.width = this.width + 'px'
        this.element.parentNode.insertBefore(this.fake, this.element)
      } else if (this.scrollY() <= this.top && hasScrollClass) {
        this.element.classList.remove('sticky')
        this.element.parentNode.removeChild(this.fake)
      }
      console.log(this.scrollY() <= this.top, this.scrollY(), this.top)
    },
    onresize () {
      this.element.style.width = 'auto'
      this.element.classList.remove('sticky')
      this.fake.style.display = 'none'
      this.rect = this.element.getBoundingClientRect()
      this.top = this.rect.top + this.scrollY()
      this.fake.style.width = this.rect.width + 'px'
      this.fake.style.height = this.rect.height + 'px'
      this.fake.style.display = 'block'
      this.onscroll()
    }
  },
  mounted () {
    this.element = document.querySelector('[data-sticky]')
    this.rect = this.element.getBoundingClientRect()
    this.top = this.rect.top + this.scrollY()
    this.width = this.rect.width
    this.fake = document.createElement('div')
    this.fake.style.width = this.rect.width + 'px'
    this.fake.style.height = this.rect.height + 'px'
    window.addEventListener('scroll', this.onscroll.bind(this))
    window.addEventListener('resize', this.onresize.bind(this))
  }
}
