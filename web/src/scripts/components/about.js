import { component } from 'picoapp'
import { gsap, ScrollTrigger, Power2, Expo } from 'gsap/all'

export default component(() => {
  setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.usBlock, .toBlock', { opacity: 0 })

    const tlyIn = () => {
      let tl = gsap.timeline()

      tl.to('.youBlock', { opacity: 1 }).fromTo(
        '.splity',
        { y: 30, opacity: 0 },
        {
          duration: 0.35,
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: Power2.easeOut,
        },
        0,
      )
    }

    const tlyOut = () => {
      let tl = gsap.timeline()

      tl.to('.youBlock', { opacity: 0 }).fromTo(
        '.splity',
        { y: 0, opacity: 1 },
        {
          duration: 0.35,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: Power2.easeOut,
        },
        0,
      )
    }

    const tluIn = () => {
      let tl = gsap.timeline()

      tl.to('.usBlock', { opacity: 1 }).fromTo(
        '.splitu',
        { y: 30, opacity: 0 },
        {
          duration: 0.35,
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: Power2.easeOut,
        },
        0,
      )
    }

    const tluOut = () => {
      let tl = gsap.timeline()

      tl.to('.usBlock', { opacity: 0 }).fromTo(
        '.splitu',
        { y: 0, opacity: 1 },
        {
          duration: 0.35,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: Power2.easeOut,
        },
        0,
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

    // const tliIn = () => {
    //   var tl = gsap.timeline()

    //   tl.fromTo(
    //     '.aboutBlock',
    //     { y: 50, opacity: 0 },
    //     {
    //       duration: 0.35,
    //       y: 0,
    //       opacity: 1,
    //       ease: Expo.easeOut,
    //     },
    //     0,
    //   )
    // }

    // const tliOut = () => {
    //   var tl = gsap.timeline()

    //   tl.fromTo(
    //     '.aboutBlock',
    //     { y: 0, opacity: 1 },
    //     {
    //       duration: 0.35,
    //       y: 50,
    //       opacity: 0,
    //       ease: Expo.easeOut,
    //     },
    //     0,
    //   )
    // }

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
