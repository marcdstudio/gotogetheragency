const client = require('../util/client.js')
const groq = require('groq')

module.exports = async function() {
  return await client.fetch(
    groq`
      *[_type == 'project'] {
        ...,
        title,
        "slug": slug.current,
        'poster': poster.image.asset->url,
        projectSection[]{
            'image': image.asset->url,
            ...,
            content[]{
                ...,
                'image': image.asset->url,
                'imgLeft': imageLeft.image.asset->url,
                'imgRight': imageRight.image.asset->url,
            },
            
        },
        relatedProjectLeft[]->{
          ...,
          'poster': poster.image.asset->url,
          'altText': poster.altText,
        },
        relatedProjectRight[]->{
          ...,
          'poster': poster.image.asset->url,
          'altText': poster.altText,
        },
    }`,
  )
}
