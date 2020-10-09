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
})
