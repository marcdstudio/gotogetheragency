import { component } from 'picoapp'
import Scrollbar from 'smooth-scrollbar'

export default component((node, ctx) => {
  $(document).ready(function() {
    setTimeout(function() {
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
        })
      }
      scrollbar.addListener((s) => {
        var st = s.offset.y
        var stp = st / 100
        $('.plx').each(function() {
          var pxh = $(this).height()
          var pOff = ($(this).offset().top + pxh) / 50
          $(this).css('transform', 'translate3d(0,-' + pOff + '%,0) scale(1.4)')
        })
        if (st < 100) {
          $('.wordmark').removeClass('wordmarkBlack')
          $('.menuIcon, .mblIcon').removeClass('menuIconBlack')
        }
      })
    }, 200)
  })
})
