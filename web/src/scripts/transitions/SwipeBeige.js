import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class SwipeBeige extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0)
    from.remove()
    $('html').addClass('bg-cream')
    $('body').addClass('c-oblack')
    gsap.to(to, {
      duration: 0.5,
      autoAlpha: 1,
      onComplete: done,
    })
  }

  out({ from, done }) {
    var pane = $('.apanetan')
    pane.addClass('paneTrans')
    pane.addClass('paneRight')
    // $('html').addClass('bg-cream')
    // $('body').addClass('c-oblack')
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

export default SwipeBeige
