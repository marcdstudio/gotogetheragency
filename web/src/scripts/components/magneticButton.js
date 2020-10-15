import { component } from 'picoapp'
// import { gsap } from 'gsap'
import { TweenLite } from 'gsap'

export default component((node) => {
  var $circle = $('.cBtn'),
    $wrapper = $('.scrollContainer')

  function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
      css: {
        left: e.pageX,
        top: e.pageY,
      },
    })
  }

  var flag = false

  $('.workThumb, .homeThumb, .relThumb').mouseover(function() {
    flag = true
    TweenLite.to($circle, 0.4, { scale: 1, autoAlpha: 1 })
    $('.workThumb, .homeThumb, .relThumb').on('mousemove', moveCircle)
  })

  $('.workThumb, .homeThumb, .relThumb').mouseout(function() {
    flag = false
    TweenLite.to($circle, 0.4, { scale: 0.1, autoAlpha: 0 })
  })

  $('.workThumb, .homeThumb, .relThumb').on('mouseover', function() {
    $('.eyeBtn').css('opacity', '1')
    if (
      $(this)
        .find('.pMouse')
        .hasClass('pHidden')
    ) {
      $('.eyeBtn img').attr('src', '/assets/icons/red_mouse_css.svg')
      $('.eyeBtn').addClass('mHidden')
    } else {
      $('.eyeBtn img').attr('src', '/assets/icons/plus_mouse.svg')
      $('.eyeBtn').removeClass('mHidden')
    }
  })

  $('.workThumb, .homeThumb, .relThumb').on('mouseout', function() {
    $('.eyeBtn').css('opacity', '0')
  })

  // $('.workThumb .pLive').on('mouseover', function() {
  //   $('.eyeBtn').removeClass('.mHidden')
  //   $('.eyeBtn img').attr('src', '/assets/icons/red_mouse_css.svg')
  // })

  // $('.workThumb .pHidden').on('mouseover', function() {
  //   $('.eyeBtn').addClass('.mHidden')
  //   $('.eyeBtn img').attr('src', '/assets/icons/plus_mouse.svg')
  // })

  $(document).on('mousemove', function(e) {
    $('.eyeBtn, .cBtn').css({
      left: e.pageX,
      top: e.pageY,
    })
  })

  //===== PROJECT TILE HOVER =====//

  $('.workThumb').mouseover(function() {
    var wt = $(this).attr('data-id')
    $('.pTitle').addClass('o0 title-x')
    setTimeout(function() {
      $('.pTitle h3').html(wt)
    }, 300)
    setTimeout(function() {
      $('.pTitle').removeClass('o0 title-x')
    }, 500)
    // console.log($('.pTitle[data-id=' + wt + ']'))
    // setTimeout(function() {
    //   $('.pTitle[data-id=' + wt + ']').removeClass('o0 title-x')
    // }, 300)
  })
})
