const client = require('../util/client.js')
const groq = require('groq')

module.exports = async function() {
  return await client.fetch(groq`*[_type == 'project'] {
      ...,
      title,
      slug,
      'image': thumbnail.image.asset->url,
  }`)
}
