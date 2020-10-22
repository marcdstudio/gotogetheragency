import { component } from 'picoapp'
import { gsap, Power2 } from 'gsap'

export default component((node) => {
  var magBtn = $(node)
  var circle = $(node).find('.circle')
  var arrow = $(node).find('.arrow')

  magBtn.mouseleave(function(e) {
    gsap.to(this, 0.3, { scale: 1 })
    gsap.to('.circle, .arrow', 0.3, { scale: 1, x: 0, y: 0 })
  })

  magBtn.mouseenter(function(e) {
    gsap.to(this, 0.3, { transformOrigin: '0 0', scale: 1 })
    gsap.to(circle, 0.3, { scale: 1.35 })
  })

  magBtn.mousemove(function(e) {
    callParallax(e)
  })

  function callParallax(e) {
    parallaxIt(e, circle, 30)
    parallaxIt(e, arrow, 5)
  }

  function parallaxIt(e, target, movement) {
    var $this = magBtn
    var boundingRect = $this[0].getBoundingClientRect()
    var relX = e.pageX - boundingRect.left
    var relY = e.pageY - boundingRect.top

    gsap.to(target, 0.3, {
      x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
      y: ((relY - boundingRect.height / 2) / boundingRect.width) * movement,
      ease: Power2.easeOut,
    })
  }
})
