// eslint-disable-next-line no-unused-vars
class Carousel {
  /**
   * @callback moveCallback
   * @param {number} index
   */

  /**
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {number} [options.slidesToScroll = 1]
   * @param {number} [options.slidesVisible = 1]
   * @param {boolean} [options.loop = false]
   */
  constructor (element, options = {}) {
    this.element = element
    this.parent = element.parentElement
    this.options = Object.assign({}, {
      slidesToScroll: 1,
      slidesVisible: 1,
      loop: false
    }, options)
    const children = [].slice.call(element.children)
    this.currentItem = 0
    this.moveCallbacks = []
    this.itemWidth = 0

    // Modification du DOm
    this.arrowContent = this.createDivWithClass('arrow__Content')
    this.carouselContent = this.createDivWithClass('carousel-content')
    this.root = this.createDivWithClass('carousel')
    this.container = this.createDivWithClass('carousel__container')
    this.root.appendChild(this.container)
    this.carouselContent.appendChild(this.root)
    this.arrowContent.appendChild(this.carouselContent)
    this.element.appendChild(this.arrowContent)
    this.items = children.map((slide) => {
      const item = this.createDivWithClass('carousel__item')
      item.appendChild(slide)
      this.container.appendChild(item)
      return item
    })
    this.itemWidth = this.items[0].offsetWidth
    this.root.style.width = this.itemWidth * children.length + 'px'
    this.carouselContent.style.overflow = 'hidden'
    this.createNavigation()
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize.bind(this))
    // eslint-disable-next-line standard/no-callback-literal
    this.moveCallbacks.forEach(cb => cb(0))
    this.element.style.visibility = 'visible'
  }

  /**
   * Redimensionne la page
   */
  resize () {
    this.carouselContent.style.width = this.visibleWidth
    this.arrowContent.style.width = this.visibleWidth
    this.parent.style.margin = 'auto'
    this.arrowContent.style.margin = 'auto'
  }

  /**
   * Retourne la taille en pixel du nombre d'élément visible
   * @return {string}
   */
  get visibleWidth () {
    return this.options.slidesVisible * this.itemWidth + 'px'
  }

  /**
   * Permet d'augmenter ou de diminuer le nombre de slide visible et scrolable dinamiquement
   */
  onWindowResize () {
    let slidesVisible
    let slidesToScroll
    this.gotoItem(0)
    if (parseInt(this.parent.offsetWidth / this.itemWidth + '') > this.items.length) {
      slidesVisible = this.items.length
    } else {
      slidesVisible = parseInt(this.parent.offsetWidth / this.itemWidth + '')
    }
    if (slidesVisible !== 0) {
      this.options.slidesVisible = slidesVisible
      slidesToScroll = parseInt(slidesVisible / 2 + '')
      if (slidesVisible !== 1) {
        slidesToScroll = parseInt(slidesVisible / 2 + '')
      } else {
        slidesToScroll = 1
      }
      this.options.slidesToScroll = slidesToScroll
      this.resize()
    } else {
      this.options.slidesToScroll = 1
    }
    this.moveCallbacks.forEach(cb => cb(this.currentItem))
  }

  /**
   * @param {string} className
   * @return {HTMLDivElement}
   */
  createDivWithClass (className) {
    const div = document.createElement('div')
    div.setAttribute('class', className)
    return div
  }

  createNavigation () {
    const nextButton = this.createDivWithClass('carousel__next')
    const prevButton = this.createDivWithClass('carousel__prev')
    this.arrowContent.style.position = 'relative'
    this.arrowContent.appendChild(nextButton)
    this.arrowContent.appendChild(prevButton)

    nextButton.addEventListener('click', this.next.bind(this))
    prevButton.addEventListener('click', this.prev.bind(this))

    this.onMove((index) => {
      if (index === 0) {
        prevButton.classList.add('carousel__prev--hidden')
      } else {
        prevButton.classList.remove('carousel__prev--hidden')
      }
      if (this.items.length - index < this.options.slidesVisible || this.options.slidesVisible === this.items.length) {
        nextButton.classList.add('carousel__next--hidden')
      } else {
        nextButton.classList.remove('carousel__next--hidden')
      }
    })
  }

  next () {
    this.gotoItem(this.currentItem + this.options.slidesToScroll)
  }

  prev () {
    this.gotoItem(this.currentItem - this.options.slidesToScroll)
  }

  /**
   * Déplace le caroussel vers l'élement ciblé
   * @param {number} index
   */
  gotoItem (index) {
    this.moveCallbacks.forEach(cb => cb(index))
    if (index < 0 || this.options.slidesVisible === this.items.length) {
      if (this.options.loop) {
        index = this.items.length - this.options.slidesVisible
      } else {
        return
      }
    } else if (index >= this.items.length || this.options.slidesVisible === this.items.length) {
      if (this.options.loop) {
        index = 0
      } else {
        return
      }
    }
    const translateX = '-' + (index * this.itemWidth) + 'px'
    this.root.style.transform = 'translate3d(' + translateX + ', 0, 0)'
    this.currentItem = index
  }

  /**
   *
   * @param {moveCallback} cb
   */
  onMove (cb) {
    this.moveCallbacks.push(cb)
  }
}

export default Carousel
