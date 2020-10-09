const client = require('@sanity/client')

module.exports = client({
  projectId: '0p9uwmou',
  dataset: 'production',
  useCdn: false,
})
