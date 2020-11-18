import { component } from 'picoapp'
import { gsap } from 'gsap'

export default component(() => {
  $(document).ready(() => {
    if (document.documentElement.clientWidth > 1025) {
      setTimeout(() => {
        $('header').toggleClass('nav-open')
        $('.menuIcon svg').toggleClass('r225')
        $('.navItem:eq(0)').toggleClass('l:o0 t-x')
        setTimeout(() => {
          $('.navItem:eq(1)').toggleClass('l:o0 t-x')
        }, 50)
        setTimeout(() => {
          $('.navItem:eq(2)').toggleClass('l:o0 t-x')
        }, 100)
        setTimeout(() => {
          $('.navItem:eq(3)').toggleClass('l:o0 t-x')
        }, 200)
        setTimeout(() => {
          $('.navItem').toggleClass('vsn')
        }, 200)
        setTimeout(() => {
          $('nav').removeClass('navFlex')
          $('.dsknav').addClass('max-w100')
        }, 1000)
      }, 1000)
    }
  })

  $('.menuIcon, .navItem').on('click', () => {
    if ($('header').hasClass('nav-open')) {
      setTimeout(() => {
        $('.navItem, .navItemBG').addClass('vsn')
        $('.dsknav').addClass('max-w100')
        $('nav').removeClass('navFlex')
      }, 300)
    } else {
      $('.navItem, .navItemBG').removeClass('vsn')
      $('.dsknav').removeClass('max-w100')
      $('nav').addClass('navFlex')
    }
    $('header').toggleClass('nav-open')
    $('.menuIcon svg').toggleClass('r225')
    $('.navItem:eq(0)').toggleClass('l:o0 t-x')
    setTimeout(() => {
      $('.navItem:eq(1)').toggleClass('l:o0 t-x')
    }, 50)
    setTimeout(() => {
      $('.navItem:eq(2)').toggleClass('l:o0 t-x')
    }, 100)
    setTimeout(() => {
      $('.navItem:eq(3)').toggleClass('l:o0 t-x')
      if (!$('.home')[0]) {
        $('.navItemBG').toggleClass('o0')
      }
    }, 200)
    if ($('.contact')[0]) {
      $('.countContainer').fadeToggle(300)
    }
    if ($('.about')[0]) {
      $('.countContainer').fadeToggle(300)
    }
    if ($('.blog, .article')[0]) {
      $('.socialWrap').fadeToggle(300)
    }
    if ($('.work')[0]) {
      $('.pTitleWrap').fadeToggle(300)
    }
    if ($('.project')[0]) {
      $('.stickyTitle').toggleClass('o0')
    }
  })

  function navUp() {
    gsap.fromTo(
      '.mnic',
      {
        opacity: 1,
        y: 0,
      },
      {
        duration: 1,
        opacity: 0,
        y: 10,
        stagger: {
          each: 0.1,
        },
      },
    )
  }
  function navDown() {
    gsap.fromTo(
      '.mnic',
      {
        opacity: 0,
        y: 10,
      },
      {
        duration: 1,
        opacity: 1,
        delay: 0.85,
        y: 0,
        stagger: {
          each: 0.1,
        },
      },
    )
  }

  $('.mblIcon, .mblNavItem').on('click', () => {
    if ($('header').hasClass('mblnav-open')) {
      $('header').removeClass('mblnav-open')
      $('.mblIcon').removeClass('clrovr')
      $('.wordmark').removeClass('clrovr')
      navUp()
      setTimeout(() => {
        $('.mblIcon').toggleClass('r225')
        $('.mblNav').toggleClass('t-y')
      }, 1000)
    } else {
      $('.mblIcon').addClass('clrovr')
      $('.wordmark').addClass('clrovr')
      $('header').addClass('mblnav-open')
      navDown()
      $('.mblIcon').toggleClass('r225')
      $('.mblNav').toggleClass('t-y')
    }
  })

  $('.wordmark').on('click', () => {
    if ($('header').hasClass('mblnav-open')) {
      $('.mblIcon').toggleClass('r225')
      $('.mblNav').toggleClass('t-y')
      $('header').removeClass('mblnav-open')
    }
    if ($('header').hasClass('nav-open')) {
      $('header').toggleClass('nav-open')
      $('.menuIcon svg').toggleClass('r225')
      $('.navItem:eq(0)').toggleClass('l:o0 t-x')
      setTimeout(() => {
        $('.navItem:eq(1)').toggleClass('l:o0 t-x')
      }, 50)
      setTimeout(() => {
        $('.navItem:eq(2)').toggleClass('l:o0 t-x')
      }, 100)
      setTimeout(() => {
        $('.navItem:eq(3)').toggleClass('l:o0 t-x')
        if (!$('.home')[0]) {
          $('.navItemBG').toggleClass('o0')
        }
        $('.mblIcon').removeClass('clrovr menuIconBlack')
        $('.wordmark').removeClass('clrovr wordmarkBlack')
      }, 200)
    }
  })
})
