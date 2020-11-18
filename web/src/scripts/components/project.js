import { component } from 'picoapp'

export default component(() => {
  $('.workThumb').on('click', function() {
    if (
      $(this)
        .find('.pMouse')
        .hasClass('pLive') &&
      document.documentElement.clientWidth > 1025
    ) {
      $('.workThumb')
        .not(this)
        .css('visibility', 'hidden')
      var curScroll = $(document).scrollTop()
      var curOffset = $(this).offset().top
      var imgOffset = curScroll - curOffset + 40

      $(this).css('transform', 'translateY(' + imgOffset + 'px)')
      $(this).addClass('wtFull')
    } else if (
      $(this)
        .find('.pMouse')
        .hasClass('pLive') &&
      document.documentElement.clientWidth > 650
    ) {
      $('.workThumb')
        .not(this)
        .css('visibility', 'hidden')
      var curScroll = $(document).scrollTop()
      var curOffset = $(this).offset().top
      var imgOffset = curScroll - curOffset + 30

      $(this).css('transform', 'translateY(' + imgOffset + 'px)')
      $(this).addClass('wtFull')
    } else if (
      $(this)
        .find('.pMouse')
        .hasClass('pLive') &&
      document.documentElement.clientWidth < 650
    ) {
      $('.workThumb')
        .not(this)
        .css('visibility', 'hidden')
      var curScroll = $(document).scrollTop()
      var curOffset = $(this).offset().top
      var imgOffset = curScroll - curOffset + 20

      $(this).css('transform', 'translateY(' + imgOffset + 'px)')
      $(this).addClass('wtFull')
    }
  })
})
