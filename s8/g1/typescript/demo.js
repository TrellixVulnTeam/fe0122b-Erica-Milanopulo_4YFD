//creo due giocatori
var giocatore1 = Math.floor(Math.random() * (100 - 1) + 1);
var giocatore2 = Math.floor(Math.random() * (100 - 1) + 1);
console.log('Giocatore 1: ' + giocatore1);
console.log('Giocatore 2: ' + giocatore2);
//genero numero casuale
var numero = Math.floor(Math.random() * (100 - 1) + 1);
console.log('Numero randomico: ' + numero);
if (Math.abs(giocatore1 - numero) < Math.abs(giocatore2 - numero)) {
    console.log('Il giocatore 1 ci è andato più vicino');
}
else if (giocatore1 == numero) {
    console.log('Il giocatore 1 ha indovinato');
}
else if (giocatore2 == numero) {
    console.log('Il giocatore 2 ha indovinato');
}
else if (giocatore1 == giocatore2) {
    console.log('I giocatori hanno pareggiato');
}
else {
    console.log('Giocatore 2 ci è andato più vicino');
}
