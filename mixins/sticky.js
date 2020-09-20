export default {
  props: {
    isHome: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data: () => ({
    /**
     * L'element qui a qui on va appliquer le comportement au scroll
     * @type {HTMLElement}
     */
    element: undefined,
    /**
     * L'element qui va remplace element lors du scroll
     * @type {HTMLElement}
     */
    fake: undefined,
    /**
     * contient toutes les information de l'element
     * @type {DOMRect}
     */
    rect: null,
    /**
     * contient la position par rapport au haut de l'élément
     * @type {number}
     */
    top: null,
    /**
     * contient les elements à animer lors du scroll de element
     * @type {NodeListOf}
     */
    nodes: undefined,
    /**
     * contient les elements à animer et des information utiles à l'animation lors du scroll de element
     * @type {Array}
     */
    boxes: [],
    /**
     * contient la hauteur initiale de l'élement
     * @type {number}
     */
    elementH: null,
    /**
     * Determine si c'est la premiere fois que le scroll est effectué
     * @type {Boolean}
     */
    first: true,
    /**
     * Contient la hauteur de l'ement au premier scroll
     * @type {number}
     */
    h: null,
    /**
     * Determine le sens du scroll
     * @type {Boolean}
     */
    isTopVisible: true
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
      // Comportement du sticky
      const hasScrollClass = this.element.classList.contains('sticky')
      if (this.scrollY() > this.top && !hasScrollClass) {
        this.element.classList.add('sticky')
        this.element.style.width = '100%'
        if (!this.isHome) {
          this.element.parentNode.insertBefore(this.fake, this.element)
          this.animateElements()
        }
        this.isTopVisible = false
      } else if (this.scrollY() <= this.top && hasScrollClass) {
        this.element.classList.remove('sticky')
        if (!this.isHome) {
          this.element.parentNode.removeChild(this.fake)
          this.animateElements(false)
        }
        this.isTopVisible = true
      }
    },
    /**
     * Permet la mise en responsive
     */
    onresize () {
      this.element.style.width = '100%'
      this.element.classList.remove('sticky')
      this.fake.style.display = 'none'
      this.rect = this.element.getBoundingClientRect()
      this.top = this.rect.top + this.scrollY()
      this.fake.style.width = this.rect.width + 'px'
      this.fake.style.height = this.rect.height + 'px'
      this.fake.style.display = 'block'
      this.onscroll()
      this.element.style.height = 'auto!important'
    },
    /**
     * Initialise les information necessaire au comportement de l'element lors du scroll
     */
    initScrollData () {
      this.element = document.querySelector('[data-sticky]')
      this.rect = this.element.getBoundingClientRect()
      this.top = this.rect.top + this.scrollY()
      this.width = this.rect.width
      this.fake = document.createElement('div')
      this.fake.classList.add('fake-menu')
      this.fake.style.width = this.rect.width + 'px'
      this.fake.style.height = this.rect.height + 'px'
      window.addEventListener('scroll', this.onscroll.bind(this))
      window.addEventListener('resize', this.onresize.bind(this))
    },
    /**
     * Initialise les information necessaire au comportement de l'animation du contenu de l'element lors du scroll
     */
    initAnimationScroll () {
      this.nodes = document.querySelectorAll('[data-animate]')
      this.elementH = this.element.getBoundingClientRect().height
      for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i]
        // eslint-disable-next-line no-undef
        TweenLite.set(node, { x: 0 })

        this.boxes[i] = {
          transform: node._gsTransform,
          x: node.offsetLeft,
          y: node.offsetTop,
          width: node.getBoundingClientRect().width,
          node
        }
      }
    },
    /**
     * Anime le contenu de l'element lors du scroll
     */
    animateElements (isDown = true) {
      if (window.innerWidth > 809) {
        // eslint-disable-next-line no-undef
        const tweenLite = TweenLite
        for (let i = 0; i < this.boxes.length; i++) {
          const box = this.boxes[i]

          const lastX = box.x
          const lastY = box.y

          box.x = box.node.offsetLeft
          box.y = box.node.offsetTop

          // Continue if box hasn't moved
          if (lastX === box.x && lastY === box.y) { continue }

          // Reversed delta values taking into account current transforms
          const x = box.transform.x + lastX - box.x
          const y = box.transform.y + lastY - box.y
          tweenLite.fromTo(box.node, 0.6, { x, y }, { x: 0, y: 0, ease: 'slow(0.7, 0.7, false)' })

          // Tween to 0 to remove the transforms
        }
        if (isDown) {
          if (this.first) {
            this.h = this.element.getBoundingClientRect().height
          }
          tweenLite.fromTo(this.element, 0.6, { height: this.elementH }, { height: this.h })
          this.first = false
        }
        if (!isDown) {
          tweenLite.fromTo(this.element, 0, { height: this.element.getBoundingClientRect().height }, { height: 'auto' })
        }
      }
      setTimeout(() => {
        this.element.style.height = 'auto'
      }, 600)
    }
  },
  mounted () {
    this.initScrollData()
    this.initAnimationScroll()
  }
}
