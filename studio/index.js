import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import config from './documents/config'
import home from './documents/home'
import blog from './documents/blog'
import article from './documents/article'
import tag from './documents/tag'
import about from './documents/about'
import contact from './documents/contact'
import project from './documents/project'
import footer from './documents/footer'

import seo from './objects/seo'
import asset from './objects/asset'
import a11yImage from './objects/a11yImage'
import imageAndCaption from './objects/imageAndCaption'
import contentModules from './objects/contentModules'
import largeTextBlock from './objects/largeTextBlock'
import shortText from './objects/shortText'
import basicText from './objects/basicText'
import textBlockIcon from './objects/textBlockIcon'
import blockText from './objects/blockText'
import spacer from './objects/spacer'
import articleImage from './objects/articleImage'
import articleCarousel from './objects/articleCarousel'

const documents = [
  config,
  home,
  blog,
  article,
  tag,
  about,
  contact,
  project,
  footer,
]
const objects = [
  seo,
  asset,
  a11yImage,
  imageAndCaption,
  contentModules,
  largeTextBlock,
  shortText,
  basicText,
  textBlockIcon,
  blockText,
  spacer,
  articleImage,
  articleCarousel,
]

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([...documents, ...objects]),
})
