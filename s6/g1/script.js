//NOME
$(() => {
    $('#iscr-news').click(() => {
        let nome = $('#nome').val();

        if (nome == false) {
            $('#nome').next().text('*Campo richiesto').css('color', 'red');;
        } else {
            $('#nome').next().text('- Campo corretto').css('color', 'green');
        }
    })
})

//EMAIL
function email() {
    $('#iscr-news').click(() => {
        let email = $('#email-1').val();

        if (email == false) {
            $('#email-1').next().text('*Campo richiesto').css('color', 'red');;
        } else {
            $('#email-1').next().text('- Campo corretto').css('color', 'green');
        }
    })
};
email();

//RIPETI EMAIL
function ripetiEmail() {
    $('#iscr-news').click(() => {
        let ripEmail = $('#email-2').val();

        if (ripEmail == false) {
            $('#email-2').next().text('*Campo richiesto').css('color', 'red');
        } else {
            $('#email-2').next().text('- Campo corretto').css('color', 'green');
        }
    })
};
ripetiEmail();

//INVIO FORM O SEGNALAZIONE ERRORE
function invia() {
    let tuttoForm = $('form').val();

    if (tuttoForm) {
        $('form').submit();
    } else {
        alert('Compila il form')
    }
};
invia();



//RESET
function resettare() {
    let botReset = $('#pulisci-form');
    let valore = $('#nome, #email-1,email-2');

    botReset.click(() => {
        document.forms[0].reset();;
    });
};
resettare();
