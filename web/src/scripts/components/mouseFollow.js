import { component } from 'picoapp'
import { TweenLite, gsap, Power4 } from 'gsap'

export default component(() => {
  var $circle = $('.cBtn')

  function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
      css: {
        left: e.pageX + 25,
        top: e.pageY + 25,
      },
    })
  }

  var flag = false

  $('.workThumb-img, .homeThumb, .relThumb').mouseover(function() {
    flag = true
    TweenLite.to($circle, 0.4, { scale: 1, autoAlpha: 1 })
    $('.workThumb-img, .homeThumb, .relThumb').on('mousemove', moveCircle)
  })

  $('.workThumb-img, .homeThumb, .relThumb').mouseout(function() {
    flag = false
    TweenLite.to($circle, 0.4, { scale: 0.1, autoAlpha: 0 })
  })

  $('.workThumb-img, .homeThumb, .relThumb').on('mouseover', function() {
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

  $('.workThumb-img, .homeThumb, .relThumb').on('mouseout', function() {
    $('.eyeBtn').css('opacity', '0')
  })

  $(document).on('mousemove', function(e) {
    $('.eyeBtn, .cBtn').css({
      left: e.pageX + 25,
      top: e.pageY + 25,
    })
  })

  //===== PROJECT TILE HOVER =====//

  if ($('.modules').hasClass('work')) {
    gsap.set('.pTitle', { x: -50, opacity: 0 })
    if ($('header').hasClass('nav-open')) {
      $('.pTitle').hide()
      setTimeout(() => {
        $('.pTitle')
          .css('display', 'flex')
          .hide()
          .fadeIn()
      }, 1500)
    }
    $('.workThumb-img').mouseover(function() {
      let tl = gsap.timeline()
      var prev = $('.title-active')
      var active = $(this)
        .parent()
        .find('.pTitle')
      if (prev.text() != active.text()) {
        active.addClass('title-active')
        prev.removeClass('title-active')

        tl.to(active, {
          x: 0,
          opacity: 1,
          duration: 0.25,
        })
          .to(
            prev,
            {
              x: 50,
              opacity: 0,
              duration: 0.25,
            },
            0,
          )
          .set(prev, { x: -50 })
      }
    })
  }
})
