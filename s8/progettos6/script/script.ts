//fetch
fetch("Abbigliamento.json")
    .then(response => response.json())
    .then(vestiti => {
        vestiti.forEach((e: Vestiti) => {

            let vestiti = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo)

            console.log(vestiti)

        })
    })

//classe
class Vestiti {
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }

    getSaldoCapo(): number {
        return this.prezzoivaesclusa * this.saldo/100; //saldo da sottrarre all acquisto del capo alla cassa
    }
    getAcquistoCapo(): number {        
        return this.prezzoivainclusa - this.getSaldoCapo()  //costo totale di tale capo
    }
}

//istanze classe
let abitoSera = new Vestiti(6,4113,"primavera","abito",4367,7,"nero",35,39.40,"magazzino",30);
let jeansMom = new Vestiti(7,9721,"autunno/inverno","jeans",4075,4,"blu",20,22.50,"negozio",45);
let cappotto = new Vestiti(8,5986,"inverno","cappotto",5998,2,"beje",40,43.36,"negozio",25);

//output
console.log(`Il costo dell\'abito da sera è di: ${abitoSera.getAcquistoCapo()}€`);
console.log(`Il costo dei jeans Mom Fit è di: ${jeansMom.getAcquistoCapo()}€`);
console.log(`Il costo del cappotto è di: ${cappotto.getAcquistoCapo()}€`);

console.log(`Il costo dell\'abito da sera scontato è di: ${abitoSera.getSaldoCapo()}€`);
console.log(`Il costo dei jeans Mom Fit scontati è di: ${jeansMom.getSaldoCapo()}€`);
console.log(`Il costo del cappotto scontato è di: ${cappotto.getSaldoCapo()}€`);


let abito: any = document.querySelector('#cosAbito');
abito.innerHTML = ' ' + abitoSera.getAcquistoCapo() + '€';
let abitoS: any = document.querySelector('#cosSconto');
abitoS.innerHTML = ' ' + abitoSera.getSaldoCapo() + '€';

let jeans: any = document.querySelector('#cosAbito1');
jeans.innerHTML = ' ' + jeansMom.getAcquistoCapo() + '€';
let jeansS: any = document.querySelector('#cosSconto1');
jeansS.innerHTML = ' ' + jeansMom.getSaldoCapo() + '€';

let capp: any = document.querySelector('#cosAbito2');
capp.innerHTML = ' ' + cappotto.getAcquistoCapo() + '€';
let cappS: any = document.querySelector('#cosSconto2');
cappS.innerHTML = ' ' + cappotto.getSaldoCapo() + '€';

