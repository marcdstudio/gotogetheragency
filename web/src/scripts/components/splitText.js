import { component } from 'picoapp'
import { TimelineLite } from 'gsap'
import { SplitText } from '@/util/SplitText'
import inview from '@/util/inview'

export default component((node, ctx) => {
  var titleltr = new TimelineLite(),
    titleSplitText = new SplitText('.fadeltr>h3', {
      type: 'lines, words',
    })

  var lines = titleSplitText.lines

  titleltr.from(lines, { duration: 0.75, opacity: 0, x: -20, stagger: 0.1 })

  setTimeout(function() {
    titleSplitText.revert()
  }, 1500)

  function ttbCur() {
    var ttbCur = $(node).find('p, h3')
    var tlttb = new TimelineLite(),
      mySplitText = new SplitText(ttbCur, { type: 'words' })

    var words = mySplitText.words

    tlttb.from(words, { duration: 0.5, opacity: 0, y: 15, stagger: 0.05 })
    tlttb.restart()
  }

  function h2ttb() {
    var h2ttb = new TimelineLite(),
      h2SplitText = new SplitText(node, { type: 'words' })

    var words = h2SplitText.words

    h2ttb.from(words, { duration: 0.5, opacity: 0, y: 15, stagger: 0.05 })
    h2ttb.restart()
    setTimeout(function() {
      h2SplitText.revert()
    }, 1500)
  }

  function h1ttb() {
    var h1ttb = new TimelineLite(),
      h1SplitText = new SplitText(node, { type: 'words' })

    var words = h1SplitText.words

    h1ttb.from(words, { duration: 0.5, opacity: 0, y: 15, stagger: 0.15 })
    h2ttb.restart()
    setTimeout(function() {
      h1SplitText.revert()
    }, 1500)
  }

  function ltrCur() {
    var ltrCur = $(node).find('p, h3')
    var tlltr = new TimelineLite(),
      mySplitText = new SplitText(ltrCur, {
        type: 'lines',
      })

    var lines = mySplitText.lines

    tlltr.from(lines, { duration: 0.75, opacity: 0, x: -20, stagger: 0.1 })
    tlltr.restart()
    setTimeout(function() {
      mySplitText.revert()
    }, 2000)
  }

  function tlHeader() {
    var tlHeader = new TimelineLite(),
      splitHeader = new SplitText(node, { type: 'words' })

    var words = splitHeader.words

    tlHeader.from(words, { duration: 0.1, opacity: 0, y: 30, stagger: 0.1 })
    tlHeader.restart()
    setTimeout(function() {
      splitHeader.revert()
    }, 1500)
  }

  if (inview(node, ctx.getState().wh)) return

  let off = ctx.on('tick', ({ wh }) => {
    if (inview(node, wh)) {
      off()
      if ($(node).hasClass('fadettb')) {
        ttbCur()
      }
      if ($(node).hasClass('h1ttb')) {
        h1ttb()
      }
      if ($(node).hasClass('h2ttb')) {
        h2ttb()
      }
      if ($(node).hasClass('fadeltr')) {
        ltrCur()
      }
      if ($(node).hasClass('formTitle')) {
        tlHeader()
      }
    }
  })
})
