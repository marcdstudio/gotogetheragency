import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0)
    from.remove()
    gsap.to(to, {
      duration: 0.5,
      autoAlpha: 1,
      onComplete: done,
    })
    if (window.location.href.indexOf('blog') > -1) {
      gsap.to('html', { backgroundColor: '#e2dddc', duration: 0.5 })
      $('body').addClass('c-oblack')
    } else {
      gsap.to('html', { backgroundColor: '#0f0e0e', duration: 0.5 })
      $('body').removeClass('c-oblack')
    }
  }

  out({ from, done }) {
    gsap.to(from, {
      duration: 0.5,
      autoAlpha: 0,
      onComplete: done,
    })
  }
}

export default Fade
