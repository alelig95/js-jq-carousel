  $('.next > i').click(function () {
    $('.images > .active').removeClass('active').next().addClass('active');
  })

  $('.prev > i').click(function() {
    $('.images > .active').removeClass('active').prev().addClass('active');
  })

  if ($(".images > .last").hasClass("active")) {
         $(".next > i").click(function () {
         $('.images > .first').addClass('active');
         });
     }
