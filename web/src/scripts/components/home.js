import { component } from 'picoapp'
import { gsap, Power2 } from 'gsap'
import { SplitText } from '@/util/SplitText'

export default component(() => {
  var homeTitle = gsap.timeline({ onComplete: htsr, ease: Power2.easeOut }),
    htSplit = new SplitText('.introTitle>p', { type: 'words' })

  var words = htSplit.words

  homeTitle.from(words, {
    duration: 0.5,
    opacity: 0,
    y: 20,
    stagger: 0.1,
  })

  const htsr = () => {
    htSplit.revert()
  }

  gsap.from('.featureImg', { duration: 0.5, opacity: 0, y: 30, delay: 0.2 })
  gsap.from('.featureDetails', {
    duration: 0.35,
    opacity: 0,
    y: 15,
    delay: 0.4,
    ease: Power2.easeOut,
  })

  gsap.from('.fLine', {
    duration: 0.35,
    opacity: 0,
    y: 20,
    delay: 0.6,
  })
})
