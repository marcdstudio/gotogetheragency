import { component } from 'picoapp'

export default component((node) => {
  $('.serviceBlock').on('click', function() {
    $(this)
      .find('.serviceBlockText')
      .toggleClass('dropContent')
    $(this)
      .find('.serviceBtn img')
      .toggleClass('r180')
  })
  // $('.youTitle')
  //   .children("div:contains('Y')")
  //   .addClass('youTrans')
  $('.youTitle>div>div>div:first-child').addClass('youTrans')
})
