import { component } from 'picoapp'
import { TimelineLite } from 'gsap'
import { SplitText } from '@/util/SplitText'
import inview from '@/util/inview'

export default component((node, ctx) => {
  var titleltr = new TimelineLite(),
    titleSplitText = new SplitText('.fadeltr>h3', { type: 'lines' })

  var lines = titleSplitText.lines

  titleltr.staggerFrom(lines, 0.75, { opacity: 0, x: -20 }, 0.1)

  // var tlltr = new TimelineLite(),
  //   mySplitText = new SplitText('.fadeltr>p', { type: 'lines' })

  // var lines = mySplitText.lines

  // tlltr.staggerFrom(lines, 0.75, { opacity: 0, x: -20 }, 0.1)

  // var tlttb = new TimelineLite(),
  //   mySplitText = new SplitText('.fadettb>p', { type: 'words' })

  // var words = mySplitText.words

  // tlttb.staggerFrom(words, 0.5, { opacity: 0, y: 15 }, 0.05)

  // window.onload = function() {
  //   tlltr.restart()
  //   tlttb.restart()
  // }

  // var tlHeader = new TimelineLite(),
  //   splitHeader = new SplitText('.formTitle', { type: 'words' })

  // var words = splitHeader.words

  // tlHeader.staggerFrom(words, 1, { opacity: 0, y: 30 }, 0.1)

  if (inview(node, ctx.getState().wh)) return

  // add(node, 'hide')

  let off = ctx.on('tick', ({ wh }) => {
    if (inview(node, wh)) {
      off()
      // remove(node, 'hide')
      // tlltr.restart()
      // tlttb.restart()
      // tlHeader.restart()
      // titleLtr.restart()
      if ($(node).hasClass('fadettb')) {
        var ttbCur = $(node).find('p, h3')
        var tlttb = new TimelineLite(),
          mySplitText = new SplitText(ttbCur, { type: 'words' })

        var words = mySplitText.words

        tlttb.staggerFrom(words, 0.5, { opacity: 0, y: 15 }, 0.05)
        tlttb.restart()
      }
      if ($(node).hasClass('h2ttb')) {
        var h2ttb = new TimelineLite(),
          h2SplitText = new SplitText(node, { type: 'words' })

        var words = h2SplitText.words

        h2ttb.staggerFrom(words, 0.5, { opacity: 0, y: 15 }, 0.05)
        h2ttb.restart()
      }
      if ($(node).hasClass('fadeltr')) {
        var ltrCur = $(node).find('p, h3')
        var tlltr = new TimelineLite(),
          mySplitText = new SplitText(ltrCur, { type: 'lines' })

        var lines = mySplitText.lines

        tlltr.staggerFrom(lines, 0.75, { opacity: 0, x: -20 }, 0.1)
        tlltr.restart()
      }
      if ($(node).hasClass('formTitle')) {
        // var headerCur = $(node).find('p, h3')
        var tlHeader = new TimelineLite(),
          splitHeader = new SplitText(node, { type: 'words' })

        var words = splitHeader.words

        tlHeader.staggerFrom(words, 1, { opacity: 0, y: 30 }, 0.1)
        tlHeader.restart()
      }
    }
  })
})
