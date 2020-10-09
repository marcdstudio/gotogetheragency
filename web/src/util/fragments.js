const groq = require('groq')

const article = groq`{
  title,
  "slug": slug.current,
}`

module.exports = {
  article,
}
