// clock.js
import { component } from 'picoapp'
import sharable from 'sharable'
import blocksToText from '@/components/blocksToText'

export default component((node) => {
  const blockEl = $('.block')
  blocksToText(blockEl)
  // Twitter share
  const twitterLink = $('.twitter')
  const facebookLink = $('.twitter')
  sharable(twitterLink)
  sharable(facebookLink)
})
