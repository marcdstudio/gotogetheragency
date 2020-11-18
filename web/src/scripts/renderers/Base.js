import Highway from '@dogstudio/highway'
import { listen } from 'quicklink'
import { on, size, remove } from '@selfaware/martha'
import loadFonts from '@/util/loadFonts'
import { gsap, ScrollTrigger } from 'gsap/all'
import app from '@/app'
import navState from '@/util/navState'

class Base extends Highway.Renderer {
  onFirstLoad() {
    // automatically prefetch URLs for links that are in-viewport during idle time
    listen()

    // broadcast resize event
    on(window, 'resize', this.resize)

    // setup render loop
    gsap.ticker.add(this.tick)

    gsap.registerPlugin(ScrollTrigger)

    gsap.set('[data-router-view]', { autoAlpha: 1 })

    loadFonts([
      {
        family: 'reckless-regular',
        options: {
          weight: 400,
        },
      },
      {
        family: 'reckless-italic',
        options: {
          weight: 400,
        },
      },
      {
        family: 'graphik-medium',
        options: {
          weight: 400,
        },
      },
      {
        family: 'graphik-regular',
        options: {
          weight: 400,
        },
      },
    ]).then(() => {
      this.mount()
      remove(document.body, 'o0')
    })

    navState()

    if (window.location.href.indexOf('blog') > -1) {
      gsap.set('html', { backgroundColor: '#e2dddc' })
      $('body').addClass('c-oblack')
      if (window.location.href != '/blog/') {
        gsap.set('.socialWrap', { opacity: 0 })
        gsap.to('.socialWrap', { opacity: 1, delay: 1.2 })
      }
    } else {
      gsap.set('html', { backgroundColor: '#0f0e0e' })
      $('body').removeClass('c-oblack')
    }

    if (window.location.href.indexOf('contact') > -1) {
      gsap.set('.countContainer', { opacity: 0 })
      gsap.to('.countContainer', { opacity: 1, delay: 1.2 })
    }

    // mount picoapp
    // this.mount()
  }

  onEnter() {
    this.mount()
    if (window.location.href.indexOf('blog') > -1) {
      $('body').addClass('c-oblack')
    } else {
      $('body').removeClass('c-oblack')
    }
    navState()
  }

  onEnterCompleted() {}

  onLeave() {
    this.unmount()
  }

  onLeaveCompleted() {
    if ($('header').hasClass('nav-open')) {
      setTimeout(function() {
        $('.navItem, .navItemBG').addClass('vsn')
        $('.dsknav').addClass('max-w100')
      }, 300)
      $('header').toggleClass('nav-open')
      $('.menuIcon svg').toggleClass('r225')
      $('.navItem:eq(0)').toggleClass('l:o0 t-x')
      setTimeout(function() {
        $('.navItem:eq(1)').toggleClass('l:o0 t-x')
      }, 50)
      setTimeout(function() {
        $('.navItem:eq(2)').toggleClass('l:o0 t-x')
      }, 100)
      setTimeout(function() {
        $('.navItem:eq(3)').toggleClass('l:o0 t-x')
        if (!$('.home')[0]) {
          $('.navItemBG').toggleClass('o0')
        }
      }, 200)
    }
    if (window.location.href.indexOf('blog') > -1) {
      gsap.to('html, body, main', { backgroundColor: '#e2dddc', duration: 0.3 })
    } else {
      gsap.to('html, body, main', { backgroundColor: '#0f0e0e', duration: 0.3 })
    }
  }

  resize = () => {
    app.emit('resize', size())
  }

  tick = () => {
    app.emit('tick')
  }

  mount = () => {
    app.mount()
    this.resize()
  }

  unmount = () => {
    app.unmount()
  }

  setup() {
    this.onFirstLoad()
  }
}

export default Base
