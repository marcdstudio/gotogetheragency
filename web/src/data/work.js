const client = require('../util/client.js')
const groq = require('groq')

module.exports = async function() {
  return await client.fetch(groq`*[_type == 'work'][0] {
      ...,
    //   allProjects[]{
    //       ...,
    //       project[]{
    //           ...,
    //         'image': poster.image.asset->url,
    //       }
    //   },
    allProjects[]->{
        ...,
        'image': poster.image.asset->url,
        'altText': poster.altText,
        'slug': slug.current,
    },
  }`)
}
