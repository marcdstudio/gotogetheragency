import Highway from '@dogstudio/highway'

// renderers
import Base from '@/renderers/Base'

// transitions
import Fade from '@/transitions/Fade'
import Swipe from '@/transitions/Swipe'
import SwipeBeige from '@/transitions/SwipeBeige'

const H = new Highway.Core({
  renderers: {
    default: Base,
  },
  transitions: {
    default: Swipe,
    contextual: {
      blog: SwipeBeige,
    },
  },
})

if (window.location.href.indexOf('blog') > -1) {
  $('html').addClass('bg-cream')
  $('body').addClass('c-oblack')
} else {
  $('html').removeClass('bg-cream')
  $('body').removeClass('c-oblack')
}
