//verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate
//PRIMO UTENTE
var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (soldi) {
        this.carica += soldi;
    };
    FirstUser.prototype.chiamata = function (minuti) {
        this.carica -= (0.20 * minuti);
        this.numeroChiamate += 1;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return FirstUser;
}());
//SECONDO UTENTE
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (soldi) {
        this.carica += soldi;
    };
    SecondUser.prototype.chiamata = function (minuti) {
        this.carica -= (0.20 * minuti);
        this.numeroChiamate += 1;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return SecondUser;
}());
//TERZO UTENTE
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (soldi) {
        this.carica += soldi;
    };
    ThirdUser.prototype.chiamata = function (minuti) {
        this.carica -= (0.20 * minuti);
        this.numeroChiamate += 1;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var Majeed = new ThirdUser(10, 0);
var Erica = new FirstUser(15, 0);
var Elisabetta = new SecondUser(20, 0);
var Sergiu = new FirstUser(0, 0);
