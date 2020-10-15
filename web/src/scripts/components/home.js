import { component } from 'picoapp'
import Scrollbar from 'smooth-scrollbar'
import { TimelineLite } from 'gsap'
import { SplitText } from '@/util/SplitText'

export default component((node) => {
  Scrollbar.init(node)
  var homeTitle = new TimelineLite(),
    htSplit = new SplitText('.h1:first-of-type>p', { type: 'words' })

  var words = htSplit.words

  homeTitle.staggerFrom(words, 0.75, { opacity: 0, y: 20 }, 0.1)
  homeTitle.restart()
})
