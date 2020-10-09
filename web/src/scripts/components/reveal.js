import { component } from 'picoapp'
import inview from '@/util/inview'
import { add, remove } from '@selfaware/martha'

export default component((node, ctx) => {
  if (inview(node, ctx.getState().wh)) return

  add(node, 'fadeUp')

  let off = ctx.on('tick', ({ wh }) => {
    if (inview(node, wh)) {
      off()
      remove(node, 'fadeUp')
    }
  })

  // if ($('.home')[0]) {
  //   $('.fade').removeClass('fadeUp')
  // }
})
