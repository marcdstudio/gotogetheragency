import { component } from 'picoapp'

export default component((node) => {
  $('.articleContent p:last-child').append(
    '<span><img class="ml10 dib" style="width:1.6rem;" src="/assets/icons/endmark.svg"/></span>',
  )
  $('body').addClass('bg-cream')
})
