$(() => {

    let bottone = $('button');

    $(bottone).on('click', function () {
        let progress = setInterval(function () {
            $('div').animate({width: '100%'}, {
             duration: 3000,
             easing: 'swing',
             step: function(t){
               $('p').text(Math.round(t*100/100)+'%')
             }
        }, 2000)
    });
});
});