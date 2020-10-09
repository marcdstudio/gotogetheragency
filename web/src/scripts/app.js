import { picoapp } from 'picoapp'
import { size } from '@selfaware/martha'
import subscribe from '@/components/subscribe'
import xdates from '@/components/xdates'
import socials from '@/components/socials'
import nav from '@/components/nav'
import splitText from '@/components/splitText'
import wordmark from '@/components/wordmark'
import reveal from '@/components/reveal'
import featureFade from '@/components/featureFade'
import smoothScroll from '@/components/smoothScroll'
import magneticButton from '@/components/magneticButton'
import about from '@/components/about'
import contact from '@/components/contact'

const components = {
  subscribe,
  xdates,
  reveal,
  socials,
  nav,
  splitText,
  wordmark,
  featureFade,
  smoothScroll,
  magneticButton,
  about,
  contact,
}

const state = {
  ...size(),
}

export default picoapp(components, state)
