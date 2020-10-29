import { component } from 'picoapp'

export default component(() => {
  $(document).ready(function() {
    var $form = $('#mc-embedded-subscribe-form')
    if ($form.length > 0) {
      $('form button[type="submit"]').bind('click', function(event) {
        if (event) event.preventDefault()
        register($form)
      })
    }
  })

  function register($form) {
    $('#mc-embedded-subscribe').val('Sending...')
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      error: function(err) {
        $('.subResult').removeClass('dn mt30')
        $('.subResult').addClass('c-red mt10')
        $('.subResult').html('<p>Oops, something went wrong. </p>')
      },
      success: function(data) {
        $('#mc-embedded-subscribe').val('subscribe')
        if (data.result === 'success') {
          // Yeahhhh Success
          console.log(data.msg)
          $('.subForm').addClass('dn')
          $('.subResult').removeClass('dn')
          $('.subResult').html('<p>Thanks for signing up!</p>')
        } else {
          // Something went wrong, do something to notify the user.
          console.log(data.msg)
          $('.subResult').removeClass('dn mt30')
          $('.subResult').addClass('c-red mt10')
          $('.subResult').html('<p>Oops, something went wrong. </p>')
        }
      },
    })
  }
})
