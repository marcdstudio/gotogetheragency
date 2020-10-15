import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class Swipe extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0)
    // from.remove()
    setTimeout(function() {
      // $('.posterSlot').append($('.wtFull'))
      from.remove()
      // $('.posterPlace').remove()
    }, 150)

    gsap.to(to, {
      duration: 1,
      autoAlpha: 1,
      onComplete: done,
    })
  }

  out({ from, done }) {
    gsap.to(from, {
      duration: 1,
      autoAlpha: 1,
      onComplete: done,
    })
  }
}

export default Swipe
