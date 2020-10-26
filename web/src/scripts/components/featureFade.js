import { component } from 'picoapp'
import gsap from 'gsap'
import { SplitText } from '@/util/SplitText'

export default component((node, ctx) => {
  if ($('.home')[0]) {
    gsap.from('.featureImg', { duration: 0.5, opacity: 0, y: 30 })
    gsap.from('.featureDetails', {
      duration: 0.5,
      opacity: 0,
      y: 15,
      delay: 0.3,
    })

    var lineSplitText = new SplitText('.fLine p', { type: 'lines' })

    var fLines = lineSplitText.lines
    gsap.from(fLines, { duration: 0.5, opacity: 0, x: -20, stagger: 0.1 })

    // setTimeout(function() {
    //   lineSplitText.revert()
    // }, 1500)
  }
})
