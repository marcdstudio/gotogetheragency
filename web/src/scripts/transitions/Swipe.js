import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class Swipe extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0)
    from.remove()
    $('html').removeClass('bg-cream')
    $('body').removeClass('c-oblack')
    gsap.to(to, {
      duration: 0.5,
      autoAlpha: 1,
      onComplete: done,
    })
  }

  out({ from, done }) {
    var pane = $('.apane')
    pane.addClass('paneTrans')
    pane.addClass('paneRight')
    // $('html').removeClass('bg-cream')
    // setTimeout(function() {
    //   pane.addClass('paneLeft')
    // }, 500)
    setTimeout(function() {
      pane.removeClass('paneRight paneTrans')
    }, 500)
    gsap.to(from, {
      duration: 0.5,
      autoAlpha: 1,
      onComplete: done,
    })
  }
}

export default Swipe
