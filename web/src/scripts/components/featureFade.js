import { component } from 'picoapp'

export default component((node, ctx) => {
  if ($('.home')[0]) {
    console.log()
    setTimeout(function() {
      $('.fade:first-of-type').removeClass('fadeUp')
    }, 300)
  }
})
