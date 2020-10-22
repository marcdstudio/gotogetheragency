const client = require('../util/client.js')
const groq = require('groq')

module.exports = async function() {
  return await client.fetch(groq`*[_type == 'home'][0] {
      ...,
      title,
      slug,
      featuredProject[]->{
        ...,
        'image': poster.image.asset->url
      },
      homeProjectsLeft[]->{
        ...,
        'image': thumbnail.image.asset->url
      },
      homeProjectsRight[]->{
        ...,
        'image': thumbnail.image.asset->url
      },
      homeModules[]{
          ...,
        _type,
        _type == 'largeTextBlock' => {
           ...,
        },
      }
  }`)
}
