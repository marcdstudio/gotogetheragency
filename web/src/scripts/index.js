import Highway from '@dogstudio/highway'

// renderers
import Base from '@/renderers/Base'

// transitions
import Swipe from '@/transitions/Swipe'
import SwipeBeige from '@/transitions/SwipeBeige'
import toProject from '@/transitions/toProject'

import GAnalytics from 'ganalytics'

window.ga = new GAnalytics('UA-180338341-1')

class Core extends Highway.Core {
  constructor() {
    super({
      renderers: {
        default: Base,
      },
      transitions: {
        default: Swipe,
        contextual: {
          blog: SwipeBeige,
          project: toProject,
        },
      },
    })
  }

  popState() {
    window.location.reload()
  }
}

const H = new Core()

H.on('NAVIGATE_END', ({ to, location }) => {
  if (typeof window.ga === 'undefined') return
  window.ga.send('pageview', {
    dp: location.pathname,
    dt: to.page.title,
    dl: location.href,
  })
})

if (window.location.href.indexOf('blog') > -1) {
  $('html').addClass('bg-cream')
  $('body').addClass('c-oblack')
} else {
  $('html').removeClass('bg-cream')
  $('body').removeClass('c-oblack')
}
