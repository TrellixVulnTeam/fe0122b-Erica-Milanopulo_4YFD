function iscritti() {
    let list = localStorage.getItem('utenti');

    let tern = list == null ? [] : JSON.parse(list);

    tern.forEach(elemento => {
  
        let riga = document.createElement('tr');
        let tableRow = document.createElement(`td`);
        let tableRow1 = document.createElement(`td`);
        let tableRow2 = document.createElement(`td`);
        let tableRow3 = document.createElement(`td`);
        
        tableRow.innerText = elemento.id;

        tableRow1.innerText = elemento.username;

        tableRow2.innerText = elemento.email;

        tableRow3.innerText = elemento.password;

      let contenitore = document.querySelector('#tab')

      contenitore.append(riga);
      riga.append(tableRow, tableRow1, tableRow2, tableRow3)

      riga.addEventListener('click', function (valore) {
        riga.remove();
        elimina(valore);
    })

    })
}
iscritti();

//ELIMINARE 
function elimina(elemento) {
    let elementiSalvati = JSON.parse(localStorage.getItem('utenti'));
    let indice = elementiSalvati.indexOf(elemento);

    elementiSalvati.splice(indice, 1);

    localStorage.setItem('utenti', JSON.stringify(elementiSalvati));
}