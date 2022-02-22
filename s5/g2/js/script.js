/* 1)creare variabile con budget
 2)funzione che scala budget progressivamente
 3) messaggi di avviso a metà e fine budget --> alert
 4)output che mostra progressivamente il budget che scala  */



//let numRan = Math.floor(Math.random());
//let testo = "";
function budgetDec() {
    let budget = 1000;
    var decremento;

    while (budget > 0) {
        decremento = Math.round(Math.random() * 100);
        console.log(budget);
        console.log('-' + decremento);

        
        if (budget <= 500 && budget >= 400 ) {
            console.log('sei a metà del budget');
        } else if (budget <= 150) {
            console.log('stai arrivando alla fine del budget')
        }
       
        document.querySelector('#qui').innerHTML += '<p> Hai speso ' + decremento + '. Il budget rimasto è: ' + budget + '</p>';
        budget -= decremento;
    }
}

budgetDec();