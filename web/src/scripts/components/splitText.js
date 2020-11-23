import { component } from 'picoapp'
import { SplitText } from '@/util/SplitText'
import inview from '@/util/inview'
import { gsap, Power2 } from 'gsap'

export default component((node, ctx) => {
  var titleltr = gsap.timeline(),
    titleSplitText = new SplitText('.fadeltr>h3', {
      type: 'lines, words',
    })

  var lines = titleSplitText.lines

  titleltr.from(lines, {
    duration: 0.5,
    opacity: 0,
    x: -20,
    stagger: 0.1,
    ease: Power2.easeOut,
  })

  ctx.on('resize', () => {
    titleSplitText.revert()
  })

  const ttbCur = () => {
    var ttbCur = $(node).find('p, h3')
    var tlttb = new gsap.timeline(),
      mySplitText = new SplitText(ttbCur, { type: 'words' })

    var words = mySplitText.words

    tlttb.from(words, { duration: 0.5, opacity: 0, y: 15, stagger: 0.05 })
  }

  const h2ttb = () => {
    var h2ttb = new gsap.timeline(),
      h2SplitText = new SplitText(node, { type: 'words' })

    var words = h2SplitText.words

    h2ttb.from(words, {
      duration: 0.5,
      opacity: 0,
      y: 15,
      stagger: 0.05,
      ease: Power2.easeOut,
    })
    ctx.on('resize', () => {
      h2SplitText.revert()
    })
  }

  const h1ttb = () => {
    var h1ttb = new gsap.timeline(),
      h1SplitText = new SplitText(node, { type: 'words' })

    var words = h1SplitText.words

    h1ttb.from(words, {
      duration: 0.35,
      opacity: 0,
      y: 15,
      stagger: 0.15,
    })
    ctx.on('resize', () => {
      h1SplitText.revert()
    })
  }

  const ltrCur = () => {
    var ltrCur = $(node).find('p, h3')
    var tlltr = gsap.timeline(),
      stCur = new SplitText(ltrCur, {
        type: 'lines',
      })

    var lines = stCur.lines

    tlltr.from(lines, {
      duration: 0.35,
      opacity: 0,
      x: -20,
      stagger: 0.08,
    })
    ctx.on('resize', () => {
      stCur.revert()
    })
  }

  const tlHeader = () => {
    var tlHeader = gsap.timeline(),
      splitHeader = new SplitText(node, { type: 'words' })

    var words = splitHeader.words

    tlHeader.from(words, {
      duration: 0.1,
      opacity: 0,
      y: 30,
      stagger: 0.05,
    })
    ctx.on('resize', () => {
      splitHeader.revert()
    })
  }

  const fadeUp = () => {
    gsap.fromTo(
      node,
      {
        y: 15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut,
      },
    )
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
      if ($(node).hasClass('fadeUp')) {
        fadeUp()
      }
    }
  })
})
