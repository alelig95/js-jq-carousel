  $('.next').click(function () {
    // creiamo una variabile per indicare l'immagine attualmente visualizzata:
    var activeImg = $('.images img.active');
    activeImg.removeClass('active');
    // creiamo un if per capire se l'immagine visualizzata è l'ultima:
    if (activeImg.hasClass('last')) {
      // Se è l'ultima, allora l'immagine visualizzata successiva sarà la prima
      var firstImg = $('.images img.first');
      firstImg.addClass('active');
    } else {
      // Se non è l'ultima passa semplicemente alla successiva:
     activeImg.next().addClass('active');
    }

  })

  $('.prev').click(function() {
    // creiamo una variabile per indicare l'immagine attualmente visualizzata:
    var activeImg = $('.images img.active');
    activeImg.removeClass('active');
    // creiamo un if per capire se l'immagine visualizzata è la prima:
    if (activeImg.hasClass('first')) {
      // Se è la prima, allora l'immagine visualizzata successiva sarà l'ultima
      var lastImg = $('.images img.last');
      lastImg.addClass('active');
    } else {
      // Se non è la prima  passa semplicemente alla precedente:
     activeImg.prev().addClass('active');
    }
  })
