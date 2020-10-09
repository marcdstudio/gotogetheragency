import { component } from 'picoapp'

export default component((node) => {
  $('.formInput').on('input', function() {
    if ($(this).val().length > 0) {
      $(this)
        .parents('.inputWrap')
        .find('.nextBtn')
        .removeClass('dn')
    } else {
      $(this)
        .parents('.inputWrap')
        .find('.nextBtn')
        .addClass('dn')
    }
  })
  $('.formInputText').on('input', function() {
    $('.contactSubmit button').show()
  })
  $('.formInputName').on('input', function() {
    var rn = $('.formInputName').val()
    $('.rName').html(rn)
  })
  $('.fic1 .nextBtn').on('click', function() {
    $(this)
      .parents('.formInputContainer')
      .hide()
    $('.fic2').show()
    $('.backBtn').removeClass('dn')
    $('.fmcnt1').removeClass('acnt pen')
    $('.fmcnt2').addClass('acnt')
    $('.fcnt2').removeClass('cntDown')
    $('.fcnt1').addClass('cntUp')
    setTimeout(function() {
      $('.fcnt1').addClass('cntDown')
      $('.fcnt1').removeClass('cntUp')
    }, 500)
  })
  $('.fic2 .nextBtn').on('click', function() {
    $(this)
      .parents('.formInputContainer')
      .hide()
    $('.fic3').show()
    $('.fmcnt2').removeClass('acnt pen')
    $('.fmcnt3').addClass('acnt')
    $('.fcnt3').removeClass('cntDown')
    $('.fcnt2').addClass('cntUp')
    setTimeout(function() {
      $('.fcnt2').addClass('cntDown')
      $('.fcnt2').removeClass('cntUp')
    }, 500)
  })
  $('.fic3 .nextBtn').on('click', function() {
    var sv = $('.companyInput').val()
    $(this)
      .parents('.formInputContainer')
      .hide()
    $('.fic4').show()
    $('.fmcnt3').removeClass('acnt pen')
    $('.fmcnt4').addClass('acnt')
    $('.fcnt4').removeClass('cntDown')
    $('.fcnt3').addClass('cntUp')
    $('.contactSubmit').show()
    setTimeout(function() {
      $('.fcnt3').addClass('cntDown')
      $('.fcnt3').removeClass('cntUp')
    }, 500)
    $('.subjectInput').val(sv)
  })
  $('.backBtn').on('click', function() {
    if (!$('.fcnt2.cntDown')[0]) {
      console.log('2')
      $('.fic2').hide()
      $('.fic1').show()
      $('.fcnt2').addClass('cntUp')
      $('.fcnt1').removeClass('cntDown')
      $('.backBtn').addClass('dn')
      setTimeout(function() {
        $('.fcnt2').addClass('cntDown')
        $('.fcnt2').removeClass('cntUp')
      }, 500)
    } else if (!$('.fcnt3.cntDown')[0]) {
      console.log('3')
      $('.fic3').hide()
      $('.fic2').show()
      $('.fcnt3').addClass('cntUp')
      $('.fcnt2').removeClass('cntDown')
      setTimeout(function() {
        $('.fcnt3').addClass('cntDown')
        $('.fcnt3').removeClass('cntUp')
      }, 500)
    } else if (!$('.fcnt4.cntDown')[0]) {
      console.log('4')
      $('.fic4').hide()
      $('.fic3').show()
      $('.fcnt4').addClass('cntUp')
      $('.fcnt3').removeClass('cntDown')
      setTimeout(function() {
        $('.fcnt4').addClass('cntDown')
        $('.fcnt4').removeClass('cntUp')
      }, 500)
    } else {
      console.log('1')
    }
  })

  $('.fmcnt1').on('click', function() {
    $('.formInputContainer').hide()
    $('.fic1').show()
    $('.fmcnt').removeClass('acnt')
    $('.fmcnt').addClass('pen')
    $('.fmcnt1').addClass('acnt')
    $('.fmcnt1').removeClass('pen')
  })

  $('.fmcnt2').on('click', function() {
    $('.formInputContainer').hide()
    $('.fic2').show()
    $('.fmcnt').removeClass('acnt')
    $('.fmcnt').addClass('pen')
    $('.fmcnt2').addClass('acnt')
    $('.fmcnt1, .fmcnt2').removeClass('pen')
  })

  $('.fmcnt3').on('click', function() {
    $('.formInputContainer').hide()
    $('.fic3').show()
    $('.fmcnt').removeClass('acnt')
    $('.fmcnt').addClass('pen')
    $('.fmcnt3').addClass('acnt')
    $('.fmcnt1, .fmcnt2, .fmcnt3').removeClass('pen')
  })

  $('.fmcnt4').on('click', function() {
    $('.formInputContainer').hide()
    $('.fic4').show()
    $('.fmcnt').removeClass('acnt')
    $('.fmcnt').addClass('pen')
    $('.fmcnt4').addClass('acnt')
    $('.fmcnt1, .fmcnt2, .fmcnt3, .fmcnt').removeClass('pen')
  })

  // $('.contactSubmit').on('click', function() {
  //   // var url = 'path/to/your/script.php' // the script where you handle the form input.

  //   $.ajax({
  //     type: 'POST',
  //     url: 'https://api.staticforms.xyz/submit',
  //     data: $('.contactForm').serialize(), // serializes the form's elements.
  //     success: function(data) {
  //       console.log(data) // show response from the php script.
  //     },
  //   })

  // $('.contactForm, .countContainer, .countContainerMobile').hide()
  // $('.formTitle').html('Stay tuned.')
  // $('.successWrap').removeClass('dn')
  // if ($('.contact')[0]) {
  //   setTimeout(function() {
  //     location.href = '/'
  //   }, 3000)
  // }
  //   return false // avoid to execute the actual submit of the form.
  // })

  $('.contactForm').submit(function(e) {
    e.preventDefault()

    var $form = $(this)
    $.post($form.attr('action'), $form.serialize()).then(function() {
      $('.contactForm, .countContainer, .countContainerMobile').hide()
      $('.formTitle').html('Stay tuned.')
      $('.successWrap').removeClass('dn')
      if ($('.contact')[0]) {
        setTimeout(function() {
          location.href = '/'
        }, 3000)
      }
    })
  })
  $('.backBtn').hover(function() {
    $(this).toggleClass('fill-tan')
  })
})
