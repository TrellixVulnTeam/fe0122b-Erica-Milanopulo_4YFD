var datiUno = 0;
var datiDue = 0;
var datiTre = 0;


function somma1() {
    var datiUno = document.getElementById('dato1').innerHTML * 1;
    datiUno += document.getElementById('dato4').innerHTML * 1;
    datiUno += document.getElementById('dato7').innerHTML * 1;
    document.getElementById('dato10').innerHTML = (datiUno);
}
somma1();

function somma2() {
    var datiDue = document.getElementById('dato2').innerHTML * 1;
    datiDue += document.getElementById('dato5').innerHTML * 1;
    datiDue += document.getElementById('dato8').innerHTML * 1;
    document.getElementById('dato11').innerHTML = (datiDue);
}
somma2();

function somma3() {
    var datiTre = document.getElementById('dato3').innerHTML * 1;
    datiTre += document.getElementById('dato6').innerHTML * 1;
    datiTre += document.getElementById('dato9').innerHTML * 1;
    document.getElementById('dato12').innerHTML = (datiTre);
}
somma3();


var testoTabella = 'Questa è una tabella di studio'
document.getElementById('testa').innerHTML = testoTabella;

function sottrai() {
    var sot = document.getElementById('dato12').innerHTML*1;
    sot-=document.getElementById('dato10').innerHTML*1;

    document.getElementById('togli').innerHTML="La differenza é: " + (sot);
}

const costante = 15;
console.log(costante);
/*costante = 16;
console.log(costante);*/ 

var numero='5';
var boolean=true;
console.log(numero + boolean);

var numero=5;
var boolean=true;
console.log(numero+boolean);

var nome='Erica';
var cognome='Milanopulo';
document.getElementById('autore').innerHTML= (nome + " " + cognome);
