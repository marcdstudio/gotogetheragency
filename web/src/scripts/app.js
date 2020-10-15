import { picoapp } from 'picoapp'
import { size } from '@selfaware/martha'
import subscribe from '@/components/subscribe'
import xdates from '@/components/xdates'
import date from '@/components/date'
import socials from '@/components/socials'
import nav from '@/components/nav'
import splitText from '@/components/splitText'
import splitHeader from '@/components/splitHeader'
import wordmark from '@/components/wordmark'
import reveal from '@/components/reveal'
import featureFade from '@/components/featureFade'
import smoothScroll from '@/components/smoothScroll'
import magneticButton from '@/components/magneticButton'
import home from '@/components/home'
import about from '@/components/about'
import project from '@/components/project'
import contact from '@/components/contact'
import contactScroll from '@/components/contactScroll'
import article from '@/components/article'
import sticky from '@/components/sticky'
import bgShift from '@/components/bgShift'

const components = {
  subscribe,
  xdates,
  date,
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
  contactScroll,
  article,
  splitHeader,
  sticky,
  bgShift,
  project,
  home,
}

const state = {
  ...size(),
}

export default picoapp(components, state)
