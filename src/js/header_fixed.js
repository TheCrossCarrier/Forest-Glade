'use strict'

const header = document.querySelector('.header')

window.onscroll = () => {
  if (window.pageYOffset >= 24) {
    header.classList.remove('header_main-page')
  } else {
    header.classList.add('header_main-page')
  }
}