import { component } from 'picoapp'

export default component(() => {
  $('.articleContent p:last-child').append(
    '<span><img class="ml10 dib" style="width:1.6rem;" src="/assets/icons/endmark.svg"/></span>',
  )
  $('.navItem, .wordHome').attr('data-transition', 'black')
})
