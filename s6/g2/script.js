$(() => {
      $('h2').click(function(){
          $(this).next().toggle('slow')
          $(this).toggleClass('meno');
      });
});
