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
  $($wrapper).mouseover(function() {
    flag = true
    TweenLite.to($circle, 0.4, { scale: 1, autoAlpha: 1 })
    $($wrapper).on('mousemove', moveCircle)
  })
  $($wrapper).mouseout(function() {
    flag = false
    TweenLite.to($circle, 0.4, { scale: 0.1, autoAlpha: 0 })
  })

  $('.scrollContainer').on('mouseenter', function() {
    $('.eyeBtn').css('opacity', '1')
  })

  $('.scrollContainer').on('mouseleave', function() {
    $('.eyeBtn').css('opacity', '0')
  })

  $(document).on('mousemove', function(e) {
    $('.eyeBtn, .cBtn').css({
      left: e.pageX,
      top: e.pageY,
    })
  })

  //===== PROJECT TILE HOVER =====//

  $('.workThumb').hover(function() {
    var wt = $(this).attr('data-id')
    $('.pTitle').addClass('o0')
    console.log($('.pTitle[data-id=' + wt + ']'))
    $('.pTitle[data-id=' + wt + ']').removeClass('o0')
  })
})
