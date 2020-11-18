import Highway from '@dogstudio/highway'
import { gsap, ScrollTrigger, Power4 } from 'gsap/all'

class p2p extends Highway.Transition {
  in({ from, to, done }) {
    gsap.registerPlugin(ScrollTrigger)
    window.scrollTo(0, 0)
    from.remove()
    gsap.to(to, {
      duration: 0.5,
      autoAlpha: 1,
      onComplete: done,
    })
    gsap.set('c-oblack, .colorStick', { clearProps: true })
    ScrollTrigger.getById('.c-oblack').kill()
    ScrollTrigger.getById('.colorStick').kill()
  }

  out({ from, done }) {
    gsap.to(from, {
      duration: 0.5,
      autoAlpha: 0,
      onComplete: done,
    })
  }
}

export default p2p
