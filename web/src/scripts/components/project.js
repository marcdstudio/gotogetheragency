import { component } from 'picoapp'
import Scrollbar from 'smooth-scrollbar'

export default component((node) => {
  setTimeout(function() {
    const Scroll = Scrollbar.init($('.scrollContainer')[0])
    // Scroll.addListener((s) => {
    //   if ($(window).width() < 1025) {
    //     var currentScrollPos = s.offset.y
    //     if (prevScrollpos < currentScrollPos) {
    //       $('header').addClass('o0')
    //     } else {
    //       $('header').removeClass('o0')
    //     }
    //     prevScrollpos = currentScrollPos
    //   }
    // })
  })

  $('.workThumb').on('click', function() {
    if (
      $(this)
        .find('.pMouse')
        .hasClass('pLive')
    ) {
      $('.workThumb')
        .not(this)
        .css('visibility', 'hidden')
      var curScroll = $('.scrollContainer').scrollTop()
      var curOffset = $(this).offset().top
      if ($(window).width > 1025) {
        var imgOffset = curScroll - curOffset + 40
      } else if ($(window).width > 650) {
        var imgOffset = curScroll - curOffset + 30
      } else {
        var imgOffset = curScroll - curOffset + 20
      }
      // Scroll.destroy()
      $(this).css('transform', 'translateY(' + imgOffset + 'px)')
      $(this).addClass('wtFull')
    }
  })
})
