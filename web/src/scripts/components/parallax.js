import { component } from 'picoapp'
import { gsap, ScrollTrigger } from 'gsap/all'

export default component(() => {
  setTimeout(() => {
    gsap.utils.toArray('.plx').forEach((plx) => {
      gsap.to(plx, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: plx,
          scrub: true,
        },
      })
    })
  })
})
