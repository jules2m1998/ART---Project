export default {
  data: () => ({
    element: undefined,
    fake: undefined,
    rect: null,
    top: null,
    inme: undefined,
    disappear: undefined,
    appear: undefined,
    mount: undefined,
    parentMount: undefined,
    mountParentLn: null
  }),
  methods: {
    /**
     * Renvoie le nombre de scroll de la page
     * @return {Number}
     */
    scrollY () {
      const supportPageOffset = window.pageXOffset !== undefined
      const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    },
    /**
     * Applique le comportement sticky lors du scroll et anime les élément
     */
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
      const nbScroll = this.scrollY() < this.mountParentLn ? this.scrollY() : this.mountParentLn
      const parentHeight = this.scrollY() < this.mountParentLn ? (this.mountParentLn - this.scrollY()) !== 0 ? (this.mountParentLn - this.scrollY()) + 'px' : 'auto' : '0'
      const parentMountH = this.mount.parentNode.getBoundingClientRect().height
      // const transpourcent = parentMountH / this.mountParentLn * 100 > 0 ? parentMountH / this.mountParentLn * 100 : 0
      let transAppear
      let transDisAppear
      if (this.scrollY() > 0) {
        transAppear = parentMountH * this.appear.getBoundingClientRect().width / this.mountParentLn
        transDisAppear = parentMountH * this.appear.getBoundingClientRect().width / this.mountParentLn
      } else {
        transAppear = 100
        transDisAppear = 100
      }

      this.mount.style.transform = `translate3d(0, -${nbScroll}px, 0)`
      this.mount.parentNode.style.height = parentHeight

      this.appear.style.transform = `translate3d(-${100 - transAppear}%,0,0)`
      this.disappear.style.transform = `translate3d(${100 - transDisAppear}%,0,0)`
    },
    /**
     * Permet la mise en responsive
     */
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
    },
    /**
     * Renvoie la hauteur du parent du mount
     * @return {number | number}
     */
    parentMountBounding () {
      return this.inme.getBoundingClientRect().height
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

    this.inme = document.querySelector('[data-inme]')
    this.disappear = document.querySelector('[data-disappear]')
    this.appear = document.querySelector('[data-appear]')
    this.mount = document.querySelector('[data-mount]')
    this.parentMount = this.mount.parentNode

    this.appear.parentNode.style.transform = `translate3d( ${this.appear.getBoundingClientRect().width}px,0,0)`
    this.mountParentLn = this.parentMountBounding()

    window.addEventListener('scroll', this.onscroll.bind(this))
    window.addEventListener('resize', this.onresize.bind(this))
  }
}
