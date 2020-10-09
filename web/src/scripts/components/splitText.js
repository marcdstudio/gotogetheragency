import { component } from 'picoapp'
import { gsap, TimelineLite } from 'gsap'
import { SplitText } from '@/util/SplitText'
import inview from '@/util/inview'
import { add, remove } from '@selfaware/martha'

export default component((node, ctx) => {
  var tlltr = new TimelineLite(),
    mySplitText = new SplitText('.fadeltr>p', { type: 'words, lines' })

  var lines = mySplitText.lines

  tlltr.staggerFrom(lines, 0.5, { opacity: 0, x: -30 }, 0.1)

  var tlttb = new TimelineLite(),
    mySplitText = new SplitText('.fadettb>p', { type: 'words, lines' })

  var words = mySplitText.words

  tlttb.staggerFrom(words, 0.3, { opacity: 0, y: 20 }, 0.05)

  // window.onload = function() {
  //   tlltr.restart()
  //   tlttb.restart()
  // }

  if (inview(node, ctx.getState().wh)) return

  add(node, 'hide')

  let off = ctx.on('tick', ({ wh }) => {
    if (inview(node, wh)) {
      off()
      remove(node, 'hide')
      tlltr.restart()
      tlttb.restart()
    }
  })
})
