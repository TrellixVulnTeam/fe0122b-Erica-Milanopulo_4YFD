//INTERFACCIA
interface Smartphone {

    carica:number; //quantitativo di euro disponibile per le chiamate
    numeroChiamate: number; //numero chiamate effettuate con il cell

    chiamata(minuti:number):void; //effettua una chiamata di durata in minuti specificata nel parametro esplicito. Questo aggiornerà la carica e aumenterà il numero chiamate 0.20 cent al minuto

    ricarica(soldi:number):void; //aumenta i soldi nel tel

    numero404():number; //restituisce il valore della carica disponibile.

    getNumeroChiamate(): number; //mi dice il numero delle chiamate

    azzeraChiamate(): number; //svuota il numero delle chiamate
}

//verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate


//PRIMO UTENTE
class FirstUser implements Smartphone{

    public carica: number;
    public numeroChiamate: number;

    constructor(carica:number, numeroChiamate:number){

        this.carica = carica;
        this.numeroChiamate = numeroChiamate;

    }

    ricarica(soldi:number):void{

    this.carica += soldi;

    }

    chiamata(minuti:number):void{ //il parametro minuti va messo anche nell'interfaccia

       this.carica -= (0.20 * minuti);
       this.numeroChiamate += 1
    }

    numero404():number{

        return this.carica;
    }

    getNumeroChiamate(): number {
        
        return this.numeroChiamate;
    }

    azzeraChiamate(): number {
        
        return this.numeroChiamate = 0;
    }

}

//SECONDO UTENTE
class SecondUser implements Smartphone{

    public carica: number;
    public numeroChiamate: number;

    constructor(carica:number, numeroChiamate:number){

        this.carica = carica;
        this.numeroChiamate = numeroChiamate;

    }

    ricarica(soldi:number):void{

    this.carica += soldi;

    }

    chiamata(minuti:number):void{ //il parametro minuti va messo anche nell'interfaccia

       this.carica -= (0.20 * minuti);
       this.numeroChiamate +=1
    }

    numero404():number{

        return this.carica;
    }

    getNumeroChiamate(): number {
        
        return this.numeroChiamate;
    }

    azzeraChiamate(): number {
        
        return this.numeroChiamate = 0;
    }

}

//TERZO UTENTE
class ThirdUser implements Smartphone{

    public carica: number;
    public numeroChiamate: number;

    constructor(carica:number, numeroChiamate:number){

        this.carica = carica;
        this.numeroChiamate = numeroChiamate;

    }

    ricarica(soldi:number):void{

    this.carica += soldi;

    }

    chiamata(minuti:number):void{ //il parametro minuti va messo anche nell'interfaccia

       this.carica -= (0.20 * minuti);
       this.numeroChiamate += 1
    }

    numero404():number{

        return this.carica;
    }

    getNumeroChiamate(): number {
        
        return this.numeroChiamate;
    }

    azzeraChiamate(): number {
        
        return this.numeroChiamate = 0;
    }

}

let Majeed = new ThirdUser(10, 0);
let Erica = new FirstUser (15, 0);
let Elisabetta = new SecondUser (20,0);
let Sergiu = new FirstUser(0,0);

