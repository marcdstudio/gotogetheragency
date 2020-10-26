import { component } from 'picoapp'
import { TimelineLite } from 'gsap'
import { SplitText } from '@/util/SplitText'
import inview from '@/util/inview'
import { add, remove } from '@selfaware/martha'

export default component((node, ctx) => {
  var tlHeader = new TimelineLite(),
    splitHeader = new SplitText('.formTitle', { type: 'words' })

  var words = splitHeader.words

  tlHeader.staggerFrom(words, 1, { opacity: 0, y: 30, delay: 0.25 }, 0.1)

  if (inview(node, ctx.getState().wh)) return

  add(node, 'hide')

  let off = ctx.on('tick', ({ wh }) => {
    if (inview(node, wh)) {
      off()
      remove(node, 'hide')
      tlHeader.restart()
    }
  })

  setTimeout(function() {
    splitHeader.revert()
  }, 1500)
})
