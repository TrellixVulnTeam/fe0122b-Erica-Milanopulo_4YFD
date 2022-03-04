$(() => {

  const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
    "piangere", "ridere", "amare", "amare1", "spavento", "shock"];


  for (i = 0; i < 16; i++) {

    let random = Math.floor(Math.random() * mieImg.length);  
    let imgEliminata = mieImg.splice(random, 1);


    $('<div class="images" id="emoji' + i + '"><img id="' + i + '" src="assets/img/' + imgEliminata + '.png" width="130" height"130" /></div>')
      .appendTo('#memory');
  };

  let imgCliccate = [];

  $('.images').click(function () {

    let clicks = $('#clicks').text();
    clicks++
    $('#clicks').text(clicks);

    if (imgCliccate.length < 2) {

      $(this).children().show();

      let imgId = $(this).children().attr('id');
      let imgSrc = $(this).children().attr('src');

      let bigImmagine = {
        id: imgId,
        src: imgSrc
      };

      imgCliccate.push(bigImmagine);

      if (imgCliccate.length == 2) {

        if (imgCliccate[0].src == imgCliccate[1].src) {
          $('#' + imgCliccate[0].id).css('cursor', 'no-drop');
          $('#' + imgCliccate[1].id).css('cursor', 'no-drop');
          imgCliccate = [];

        } else {
          setTimeout(function () {
            $('#' + imgCliccate[0].id).hide();
            $('#' + imgCliccate[1].id).hide();
            imgCliccate = [];
          }, 500)
        }

      }


    };

  });


});

