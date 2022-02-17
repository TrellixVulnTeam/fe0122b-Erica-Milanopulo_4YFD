function tasti(valore) {
    let display = document.getElementById('display');
    let numero = valore.id;
    let attualeValore = display.value;

       display.value += numero;
}

function operazione() {
   let display = document.getElementById('display');
   display.value = eval(display.value);
   operazioneCliccata = false;
}

function cancella() {
   let display = document.getElementById('display').value = "";}

