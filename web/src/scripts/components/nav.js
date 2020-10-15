import { component } from 'picoapp'
import { gsap, TimelineLite } from 'gsap'
// import { SplitText } from '@/util/SplitText'

export default component((node) => {
  // var tlNav1 = new TimelineLite(),
  //   splitTitle = new SplitText('.formLabel', { type: 'words' })

  // var words = splitTitle.words

  // tlTitle.staggerFrom(words, 0.5, { opacity: 0, y: 15 }, 0.05)

  // tlTitle.restart()

  // gsap.from('.mblNavItem', { opacity: 0, y: 10 })

  $(document).ready(function() {
    if (document.documentElement.clientWidth > 1025) {
      setTimeout(function() {
        $('.dsknav').addClass('max-w100')
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
        // if ($('.contact')[0]) {
        //   $('.countContainer').fadeToggle(300)
        // }
        // if ($('.blog, .article')[0]) {
        //   $('.socialWrap').fadeToggle(300)
        // }
        // if ($('.home')[0]) {
        //   $('.navItem').removeClass('c-oblack')
        // }
        // if ($('.work')[0]) {
        //   $('.pTitleWrap').fadeToggle(300)
        // }
      }, 1000)
    }
  })

  $('.menuIcon, .navItem').on('click', function() {
    if ($('header').hasClass('nav-open')) {
      setTimeout(function() {
        $('.navItem, .navItemBG').addClass('vsn')
        $('.dsknav').addClass('max-w100')
      }, 300)
    } else {
      $('.navItem, .navItemBG').removeClass('vsn')
      $('.dsknav').removeClass('max-w100')
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

  // $('header').on('mouseleave', function() {
  //   if ($('header').hasClass('nav-open')) {
  //     $('.dsknav').addClass('max-w100')
  //     $('header').toggleClass('nav-open')
  //     $('.menuIcon img').toggleClass('r-90')
  //     $('.navItem:eq(0)').toggleClass('l:o0 t-x')
  //     $('.navItemBG').toggleClass('o0')
  //     setTimeout(function() {
  //       $('.navItem:eq(1)').toggleClass('l:o0 t-x')
  //     }, 50)
  //     setTimeout(function() {
  //       $('.navItem:eq(2)').toggleClass('l:o0 t-x')
  //     }, 100)
  //     setTimeout(function() {
  //       $('.navItem:eq(3)').toggleClass('l:o0 t-x')
  //     }, 200)
  //     setTimeout(function() {
  //       $('.navItem, .navItemBG').toggleClass('vsn')
  //     }, 200)
  //     if ($('.contact')[0]) {
  //       $('.countContainer').fadeToggle(300)
  //     }
  //     if ($('.blog, .article')[0]) {
  //       $('.socialWrap').fadeToggle(300)
  //     }
  //     if ($('.home')[0]) {
  //       $('.navItem').removeClass('c-oblack')
  //     }
  //     if ($('.work')[0]) {
  //       $('.pTitleWrap').fadeToggle(300)
  //     }
  //   }
  // })

  // $('.navItem').hover(function() {
  //   if ($('.navItemBG').hasClass('o0')) {
  //     $('.navItemBG').toggleClass('o0')
  //   }
  // })

  // $('.navItem')
  //   .eq(0)
  //   .on('mouseenter', function() {
  //     $($('.navItem')).removeClass('c-oblack')
  //     $($(this)).addClass('c-oblack')
  //     $('.navItemBG').attr('style', 'transform: translateY(0);height: 7rem;')
  //   })
  // $('.navItem')
  //   .eq(1)
  //   .on('mouseenter', function() {
  //     $($('.navItem')).removeClass('c-oblack')
  //     $($(this)).addClass('c-oblack')
  //     $('.navItemBG').attr(
  //       'style',
  //       'transform: translateY(-8.75rem);height: 10rem;',
  //     )
  //   })
  // $('.navItem')
  //   .eq(2)
  //   .on('mouseenter', function() {
  //     $($('.navItem')).removeClass('c-oblack')
  //     $($(this)).addClass('c-oblack')
  //     $('.navItemBG').attr(
  //       'style',
  //       'transform: translateY(-20.75rem);height: 7.75rem;',
  //     )
  //   })
  // $('.navItem')
  //   .eq(3)
  //   .on('mouseenter', function() {
  //     $($('.navItem')).removeClass('c-oblack')
  //     $($(this)).addClass('c-oblack')
  //     $('.navItemBG').attr(
  //       'style',
  //       'transform: translateY(-30.5rem);height: 7.5rem;',
  //     )
  //   })

  $('.navItem').on('click', function() {
    $('.navItem').removeClass('active')
    $(this).addClass('active')
  })

  if (window.location.href.indexOf('blog') > -1) {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(0)
      .addClass('active')
    // $('.navItemBG').attr('style', 'transform: translateY(0);height: 7rem;')
  } else if (window.location.href.indexOf('contact') > -1) {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(1)
      .addClass('active')
    // $('.navItemBG').attr(
    //   'style',
    //   'transform: translateY(-8.75rem);height: 10rem;',
    // )
  } else if (window.location.href.indexOf('about') > -1) {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(2)
      .addClass('active')
    // $('.navItemBG').attr(
    //   'style',
    //   'transform: translateY(-20.75rem);height: 7.75rem;',
    // )
  } else if (window.location.href.indexOf('work') > -1) {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(3)
      .addClass('active')
    // $('.navItemBG').attr(
    //   'style',
    //   'transform: translateY(-30.5rem);height: 7.5rem;',
    // )
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
    // if ($('.mblIcon').hasClass('menuIconBlack')) {
    //   $('.mblIcon path, .wordmark path').addClass('clrovr')
    // }
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
