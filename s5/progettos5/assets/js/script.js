//Creo funzione che si attiva al click
document.querySelector('#add')
    .addEventListener('click', function () {

        var valore = document.querySelector('#testo').value;
        creaElemento(valore);

        document.querySelector('#testo').value = '';
        salva(valore);
    });

//Creare HTML
function creaHtml() {

    let elementiSalvati = localStorage.getItem('lista');
    var db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);

    db.forEach(function (elemento) {
        creaElemento(elemento);
    })
}
creaHtml();

//Creare elemento
function creaElemento(valore) {
    var target = document.querySelector('#lista');
    var div = document.createElement('div');

    div.innerHTML = valore + ' ' + '<button> X </button>';
    div.classList.add('todo');

    div.addEventListener('click', function () {
        div.remove();
        elimina(valore);
    })
    target.prepend(div)
}

//Salvare elementi in locale
function salva(testo) {

    var listaVecchia = localStorage.getItem('lista');
    var db = listaVecchia == null ? [] : JSON.parse(listaVecchia);
    db.push(testo);

    localStorage.setItem('lista', JSON.stringify(db));
}

//Eliminare elementi anche da salvataggio locale
function elimina(elemento) {
    let elementiSalvati = JSON.parse(localStorage.getItem('lista'));
    let indice = elementiSalvati.indexOf(elemento);

    elementiSalvati.splice(indice, 1);

    localStorage.setItem('lista', JSON.stringify(elementiSalvati));
}
