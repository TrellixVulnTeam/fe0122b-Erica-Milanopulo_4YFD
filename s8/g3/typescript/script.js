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
var Lavoratori = /** @class */ (function () {
    function Lavoratori(redditoLordo) {
        this.redditoLordo = redditoLordo;
    }
    return Lavoratori;
}());
var Edilizia = /** @class */ (function (_super) {
    __extends(Edilizia, _super);
    function Edilizia(redditoLordo) {
        return _super.call(this, redditoLordo) || this;
    }
    Edilizia.prototype.getIrpef = function () {
        return (this.redditoLordo / 100) * 1.2;
    };
    Edilizia.prototype.getInps = function () {
        return (this.redditoLordo / 100) * 1.4;
    };
    Edilizia.prototype.getTasse = function () {
        return (this.redditoLordo / 100) * 32;
    };
    Edilizia.prototype.getRedditNetto = function () {
        return this.redditoLordo - (this.getIrpef() + this.getInps() + this.getTasse());
    };
    return Edilizia;
}(Lavoratori));
var Avvocati = /** @class */ (function (_super) {
    __extends(Avvocati, _super);
    function Avvocati(redditoLordo) {
        return _super.call(this, redditoLordo) || this;
    }
    Avvocati.prototype.getIrpef = function () {
        return (this.redditoLordo / 100) * 1.56;
    };
    Avvocati.prototype.getInps = function () {
        return (this.redditoLordo / 100) * 1.8;
    };
    Avvocati.prototype.getTasse = function () {
        return (this.redditoLordo / 100) * 28;
    };
    Avvocati.prototype.getRedditNetto = function () {
        return this.redditoLordo - (this.getIrpef() + this.getInps() + this.getTasse());
    };
    return Avvocati;
}(Lavoratori));
var butt = document.querySelector('#newCalc');
butt.addEventListener('click', function () {
    var valore = document.querySelector('#Reddito');
    var numval = Number(valore.value);
    var lav = new Edilizia(numval);
    var inps = document.querySelector('#inps');
    inps.value = Math.round(lav.getInps());
    var irpef = document.querySelector('#irpef');
    irpef.value = Math.round(lav.getIrpef());
    var tasse = document.querySelector('#tasse');
    tasse.value = Math.round(lav.getTasse());
    var redditoNetto = document.querySelector('#ReddN');
    redditoNetto.value = Math.round(lav.getRedditNetto());
    valore.value = '';
    valore.placeholder = lav.redditoLordo;
});
var butt1 = document.querySelector('#newCalc1');
butt1.addEventListener('click', function () {
    var valore = document.querySelector('#Reddito1');
    var numval = Number(valore.value);
    var lav = new Edilizia(numval);
    var inps = document.querySelector('#inps1');
    inps.value = Math.round(lav.getInps());
    var irpef = document.querySelector('#irpef1');
    irpef.value = Math.round(lav.getIrpef());
    var tasse = document.querySelector('#tasse1');
    tasse.value = Math.round(lav.getTasse());
    var redditoNetto = document.querySelector('#ReddN1');
    redditoNetto.value = Math.round(lav.getRedditNetto());
    valore.value = '';
    valore.placeholder = lav.redditoLordo;
});
var carpentiere = new Edilizia(35000);
console.log('Reddito netto carpentiere: ' + carpentiere.getRedditNetto());
