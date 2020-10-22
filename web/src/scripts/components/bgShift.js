import { component } from 'picoapp'
// import Scrollbar from 'smooth-scrollbar'
import { gsap, ScrollTrigger } from 'gsap/all'
import inview from '@/util/inview'

export default component((node, ctx) => {
  // gsap.registerPlugin(ScrollTrigger)
  var bgColor = $(node).data('color')

  // // if ($(node).hasClass('bgSolid'))

  // //   var bgPaint = $('body').hasClass('paint')

  // if (inview(node, ctx.getState().wh)) return

  // // add(node, 'fadeUp')

  // let off = ctx.on('tick', ({ wh }) => {
  //   if (inview(node, wh)) {
  //     //   off()
  //     if ($(node).hasClass('bgSolid')) {
  //       if (bgColor) {
  //         $('body').css('background-color', bgColor)
  //       }
  //       $('.wordmark').addClass('wordmarkBlack')
  //       $('.menuIcon, .mblIcon').addClass('menuIconBlack')
  //     } else {
  //       $('body').css('background-color', '#0f0e0e')
  //       $('.wordmark').removeClass('wordmarkBlack')
  //       $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
  //     }
  //   } else {
  //     //   if (!$(node).hasClass('bgSolid')) {
  //     //     $('body').css('background-color', '#0f0e0e')
  //     //     $('.wordmark').removeClass('wordmarkBlack')
  //     //     $('.menuIcon').removeClass('menuIconBlack')
  //     //   }
  //   }
  // })

  // gsap.to('body', {
  //   scrollTrigger: {
  //     trigger: '.c-oblack',
  //     start: '20px 80%',
  //     end: '+=300',
  //     markers: true,
  //     toggleActions: 'restart',
  //   },
  //   background: '#fff',
  //   duration: 0.5,
  // })

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
