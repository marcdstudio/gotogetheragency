import Highway from '@dogstudio/highway'
import { gsap, Expo } from 'gsap'

class SwipeBeige extends Highway.Transition {
  in({ from, to, done }) {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(0)
      .addClass('active')

    var tl = gsap.timeline()
    tl.to('.apanetan', {
      duration: 1.2,
      width: '100%',
      left: '0%',
      ease: Expo.easeInOut,
    })
    tl.set('.apanetan', { left: '-100%' })

    setTimeout(() => {
      from.remove()
      window.scrollTo(0, 0)
      gsap.set('html', { backgroundColor: '#e2dddc' })
    }, 1000)

    setTimeout(() => {
      from.remove()
      gsap.to(to, { autoAlpha: 1, duration: 0.5, onComplete: done })
    }, 1300)

    $('body').addClass('c-oblack')
    $('.wordmark').removeClass('wordmarkBlack')
    $('.menuIcon').removeClass('menuIconBlack')
  }

  out({ done }) {
    done()
  }
}

export default SwipeBeige
