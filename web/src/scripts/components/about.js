import { component } from 'picoapp'

export default component(() => {
  $('.serviceBlock').on('click', function() {
    $(this)
      .find('.serviceBlockText')
      .toggleClass('dropContent')
    $(this)
      .find('.serviceBtn img')
      .toggleClass('r180')
  })
  $('.youTitle>div>div>div:first-child').addClass('youTrans')
})
