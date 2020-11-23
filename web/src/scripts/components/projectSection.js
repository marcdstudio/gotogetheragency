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

  document.querySelectorAll('img').forEach((img) => {
    img.onload = () => {
      ScrollTrigger.refresh()
      img.onload = null
    }
  })

  gsap.utils.toArray('.colorStick').forEach((stick) => {
    var bgColor = $(stick).attr('data-color')
    ScrollTrigger.create({
      trigger: stick,
      start: '-=500',
      end: 'bottom 50%+=100px',
      onToggle: (self) => {
        if (self.isActive) {
          $('main').css('background-color', bgColor)
          $('.wordmark').addClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').addClass('menuIconBlack')
        } else {
          $('main').css('background-color', '#0f0e0e')
          $('.wordmark').removeClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
        }
      },
    })
  })

  ScrollTrigger.create({
    trigger: '.c-oblack',
    start: '-=300',
    end: '=+100%',
    onToggle: (self) => {
      if (self.isActive) {
        $('.wordmark').addClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').addClass('menuIconBlack')
      } else {
        $('.wordmark').removeClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
      }
    },
  })

  return () => {
    let triggers = ScrollTrigger.getAll()
    triggers.forEach((trigger) => {
      trigger.kill()
    })
  }
})
