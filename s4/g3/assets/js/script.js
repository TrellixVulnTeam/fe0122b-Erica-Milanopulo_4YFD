function rangeEta() {
   var pensione = 65;
   var calc = document.getElementById('anni').value*1;
   return document.getElementById('risultato').innerHTML = pensione - calc;
}

   /*if (calc != "") {
       document.write('risultato').innerHtml = pensione - calc;
   }
   else {
       alert('Inserisci la tua età e scopri quanto ti manca alla pensione')
   }*/

//Parametrizzazione
const poco = function(name) {
    return "Manca troppo alla pensione, " + name + "!"
}

console.log(poco("Erica"));

//FUNZIONE FRECCIA

moltiplica = (params) => params * 2;

document.getElementById('autore').innerHTML= "Il risultato è: " + moltiplica(7); 

//funzione con closure
document.getElementById("demo").innerHTML = add();
function add() {
    var counter = 0;
    function plus() {counter -= 1;}
    plus();    
    plus();
    plus();    
    plus();        
    return counter; 
}
    