import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class SwipeBeige extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0)
    from.remove()
    $('html, body').addClass('bg-cream')
    $('body').addClass('c-oblack')
    $('.wordmark').removeClass('wordmarkBlack')
    $('.menuIcon').removeClass('menuIconBlack')
    gsap.to(to, {
      duration: 1.2,
      autoAlpha: 1,
      onComplete: done,
    })
  }

  out({ from, done }) {
    if (window.location.href.indexOf('blog') > -1) {
      $('.navItem').removeClass('active')
      $('.navItem')
        .eq(0)
        .addClass('active')
    } else if (window.location.href.indexOf('contact') > -1) {
      $('.navItem').removeClass('active')
      $('.navItem')
        .eq(1)
        .addClass('active')
    } else if (window.location.href.indexOf('about') > -1) {
      $('.navItem').removeClass('active')
      $('.navItem')
        .eq(2)
        .addClass('active')
    } else if (window.location.href.indexOf('work') > -1) {
      $('.navItem').removeClass('active')
      $('.navItem')
        .eq(3)
        .addClass('active')
    } else {
      $('.navItem').removeClass('active')
    }

    var tl = gsap.timeline()
    tl.to('.apanetan', {
      duration: 1.2,
      width: '100%',
      left: '0%',
      ease: 'Expo.easeInOut',
    })
    // tl.to('.apanetan', {
    //   duration: 1.2,
    //   width: '100%',
    //   left: '100%',
    //   ease: 'Expo.easeInOut',
    //   // delay: 0.3,
    // })
    tl.set('.apanetan', { left: '-100%' })

    gsap.to(from, {
      duration: 1.2,
      autoAlpha: 1,
      onComplete: done,
    })
  }
}

export default SwipeBeige
