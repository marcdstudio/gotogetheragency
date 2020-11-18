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
import magneticButton from '@/components/magneticButton'
import mouseFollow from '@/components/mouseFollow'
import home from '@/components/home'
import about from '@/components/about'
import project from '@/components/project'
import contact from '@/components/contact'
import article from '@/components/article'
import blog from '@/components/blog'
import projectSection from '@/components/projectSection'
import parallax from '@/components/parallax'

const components = {
  subscribe,
  xdates,
  date,
  reveal,
  socials,
  nav,
  splitText,
  wordmark,
  magneticButton,
  mouseFollow,
  about,
  contact,
  article,
  blog,
  splitHeader,
  projectSection,
  project,
  home,
  parallax,
}

const state = {
  ...size(),
}

export default picoapp(components, state)
