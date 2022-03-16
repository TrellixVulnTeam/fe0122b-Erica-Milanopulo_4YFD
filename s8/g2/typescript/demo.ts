//SUPERCLASSE
class SonAccount {

    balanceInit: number; //saldo attuale
    versamenti: number[]=[]; //soldi che aggiungiamo
    prelievi: number[]=[]; //soldi che tolgo

    constructor(balanceInit: number) {

        this.balanceInit = balanceInit;
        //this.versamenti = versamenti;
        //this.prelievi = prelievi;

    }

    oneDeposit(num:number):number{
        this.versamenti.push(num)
        return this.balanceInit += num;
    }

    oneWithDraw(num:number):number{
        this.prelievi.push(num)
        return this.balanceInit -= num
    }

}

//SOTTOCLASSE
class MotherAccount extends SonAccount {

    constructor(balanceInit: number) //versamenti: number[], prelievi: number[],) 
   {
        super(balanceInit) //versamenti, prelievi)

    }

    interests(){
        return (this.balanceInit/100)*10
    }

    addInterest():number{

    return this.balanceInit += this.interests();

    }
    
}

let madre = new MotherAccount(1000);


let figlio = new SonAccount(2000);
let saldoCorrente: any = document.querySelector('#saldoCorrente');
saldoCorrente.value = figlio.balanceInit;


let versa: any = document.querySelector('#versa');
versa.addEventListener('click', function(){
   
    var num: number = Number((<HTMLInputElement>document.querySelector('#versa')).value);
    figlio.oneDeposit(num)

})

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


let soldiPiu = document.querySelector('#versamento');



