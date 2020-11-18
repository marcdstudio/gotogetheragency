import { component } from 'picoapp'
import { gsap, ScrollTrigger } from 'gsap/all'

export default component(() => {
  gsap.registerPlugin(ScrollTrigger)

  function killTriggers() {
    let triggers = ScrollTrigger.getAll()
    triggers.forEach((trigger) => {
      trigger.kill()
      console.log('killed')
    })
  }

  function projectSections() {
    gsap.utils.toArray('.colorStick').forEach((stick) => {
      gsap.set(stick, { clearProps: true })
      var bgColor = $(stick).attr('data-color')
      const swh = () => {
        if (document.documentElement.clientWidth > 1025) {
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
      }
      swh()
      $(window).resize(function() {
        swh()
      })
      ScrollTrigger.create({
        trigger: stick,
        start: '-=500',
        end: 'bottom 50%+=100px',
        onToggle: (self) => {
          if (self.isActive) {
            $('main, body').css('background-color', bgColor)
            $('.wordmark').addClass('wordmarkBlack')
            $('.menuIcon, .mblIcon').addClass('menuIconBlack')
          } else {
            $('main, body').css('background-color', '#0f0e0e')
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
  }

  const setProject = () => {
    const newSections = killTriggers().then(projectSections())
    console.log('set project')
  }

  setProject()
})
