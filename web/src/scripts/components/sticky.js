import { component } from 'picoapp'
import Scrollbar from 'smooth-scrollbar'
import { gsap, ScrollTrigger } from 'gsap/all'

export default component((node) => {
  // var bgColor = $(node)
  //   .parent('.colorStick')
  //   .attr('data-color')
  // console.log(bgColor)
  gsap.registerPlugin(ScrollTrigger)

  // ScrollTrigger.create({
  //   trigger: '.colorStick',
  //   start: '-=500',
  //   end: 'bottom 50%+=100px',
  //   onToggle: (self) => {
  //     if (self.isActive) {
  //       $('body').css('background-color', bgColor)
  //       $('.wordmark').addClass('wordmarkBlack')
  //       $('.menuIcon, .mblIcon').addClass('menuIconBlack')
  //     } else {
  //       $('body').css('background-color', '#0f0e0e')
  //       $('.wordmark').removeClass('wordmarkBlack')
  //       $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
  //     }
  //   },
  // })

  gsap.utils.toArray('.colorStick').forEach((stick) => {
    var bgColor = $(stick).attr('data-color')
    console.log(bgColor)
    ScrollTrigger.create({
      trigger: stick,
      start: '-=500',
      end: 'bottom 50%+=100px',
      onToggle: (self) => {
        if (self.isActive) {
          $('body').css('background-color', bgColor)
          $('.wordmark').addClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').addClass('menuIconBlack')
        } else {
          $('body').css('background-color', '#0f0e0e')
          $('.wordmark').removeClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
        }
      },
    })
  })

  ScrollTrigger.create({
    trigger: '.c-oblack',
    start: '-=300',
    end: '=+100%',
    onToggle: (self) => {
      if (self.isActive) {
        $('.wordmark').addClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').addClass('menuIconBlack')
      } else {
        $('.wordmark').removeClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
      }
    },
  })

  function stickTag() {
    var scroll = $('.scrollContainer')[0]
    const scrollbar = Scrollbar.init(scroll, {
      syncCallbacks: true,
    })
    if (document.documentElement.clientWidth > 1025) {
      var titleTop = $(node).offset().top
      var titleContainer = $(node)
        .parents('.section')
        .height()
      scrollbar.addListener(({ offset }) => {
        if (
          offset.y > titleTop &&
          offset.y < titleTop + (titleContainer - 600)
        ) {
          $(node).addClass('fix')
          var offTop = offset.y + 300
          $(node).css({
            top: offTop + 'px',
            bottom: 'initial',
            left: '0',
          })
        } else if (offset.y > titleTop + (titleContainer - 600)) {
          $(node).removeClass('fix')
          $(node).css({
            top: 'initial',
            bottom: '30rem',
            left: '0',
          })
        } else {
          $(node).removeClass('fix')
          $(node).css({
            top: '30rem',
            bottom: 'initial',
            left: '0',
          })
        }
        ScrollTrigger.refresh()
      })
    } else {
      scrollbar.addListener(() => {
        ScrollTrigger.refresh()
      })
    }
    scrollbar.addListener((s) => {
      var st = s.offset.y
      var stp = st / 100
      $('.plx').each(function() {
        var pxh = $(this).height()
        var pOff = ($(this).offset().top + pxh) / 100
        $(this).css('transform', 'translate3d(0,-' + pOff + '%,0) scale(1.2)')
      })
      if (st < 100) {
        $('.wordmark').removeClass('wordmarkBlack')
        $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
      }
    })
  }

  // $(document).ready(function() {
  setTimeout(function() {
    stickTag()
    // scrollbar.addListener((s) => {
    //   var st = s.offset.y
    //   var stp = st / 100
    //   $('.plx').each(function() {
    //     var pxh = $(this).height()
    //     var pOff = ($(this).offset().top + pxh) / 50
    //     $(this).css('transform', 'translate3d(0,-' + pOff + '%,0) scale(1.4)')
    //   })
    //   if (st < 100) {
    //     $('.wordmark').removeClass('wordmarkBlack')
    //     $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
    //   }
    // })
  }, 200)
  // })

  // var resizeId
  // $(window).resize(function() {
  //   clearTimeout(resizeId)
  //   resizeId = setTimeout(doneResizing, 500)
  // })

  // function doneResizing() {
  //   stickTag()
  //   console.log('done resizing')
  // }
})
