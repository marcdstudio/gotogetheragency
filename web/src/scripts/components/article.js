import { component } from 'picoapp'

export default component(() => {
  $('.articleContent p:last-child').append(
    '<span><img class="ml10 dib" style="width:1.6rem;" src="/assets/icons/endmark.svg"/></span>',
  )

  $(document).scroll(function() {
    var st = $(document).scrollTop()
    var stp = st / 10
    $('.plx').css('transform', 'translateY(-' + stp + 'px) scale(1.2)')
  })
})
