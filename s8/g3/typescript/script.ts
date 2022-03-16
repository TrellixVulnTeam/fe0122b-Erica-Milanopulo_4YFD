abstract class Lavoratori {

    redditoLordo:number;

    constructor(redditoLordo:number){

        this.redditoLordo = redditoLordo;
    }
    
    abstract getIrpef():number;
    abstract getInps():number;
    abstract getTasse():number;
    abstract getRedditNetto():number;
}

class Edilizia extends Lavoratori{

    constructor(redditoLordo:number){

        super(redditoLordo)
    }

    getIrpef(): number {
        return (this.redditoLordo/100) * 1.2;
    }

    getInps(): number {
        return (this.redditoLordo/100) * 1.4;
    }

    getTasse(): number {
        return (this.redditoLordo/100) * 32;
    }

    getRedditNetto(): number {
        return this.redditoLordo - (this.getIrpef() + this.getInps() + this.getTasse());
    }

}


class Avvocati extends Lavoratori{

    constructor(redditoLordo:number){

        super(redditoLordo)
    }

    getIrpef(): number {
        return (this.redditoLordo/100) * 1.56;
    }

    getInps(): number {
        return (this.redditoLordo/100) * 1.8;
    }

    getTasse(): number {
        return (this.redditoLordo/100) * 28;
    }

    getRedditNetto(): number {
        return this.redditoLordo - (this.getIrpef() + this.getInps() + this.getTasse());
    }

}



let butt:any = document.querySelector('#newCalc');
butt.addEventListener('click', () => {
    let valore: any = document.querySelector('#Reddito');
    let numval = Number(valore.value)
    
    let lav = new Edilizia(numval);

    let inps: any = document.querySelector('#inps');
    inps.value = Math.round(lav.getInps());

    let irpef: any = document.querySelector('#irpef');
    irpef.value = Math.round(lav.getIrpef())

    let tasse: any = document.querySelector('#tasse');
    tasse.value = Math.round(lav.getTasse());

    let redditoNetto: any = document.querySelector('#ReddN');
    redditoNetto.value = Math.round(lav.getRedditNetto());

    valore.value = '';
    valore.placeholder = lav.redditoLordo;

})

let butt1:any = document.querySelector('#newCalc1');
butt1.addEventListener('click', () => {
    let valore: any = document.querySelector('#Reddito1');
    let numval = Number(valore.value)
    
    let lav = new Edilizia(numval);

    let inps: any = document.querySelector('#inps1');
    inps.value = Math.round(lav.getInps());

    let irpef: any = document.querySelector('#irpef1');
    irpef.value = Math.round(lav.getIrpef())

    let tasse: any = document.querySelector('#tasse1');
    tasse.value = Math.round(lav.getTasse());

    let redditoNetto: any = document.querySelector('#ReddN1');
    redditoNetto.value = Math.round(lav.getRedditNetto());

    valore.value = '';
    valore.placeholder = lav.redditoLordo;

})

let carpentiere = new Edilizia (35000);
console.log('Reddito netto carpentiere: ' + carpentiere.getRedditNetto());