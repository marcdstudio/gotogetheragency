import { component } from 'picoapp'
import Scrollbar from 'smooth-scrollbar'
import { TimelineLite } from 'gsap'
import { SplitText } from '@/util/SplitText'

export default component((node) => {
  Scrollbar.init(node)
  var homeTitle = new TimelineLite(),
    htSplit = new SplitText('.introTitle>p', { type: 'words' })

  var words = htSplit.words

  homeTitle.from(words, { duration: 0.75, opacity: 0, y: 20, stagger: 0.1 })
  homeTitle.restart()
  console.log('title')

  setTimeout(function() {
    htSplit.revert()
  }, 3000)
})
