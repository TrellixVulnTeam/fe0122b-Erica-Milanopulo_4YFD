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
$('#iscr-news').click(() => {
let control = $('input').val();

if(control != ""){
    $('#form-email').submit();
}else{
    alert('Il form non è stato compilato correttamente')
}
})

//RESET
function resettare() {
    let botReset = $('#pulisci-form');
    let valore = $('#nome, #email-1,email-2');

    botReset.click(() => {
        document.forms[0].reset();;
    });
};
resettare();


//SI POTEVA FARE ANCHE CON UN CICLO
/*    $(document).ready(function(){

       $("#iscr-news").click(function () {

        let controllo = true;
        let email1 = $("#email-1").val();
        let email2 = $("#email-2").val();



        let arrayy = $("#nome, #email-1, #email-2");

        arrayy.each((indice,campo) => {
            if($(campo).val() == ""){
                $(campo).next().text("Campo richiesto");
                controllo = false;
            } else {
                $(campo).next().text("");
            }


        });



        if (email1 !== email2){
            $("#email-2").next().text("Le email non corrispondono!");
            controllo = false;
        }

        if(controllo == true){
            alert ("form inviato");
        } else {
            alert ("controlla che tutti i campi siano corretti!!");
        }


       });

       $("#pulisci-form").click(function () {
        $("#nome, #email-1, email-2").val("");

       });

    });*/