let titolo = document.getElementById('titolo').innerHTML = "Esercitazioni con i metodi dell\' Array";

document.getElementById('titolo').innerHTML= (titolo.toUpperCase());

document.getElementById('nunzio').innerHTML = (titolo.substring(17));

var persone = [
    "Elisabetta",
    "Erica",
    "Federico",
    "Sergiu"
]

document.getElementById('selez').innerHTML= persone[2];

let variabilePush = persone.push('Nunzio');
    document.getElementById('aggNome').innerHTML = persone;

    console.log(persone.length);



function oper() {
    var numeri  = [32, 46, 9, 3]
    
    document.getElementById('operazione').innerHTML= numeri[1] + numeri[3];
}