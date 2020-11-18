import { component } from 'picoapp'

export default component(() => {
  $(document).on('scroll', () => {
    var st = $(document).scrollTop()
    var stp = st / 2
    $('.marquee div').css('transform', 'translateX(-' + stp + 'px)')
  })
})
