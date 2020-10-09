const client = require('../util/client.js')
const groq = require('groq')

module.exports = async function() {
  return await client.fetch(groq`*[_type == 'about'][0] {
      ...,
      title,
      slug,
      text3Up[]{
          ...,
          'icon': image.image.asset->url,
          'alt': image.image.altText,
      }
  }`)
}
