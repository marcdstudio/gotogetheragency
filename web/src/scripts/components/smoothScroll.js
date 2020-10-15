import { component } from 'picoapp'
import { TimelineLite } from 'gsap'
import { SplitText } from '@/util/SplitText'
import Scrollbar from 'smooth-scrollbar'
// import inview from '@/util/inview'
// import { add, remove } from '@selfaware/martha'

export default component((node) => {
  if ($('.about')[0]) {
    //===== YOU ANIMATION =====//
    var tlYou = new TimelineLite(),
      ybSplitText = new SplitText('.youContent>p', { type: 'lines' })

    var tlYouTitle = new TimelineLite(),
      ytSplitText = new SplitText('.youTitle', {
        type: 'words, lines, chars',
      })

    var yLines = ybSplitText.lines
    var yChars = ytSplitText.chars

    tlYou.staggerFrom(yLines, 0.35, { opacity: 0, y: 10 }, 0.1)
    tlYouTitle.staggerFrom(yChars, 0.35, { opacity: 0, y: 20 }, 0.1)

    //===== US ANIMATION =====//
    var tlUs = new TimelineLite(),
      ubSplitText = new SplitText('.usContent>p', { type: 'lines' })

    var tlUsTitle = new TimelineLite(),
      utSplitText = new SplitText('.usTitle', {
        type: 'words, lines, chars',
      })

    var uLines = ubSplitText.lines
    var uChars = utSplitText.chars

    tlUs.staggerFrom(uLines, 0.35, { opacity: 0, y: 10 }, 0.1)
    tlUsTitle.staggerFrom(uChars, 0.35, { opacity: 0, y: 20 }, 0.1)

    $('.youContent').addClass('show')

    //===== SCROLL BAR =====//

    const Scroll = Scrollbar.init(node)

    Scroll.addListener((s) => {
      if (document.documentElement.clientWidth > 650) {
        var wh50 = $(window).height() * 0.5
        var wh100 = $(window).height() * 1.25
        var wh150 = $(window).height() * 1.75
        var wh200 = $(window).height() * 2
      } else {
        var wh50 = $(window).height() * 0.35
        var wh100 = $(window).height() * 0.75
        var wh150 = $(window).height() * 1
        var wh200 = $(window).height() * 1.25
      }

      var showYou = $('.youContent.show')[0]
      var showUs = $('.usContent.show')[0]

      if (s.offset.y > wh50 && s.offset.y < wh100 && !showUs) {
        $('.youBlock').addClass('o0')
        $('.usBlock, .usContent, .youContent').removeClass('o0')
        tlUsTitle.restart()
        tlUs.restart()
        $('.youContent').removeClass('show')
        $('.usContent').addClass('show')
      } else if (s.offset.y > wh100 && s.offset.y < wh150) {
        $('.usContent').removeClass('show')
        $('.usContent, .youContent').addClass('o0')
        $('.youBlock').removeClass('o0')
        if ($('.usBlock.slideOut')[0]) {
          $('.usBlock, .youBlock').removeClass('slideOut')
          $('.toBlock').addClass('o0 toScale')
          $('.aboutSpacer').removeClass('spacerShrink')
        }
      } else if (s.offset.y > wh150 && s.offset.y < wh200) {
        $('.usBlock, .youBlock').addClass('slideOut')
        setTimeout(function() {
          $('.toBlock').removeClass('o0 toScale')
        })
      } else if (s.offset.y > wh200) {
        $('.toBlock').addClass('o0 toScale')
        $('.aboutSpacer').addClass('spacerShrink')
      } else if (s.offset.y < wh50 && !showYou) {
        $('.usBlock').addClass('o0')
        $('.youBlock').removeClass('o0')
        tlYouTitle.restart()
        tlYou.restart()
        $('.youContent').addClass('show')
        $('.usContent').removeClass('show')
      }
    })
  } else if ($('.article')[0]) {
    //===== SCROLL BAR =====//
    const Scroll = Scrollbar.init(node)

    Scroll.addListener((s) => {
      var st = s.offset.y
      var stp = st / 10
      $('.plx').css('transform', 'translateY(-' + stp + 'px) scale(1.2)')
    })
  } else if ($('.blog')[0]) {
    const Scroll = Scrollbar.init(node)

    Scroll.addListener((s) => {
      var st = s.offset.y
      var stp = st / 2
      $('.marquee div').css('transform', 'translateX(-' + stp + 'px)')
    })
  } else if ($('.stickyTitle')[0]) {
  } else {
    setTimeout(function() {
      Scrollbar.init(node)
    }, 500)
  }
})
