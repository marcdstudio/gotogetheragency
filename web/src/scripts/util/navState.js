export default function navState() {
  if (window.location.href.indexOf('blog') > -1) {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(0)
      .addClass('active')
  } else if (window.location.href.indexOf('contact') > -1) {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(1)
      .addClass('active')
  } else if (window.location.href.indexOf('about') > -1) {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(2)
      .addClass('active')
  } else if (location.pathname == '/work/') {
    $('.navItem').removeClass('active')
    $('.navItem')
      .eq(3)
      .addClass('active')
  } else {
    $('.navItem').removeClass('active')
  }

  $('.wordmark').removeClass('wordmarkBlack')
  $('.menuIcon, .mblIcon').removeClass('menuIconBlack')

  $('.navItem').on('click', () => {
    $('.navItem').removeClass('active')
    $(this).addClass('active')
  })
}
