// clock.js
import { component } from 'picoapp'
import sharable from 'sharable'
import blocksToText from '@/components/blocksToText'

export default component((node) => {
  // const blockEl = $('.block')
  // blocksToText(blockEl)

  // Shareables
  const twitterLink = $('.twitter')
  const facebookLink = $('.facebook')

  sharable(twitterLink)
  sharable(facebookLink)
})
