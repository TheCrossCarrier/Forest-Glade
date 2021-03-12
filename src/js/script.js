'use strict'

window.onload = () => {

  /**
   * HEADER
   */

  /**
   * Navigation Underline
   */

  const
    nav = document.querySelector('.nav'),
    navLinks = document.querySelectorAll('.nav__link'),
    currentLink = document.querySelector('.nav__link_current')

  /* Initial position */
  setCurrent()

  const timeout = 500
  setTimeout(() => nav.style.setProperty('--underline-transition', `${timeout}ms`), timeout)

  let out
  Array.from(navLinks).forEach(link => {
    /* Underline Slide */
    link.onmouseover = function () {
      clearTimeout(out)
      const BCR = this.getBoundingClientRect()
      setUnderline(BCR.width, BCR.left)
    }

    /* Return to initial */
    link.onmouseout = () => {
      out = setTimeout(setCurrent, 500)
    }

    /* Click effect */
    link.onmousedown = function () {
      const width = this.getBoundingClientRect().width + 10
      setUnderline(width)
    }
  })

  function setUnderline(width, left) {
    nav.style.setProperty('--underline-width', width + 'px')
    if (left) nav.style.setProperty('--underline-left',
      left + width / 2 - nav.getBoundingClientRect().left + 'px')
  }

  function setCurrent() {
    const currBCR = currentLink.getBoundingClientRect()
    setUnderline(currBCR.width, currBCR.left)
  }

}