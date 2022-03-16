var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//SUPERCLASSE
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.versamenti = []; //soldi che aggiungiamo
        this.prelievi = []; //soldi che tolgo
        this.balanceInit = balanceInit;
        //this.versamenti = versamenti;
        //this.prelievi = prelievi;
    }
    SonAccount.prototype.oneDeposit = function (num) {
        this.versamenti.push(num);
        return this.balanceInit += num;
    };
    SonAccount.prototype.oneWithDraw = function (num) {
        this.prelievi.push(num);
        return this.balanceInit -= num;
    };
    return SonAccount;
}());
//SOTTOCLASSE
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this; //versamenti, prelievi)
    }
    MotherAccount.prototype.interests = function () {
        return (this.balanceInit / 100) * 10;
    };
    MotherAccount.prototype.addInterest = function () {
        return this.balanceInit += this.interests();
    };
    return MotherAccount;
}(SonAccount));
var madre = new MotherAccount(1000);
var figlio = new SonAccount(2000);
var saldoCorrente = document.querySelector('#saldoCorrente');
saldoCorrente.value = figlio.balanceInit;
var versa = document.querySelector('#versa');
versa.addEventListener('click', function () {
    var num = Number(document.querySelector('#versa').value);
    figlio.oneDeposit(num);
});
//output
console.log('Versamento nel conto del figlio: ' + figlio.oneDeposit(100));
console.log('Saldo aggiornato dopo versamento: ' + figlio.balanceInit);
console.log('Aggiunta interesse conto madre: ' + madre.addInterest());
console.log(madre.balanceInit);
console.log(madre.addInterest());
console.log(madre.oneWithDraw(200));
console.log(madre.addInterest());
console.log(madre.oneDeposit(1800));
console.log(madre.oneDeposit(800));
console.log(madre.balanceInit);
console.log(madre.addInterest());
var soldiPiu = document.querySelector('#versamento');
