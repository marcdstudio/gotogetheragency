import { component } from 'picoapp'

export default component((node) => {
  $('.journalDate').each(function() {
    var dateString = $(this).text()
    var year = $.trim(dateString).substring(0, 4)
    var month = $.trim(dateString).substring(5, 7)
    var day = $.trim(dateString).substring(8, 10)

    if (month == '01') {
      month = 'JAN'
    }
    if (month == '02') {
      month = 'FEB'
    }
    if (month == '03') {
      month = 'MAR'
    }
    if (month == '04') {
      month = 'APR'
    }
    if (month == '05') {
      month = 'MAY'
    }
    if (month == '06') {
      month = 'JUN'
    }
    if (month == '07') {
      month = 'JUL'
    }
    if (month == '08') {
      month = 'AUG'
    }
    if (month == '09') {
      month = 'SEP'
    }
    if (month == '10') {
      month = 'OCT'
    }
    if (month == '11') {
      month = 'NOV'
    }
    if (month == '12') {
      month = 'DEC'
    }

    if (day.indexOf('0') >= 0) {
      day = day.substring(1)
    }

    $(this).html(month + ' ' + day + ' / ' + year)
  })
})
