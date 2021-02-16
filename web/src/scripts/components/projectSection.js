import { component } from 'picoapp'
import { gsap, ScrollTrigger } from 'gsap/all'

export default component((node, ctx) => {
  $('.stickyTitle').hide()
  setTimeout(() => {
    $('.stickyTitle').fadeIn(200)
  }, 1500)
  ctx.on('resize', ({ ww }) => {
    gsap.utils.toArray('.colorStick').forEach((stick) => {
      if (ww > 1025) {
        var sw =
          $(stick)
            .find('.stickyTitle')
            .width() / 2
        $(stick)
          .find('.stickyTitle')
          .css('height', sw)
      } else {
        $(stick)
          .find('.stickyTitle')
          .css('height', 'auto')
      }
    })
  })

  $('.colBlock').removeClass('fadeUp')

  gsap.utils.toArray('.section').forEach((colorSection) => {
    ScrollTrigger.create({
      trigger: colorSection,
      start: 'top bottom',
      onEnter: () => {
        gsap.to('main', {
          backgroundColor: colorSection.dataset.color,
          overwrite: 'auto',
        })
        if ($(colorSection).hasClass('c-oblack')) {
          $('.wordmark').addClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').addClass('menuIconBlack')
        } else {
          $('.wordmark').removeClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
        }
      },
    })
  })

  gsap.utils.toArray('.section').forEach((colorSection) => {
    ScrollTrigger.create({
      trigger: colorSection,
      start: 'bottom =+700',
      onLeaveBack: () => {
        gsap.to('main', {
          backgroundColor: colorSection.dataset.color,
          overwrite: 'auto',
        })
        if ($(colorSection).hasClass('c-oblack')) {
          $('.wordmark').addClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').addClass('menuIconBlack')
        } else {
          $('.wordmark').removeClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
        }
      },
    })
  })

  gsap.utils.toArray('.colophon').forEach((colophon) => {
    ScrollTrigger.create({
      trigger: colophon,
      start: 'bottom top',
      onLeaveBack: () => {
        gsap.to('main', { backgroundColor: '#0f0e0e', overwrite: 'auto' })
        $('.wordmark').removeClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
      },
    })
  })

  gsap.utils.toArray('.project-related').forEach((related) => {
    ScrollTrigger.create({
      trigger: related,
      start: 'top bottom',
      onEnter: () => {
        gsap.to('main', { backgroundColor: '#0f0e0e', overwrite: 'auto' })
        $('.wordmark').removeClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
      },
    })
  })

  document.querySelectorAll('img').forEach((img) => {
    img.onload = () => {
      ScrollTrigger.refresh()
      img.onload = null
    }
  })

  return () => {
    let triggers = ScrollTrigger.getAll()
    triggers.forEach((trigger) => {
      trigger.kill()
    })
  }
})
