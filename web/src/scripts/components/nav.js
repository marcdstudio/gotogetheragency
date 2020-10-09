import { component } from 'picoapp'

export default component((node) => {
  $(document).ready(function() {
    if ($(window).width() > 1025) {
      setTimeout(function() {
        $('.dsknav').addClass('max-w100')
        $('header').toggleClass('nav-open')
        $('.menuIcon img').toggleClass('r-90')
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
        if ($('.contact')[0]) {
          $('.countContainer').fadeToggle(300)
        }
        if ($('.blog, .article')[0]) {
          $('.socialWrap').fadeToggle(300)
        }
        if ($('.home')[0]) {
          $('.navItem').removeClass('c-oblack')
        }
        if ($('.work')[0]) {
          $('.pTitleWrap').fadeToggle(300)
        }
      }, 1000)
    }
  })

  $('.menuIcon').on('mouseenter', function() {
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
    $('.menuIcon img').toggleClass('r-90')
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
  })

  $('header').on('mouseleave', function() {
    if ($('header').hasClass('nav-open')) {
      $('.dsknav').addClass('max-w100')
      $('header').toggleClass('nav-open')
      $('.menuIcon img').toggleClass('r-90')
      $('.navItem:eq(0)').toggleClass('l:o0 t-x')
      $('.navItemBG').toggleClass('o0')
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
        $('.navItem, .navItemBG').toggleClass('vsn')
      }, 200)
      if ($('.contact')[0]) {
        $('.countContainer').fadeToggle(300)
      }
      if ($('.blog, .article')[0]) {
        $('.socialWrap').fadeToggle(300)
      }
      if ($('.home')[0]) {
        $('.navItem').removeClass('c-oblack')
      }
      if ($('.work')[0]) {
        $('.pTitleWrap').fadeToggle(300)
      }
    }
  })

  $('.navItem').hover(function() {
    if ($('.navItemBG').hasClass('o0')) {
      $('.navItemBG').toggleClass('o0')
    }
  })

  $('.navItem')
    .eq(0)
    .on('mouseenter', function() {
      $($('.navItem')).removeClass('c-oblack')
      $($(this)).addClass('c-oblack')
      $('.navItemBG').attr('style', 'transform: translateY(0);height: 7rem;')
    })
  $('.navItem')
    .eq(1)
    .on('mouseenter', function() {
      $($('.navItem')).removeClass('c-oblack')
      $($(this)).addClass('c-oblack')
      $('.navItemBG').attr(
        'style',
        'transform: translateY(-8.75rem);height: 10rem;',
      )
    })
  $('.navItem')
    .eq(2)
    .on('mouseenter', function() {
      $($('.navItem')).removeClass('c-oblack')
      $($(this)).addClass('c-oblack')
      $('.navItemBG').attr(
        'style',
        'transform: translateY(-20.75rem);height: 7.75rem;',
      )
    })
  $('.navItem')
    .eq(3)
    .on('mouseenter', function() {
      $($('.navItem')).removeClass('c-oblack')
      $($(this)).addClass('c-oblack')
      $('.navItemBG').attr(
        'style',
        'transform: translateY(-30.5rem);height: 7.5rem;',
      )
    })

  if (window.location.href.indexOf('blog') > -1) {
    $('.navItem')
      .eq(0)
      .addClass('c-oblack')
    $('.navItemBG').attr('style', 'transform: translateY(0);height: 7rem;')
  } else if (window.location.href.indexOf('contact') > -1) {
    $('.navItem')
      .eq(1)
      .addClass('c-oblack')
    $('.navItemBG').attr(
      'style',
      'transform: translateY(-8.75rem);height: 10rem;',
    )
  } else if (window.location.href.indexOf('about') > -1) {
    $('.navItem')
      .eq(2)
      .addClass('c-oblack')
    $('.navItemBG').attr(
      'style',
      'transform: translateY(-20.75rem);height: 7.75rem;',
    )
  } else if (window.location.href.indexOf('work') > -1) {
    $('.navItem')
      .eq(3)
      .addClass('c-oblack')
    $('.navItemBG').attr(
      'style',
      'transform: translateY(-30.5rem);height: 7.5rem;',
    )
  } else {
    $('.navItemBG').attr('style', 'transform: translateY(0);height: 7rem;')
  }

  $('.mblIcon, .mblNavItem').on('click', function() {
    if ($('header').hasClass('mblnav-open')) {
      $('header').removeClass('mblnav-open')
    } else {
      $('header').addClass('mblnav-open')
    }
    $('.mblIcon').toggleClass('r180')
    $('.mblNav').toggleClass('t-y')
  })
})

$('.wordmark').on('click', function() {
  if ($('header').hasClass('mblnav-open')) {
    $('.mblIcon').toggleClass('r180')
    $('.mblNav').toggleClass('t-y')
    $('header').removeClass('mblnav-open')
  }
})
