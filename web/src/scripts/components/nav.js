import { component } from 'picoapp'
import { gsap } from 'gsap'

export default component(() => {
  $(document).ready(function() {
    if (document.documentElement.clientWidth > 1025) {
      setTimeout(function() {
        $('header').toggleClass('nav-open')
        $('.menuIcon svg').toggleClass('r225')
        $('.navItem:eq(0)').toggleClass('l:o0 t-x')
        setTimeout(function() {
          $('.navItem:eq(1)').toggleClass('l:o0 t-x')
        }, 50)
        setTimeout(function() {
          $('.navItem:eq(2)').toggleClass('l:o0 t-x')
        }, 100)
        setTimeout(function() {
          $('.navItem:eq(3)').toggleClass('l:o0 t-x')
        }, 200)
        setTimeout(function() {
          $('.navItem').toggleClass('vsn')
        }, 200)
        setTimeout(function() {
          $('nav').removeClass('navFlex')
          $('.dsknav').addClass('max-w100')
        }, 1000)
      }, 1000)
    }
  })

  $('.menuIcon, .navItem').on('click', function() {
    if ($('header').hasClass('nav-open')) {
      setTimeout(function() {
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
    setTimeout(function() {
      $('.navItem:eq(1)').toggleClass('l:o0 t-x')
    }, 50)
    setTimeout(function() {
      $('.navItem:eq(2)').toggleClass('l:o0 t-x')
    }, 100)
    setTimeout(function() {
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

  $('.navItem').on('click', function() {
    $('.navItem').removeClass('active')
    $(this).addClass('active')
  })

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
    $('.navItemBG').attr('style', 'transform: translateY(0);height: 7rem;')
  }

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

  $('.mblIcon, .mblNavItem').on('click', function() {
    if ($('header').hasClass('mblnav-open')) {
      $('header').removeClass('mblnav-open')
      $('.mblIcon').removeClass('clrovr')
      $('.wordmark').removeClass('clrovr')
      navUp()
      setTimeout(function() {
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
})

$('.wordmark').on('click', function() {
  if ($('header').hasClass('mblnav-open')) {
    $('.mblIcon').toggleClass('r225')
    $('.mblNav').toggleClass('t-y')
    $('header').removeClass('mblnav-open')
  }
  if ($('header').hasClass('nav-open')) {
    $('header').toggleClass('nav-open')
    $('.menuIcon svg').toggleClass('r225')
    $('.navItem:eq(0)').toggleClass('l:o0 t-x')
    setTimeout(function() {
      $('.navItem:eq(1)').toggleClass('l:o0 t-x')
    }, 50)
    setTimeout(function() {
      $('.navItem:eq(2)').toggleClass('l:o0 t-x')
    }, 100)
    setTimeout(function() {
      $('.navItem:eq(3)').toggleClass('l:o0 t-x')
      if (!$('.home')[0]) {
        $('.navItemBG').toggleClass('o0')
      }
      $('.mblIcon').removeClass('clrovr menuIconBlack')
      $('.wordmark').removeClass('clrovr wordmarkBlack')
    }, 200)
  }
})
