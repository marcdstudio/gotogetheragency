import { component } from 'picoapp'
// import Scrollbar from 'smooth-scrollbar'
import inview from '@/util/inview'

export default component((node, ctx) => {
  var bgColor = $(node).data('color')

  // if ($(node).hasClass('bgSolid'))

  //   var bgPaint = $('body').hasClass('paint')

  if (inview(node, ctx.getState().wh)) return

  // add(node, 'fadeUp')

  let off = ctx.on('tick', ({ wh }) => {
    if (inview(node, wh)) {
      //   off()
      if ($(node).hasClass('bgSolid')) {
        if (bgColor) {
          $('body').css('background-color', bgColor)
        }
        $('.wordmark').addClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').addClass('menuIconBlack')
      } else {
        $('body').css('background-color', '#0f0e0e')
        $('.wordmark').removeClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
      }
    } else {
      //   if (!$(node).hasClass('bgSolid')) {
      //     $('body').css('background-color', '#0f0e0e')
      //     $('.wordmark').removeClass('wordmarkBlack')
      //     $('.menuIcon').removeClass('menuIconBlack')
      //   }
    }
  })

  // if (
  //   bgColor &&
  //   offset.y > titleTop &&
  //   offset.y < titleTop + titleContainer
  // ) {
  //   $('body').css('background-color', bgColor)
  //   $('.wordmark').addClass('wordmarkBlack')
  //   $('.menuIcon').addClass('menuIconBlack')
  //   $('.body').addClass('paint')
  // } else {
  //   $('body').css('background-color', '#0f0e0e')
  //   $('.wordmark').removeClass('wordmarkBlack')
  //   $('.menuIcon').removeClass('menuIconBlack')
  // }
})
