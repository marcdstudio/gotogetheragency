import { component } from 'picoapp'
import { gsap, ScrollTrigger, Power2, Expo } from 'gsap/all'

export default component(() => {
  setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.usBody, .toBody, .splitu, .toBlock', { opacity: 0 })

    const tlyIn = () => {
      let tl = gsap.timeline()

      tl.fromTo(
        '.splity',
        { y: 30, opacity: 0 },
        {
          duration: 0.35,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: Power2.easeOut,
        },
      ).to('.youBody', { opacity: 1, duration: 0.5 }, 0.2)
    }

    const tlyOut = () => {
      let tl = gsap.timeline()

      tl.to('.youBody', { opacity: 0, duration: 0.5 }).fromTo(
        '.splity',
        { y: 0, opacity: 1 },
        {
          duration: 0.35,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: Power2.easeOut,
        },
        0.2,
      )
    }

    const tluIn = () => {
      gsap.fromTo(
        '.splitu',
        { y: 30, opacity: 0 },
        {
          duration: 0.35,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: Power2.easeOut,
        },
      )
      gsap.to('.usBody', { opacity: 1, duration: 0.5 }, 0.2)
    }

    const tluOut = () => {
      gsap.to('.usBody', { opacity: 0, duration: 0.5 })
      gsap.fromTo(
        '.splitu',
        { y: 0, opacity: 1 },
        {
          duration: 0.35,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: Power2.easeOut,
        },
        0.2,
      )
    }

    const tltIn = () => {
      var tl = gsap.timeline()

      tl.fromTo(
        '.toBlock',
        { scale: 0.95, opacity: 0 },
        {
          duration: 0.35,
          scale: 1,
          opacity: 1,
          ease: Expo.easeInOut,
        },
        0,
      ).fromTo(
        '.aboutBlock',
        { y: 50, opacity: 0 },
        {
          duration: 0.35,
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
        },
      )
    }

    const tltOut = () => {
      var tl = gsap.timeline()

      tl.fromTo(
        '.toBlock',
        { scale: 1, opacity: 1 },
        {
          duration: 0.35,
          scale: 0.95,
          opacity: 0,
          ease: Expo.easeInOut,
        },
        0,
      ).fromTo(
        '.aboutBlock',
        { y: 0, opacity: 1 },
        {
          duration: 0.35,
          y: 50,
          opacity: 0,
          ease: Expo.easeOut,
        },
        0,
      )
    }

    ScrollTrigger.create({
      trigger: '.youBlock',
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive && !$('.youBlock').hasClass('active')) {
          $('.youBlock').addClass('active')
          tlyIn()
        } else if (!self.isActive && $('.youBlock').hasClass('active')) {
          $('.youBlock').removeClass('active')
          tlyOut()
        }
      },
    })

    ScrollTrigger.create({
      trigger: '.usBlock',
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive && !$('.usBlock').hasClass('active')) {
          $('.usBlock').addClass('active')
          tluIn()
        } else if (!self.isActive && $('.usBlock').hasClass('active')) {
          $('.usBlock').removeClass('active')
          tluOut()
        }
      },
    })

    ScrollTrigger.create({
      trigger: '.mainBlock',
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive && !$('.toBlock').hasClass('active')) {
          $('.toBlock').addClass('active')
          tltIn()
        } else if (!self.isActive && $('.toBlock').hasClass('active')) {
          $('.toBlock').removeClass('active')
          tltOut()
        }
      },
    })
  }, 250)

  $('.serviceBlock').on('click', function() {
    $(this)
      .find('.serviceBlockText')
      .toggleClass('dropContent')
    $(this)
      .find('.serviceBtn img')
      .toggleClass('r180')
  })

  $('.youTitle>div>div>div:first-child').addClass('youTrans')
})
