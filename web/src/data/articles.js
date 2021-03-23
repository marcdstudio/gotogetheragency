const client = require('../util/client.js')
const groq = require('groq')
const fragments = require('../util/fragments')

module.exports = async function() {
  return await client.fetch(
    groq`
      *[_type == 'article'] | order(date desc) {
        ...,
        title,
        "slug": slug.current,
        "poster": poster.image.asset->url,
        "posterAlt": poster.altText,
        allTags[]->,
        aboutContent[]{
          ...,
          'image': image.asset->url,
          'alt': image.altText,
          image[]{
            ...,
          'image': image.asset->url,
          'alt': image.altText,
          }
        },
    }`,
  )
}
