import { component } from 'picoapp'

export default component((node) => {
  let year = new Date().getFullYear()
  $(node).text('© ' + year)
})
