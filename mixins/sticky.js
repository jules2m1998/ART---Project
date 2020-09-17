export default {
  data: () => ({
    element: undefined,
    fake: undefined,
    rect: null,
    top: null,
    nodes: undefined,
    boxes: [],
    elementH: null,
    first: true,
    h: null,
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
        this.element.parentNode.insertBefore(this.fake, this.element)
        this.isTopVisible = false
        this.animateElements()
      } else if (this.scrollY() <= this.top && hasScrollClass) {
        this.element.classList.remove('sticky')
        this.element.parentNode.removeChild(this.fake)
        this.animateElements(false)
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
    },
    initScrollData () {
      this.element = document.querySelector('[data-sticky]')
      this.rect = this.element.getBoundingClientRect()
      this.top = this.rect.top + this.scrollY()
      this.width = this.rect.width
      this.fake = document.createElement('div')
      this.fake.style.width = this.rect.width + 'px'
      this.fake.style.height = this.rect.height + 'px'
      window.addEventListener('scroll', this.onscroll.bind(this))
      window.addEventListener('resize', this.onresize.bind(this))
    },
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
    animateElements (isDown = true) {
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
  },
  mounted () {
    this.initScrollData()
    this.initAnimationScroll()
  }
}
