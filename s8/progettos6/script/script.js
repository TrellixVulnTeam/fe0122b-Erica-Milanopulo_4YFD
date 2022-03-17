//fetch
fetch("Abbigliamento.json")
    .then(function (response) { return response.json(); })
    .then(function (vestiti) {
    vestiti.forEach(function (e) {
        var vestiti = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        console.log(vestiti);
    });
});
//classe
var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Vestiti.prototype.getSaldoCapo = function () {
        return this.prezzoivaesclusa * this.saldo / 100; //saldo da sottrarre all acquisto del capo alla cassa
    };
    Vestiti.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo(); //costo totale di tale capo
    };
    return Vestiti;
}());
//istanze classe
var abitoSera = new Vestiti(6, 4113, "primavera", "abito", 4367, 7, "nero", 35, 39.40, "magazzino", 30);
var jeansMom = new Vestiti(7, 9721, "autunno/inverno", "jeans", 4075, 4, "blu", 20, 22.50, "negozio", 45);
var cappotto = new Vestiti(8, 5986, "inverno", "cappotto", 5998, 2, "beje", 40, 43.36, "negozio", 25);
//output
console.log("Il costo dell'abito da sera \u00E8 di: ".concat(abitoSera.getAcquistoCapo(), "\u20AC"));
console.log("Il costo dei jeans Mom Fit \u00E8 di: ".concat(jeansMom.getAcquistoCapo(), "\u20AC"));
console.log("Il costo del cappotto \u00E8 di: ".concat(cappotto.getAcquistoCapo(), "\u20AC"));
console.log("Il costo dell'abito da sera scontato \u00E8 di: ".concat(abitoSera.getSaldoCapo(), "\u20AC"));
console.log("Il costo dei jeans Mom Fit scontati \u00E8 di: ".concat(jeansMom.getSaldoCapo(), "\u20AC"));
console.log("Il costo del cappotto scontato \u00E8 di: ".concat(cappotto.getSaldoCapo(), "\u20AC"));
var abito = document.querySelector('#cosAbito');
abito.innerHTML = ' ' + abitoSera.getAcquistoCapo() + '€';
var abitoS = document.querySelector('#cosSconto');
abitoS.innerHTML = ' ' + abitoSera.getSaldoCapo() + '€';
var jeans = document.querySelector('#cosAbito1');
jeans.innerHTML = ' ' + jeansMom.getAcquistoCapo() + '€';
var jeansS = document.querySelector('#cosSconto1');
jeansS.innerHTML = ' ' + jeansMom.getSaldoCapo() + '€';
var capp = document.querySelector('#cosAbito2');
capp.innerHTML = ' ' + cappotto.getAcquistoCapo() + '€';
var cappS = document.querySelector('#cosSconto2');
cappS.innerHTML = ' ' + cappotto.getSaldoCapo() + '€';
