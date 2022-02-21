
var data = new Date();
document.getElementById('datt').innerHTML = data;

var anno = data.getFullYear();
document.getElementById('singolo').innerHTML = "L'anno attuale è il: " + anno;
console.log(anno);

var mese = data.toLocaleDateString('it-IT', { month: 'long' });
document.getElementById('singolo1').innerHTML = "Il mese attuale è " + mese;

var giorno = data.toLocaleDateString('it-IT', { weekday: 'long' });
document.getElementById('singolo2').innerHTML = "Il giorno attuale è " + giorno;

const evento = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {weekday: 'long', year: 'numeric',month: 'long', day: 'numeric'};
document.getElementById('digital').innerHTML =(evento.toLocaleDateString('it-IT', options));

function oraVera() {
var orario = data.getHours();
console.log(orario);
var minuti = data.getMinutes();
console.log(minuti);
var secondi = data.getSeconds();
console.log(secondi);
document.getElementById('orario').innerHTML = (orario.toString()) + ":" + (minuti.toString()) + ":" + (secondi.toString());}

oraVera();

//OROLOGIO DIGITALE

/*function orologioDigitale() {
    document.getElementById('tondo').innerHTML = oraVera;
    orologioDigitale.setInterval(() => {
        
    }, 1000);
}*/


setInterval(function(){
var Data = new Date();
document.getElementById('tondo').innerHTML = `${Data.getHours()}:${Data.getMinutes()}:${Data.getSeconds()} `;
}, 1000)



/*var ora = addZero(data.getHours());
var minutes = addZero(data.getMinutes());
var seconds = addZero(data.getSeconds());*/

