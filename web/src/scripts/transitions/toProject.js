import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class Swipe extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0)
    gsap.set(to, { autoAlpha: 1 })
    from.remove()
    done()
  }

  out({ done }) {
    setTimeout(() => {
      done()
    }, 1000)
  }
}

export default Swipe
