import Highway from '@dogstudio/highway'
import { gsap, Expo } from 'gsap'

class Swipe extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0)
    // var tl = gsap.timeline()
    // tl.to('.apane', {
    //   duration: 1.2,
    //   width: '100%',
    //   left: '0%',
    //   ease: Expo.easeInOut,
    // })
    // tl.set('.apane', { left: '-100%' })

    from.remove()
    gsap.set('html', { backgroundColor: '#0f0e0e' })
    gsap.to(to, { autoAlpha: 1, duration: 0.5, onComplete: done })

    $('body').addClass('c-oblack')
    $('.wordmark').removeClass('wordmarkBlack')
    $('.menuIcon').removeClass('menuIconBlack')
  }

  out({ done }) {
    var tl = gsap.timeline()
    tl.to('.apane', {
      duration: 1.2,
      width: '100%',
      left: '0%',
      ease: Expo.easeInOut,
      onComplete: done,
    })
    tl.set('.apane', { left: '-100%' })
  }
}

export default Swipe
