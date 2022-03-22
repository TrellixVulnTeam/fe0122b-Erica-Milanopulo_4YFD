var prov = document.querySelector('#provincia');
var regg = document.querySelector('#regione');
var imgReg = document.querySelector('#secondo');
var fot = document.querySelector('#logoReg');
var imgProv = document.querySelector('#primo');
var fot1 = document.querySelector('#logoProv');
//FETCH REGIONI
fetch("regioni.json")
    .then(function (response) { return response.json(); })
    .then(function (regioni) {
    console.log(regioni);
    populateSelectOptions(regioni);
    if (regg.val == '') {
        rimuovi(prov);
    }
});
//FETCH PROVINCIE
regg.addEventListener('change', function () {
    fetch("province.json")
        .then(function (response) { return response.json(); })
        .then(function (province) {
        console.log(province);
        populateSelectOptions1(province);
    });
    rimuovi(prov);
    showRegioni();
});
//riempire select con regioni
function populateSelectOptions(e) {
    for (var i = 0; i < e.length; i++) {
        //creo elemento option <option></option>
        var opzione = document.createElement('option');
        //do un attributo value all'option
        opzione.setAttribute('value', e[i].prov_regione);
        //metto nell'option il nome della macchina
        opzione.innerText = e[i].prov_regione;
        //lo aggiungo al campo select
        regg.append(opzione);
    }
}
//riempire select con province
function populateSelectOptions1(e) {
    for (var i = 0; i < e.length; i++) {
        var idReg = regg.value;
        var provi = e[i].prov_reg;
        //creo elemento option <option></option>
        var opzione = document.createElement('option');
        //do un attributo value all'option
        opzione.setAttribute('value', e[i].prov_nome);
        if (idReg == provi) {
            //metto nell'option il nome della macchina
            opzione.innerText = e[i].prov_nome;
            //lo aggiungo al campo select
            prov.append(opzione);
        }
    }
}
prov.addEventListener('change', showProvince);
//rimuovere
function rimuovi(e) {
    e.innerText = '';
    var opzione1 = document.createElement('option');
    opzione1.innerText = ' ';
    opzione1.value = '';
    prov.append(opzione1);
    prov.value = '';
}
//MANDARE A SCHERMO IMG
function showRegioni() {
    var selezionato = regg.value;
    fetch('province.json')
        .then(function (response) { return response.json(); })
        .then(function (risposta) {
        for (var i = 0; risposta.length; i++) {
            if (risposta[i].prov_reg == selezionato) {
                imgReg.innerText = risposta[i].prov_reg;
                fot.setAttribute('src', risposta[i].prov_url);
            }
            else if (selezionato == 'none') {
                imgReg.innerText = '';
                fot.setAttribute('src', '');
            }
        }
    });
}
function showProvince() {
    var selezionato = prov.value;
    fetch('province.json')
        .then(function (response) { return response.json(); })
        .then(function (risposta) {
        for (var i = 0; risposta.length; i++) {
            if (risposta[i].prov_nome == selezionato) {
                imgProv.innerText = risposta[i].prov_nome;
                fot1.setAttribute('src', 'assets/img/province/' + risposta[i].prov_nome + '.png');
            }
            else if (selezionato == '') {
                imgProv.innerText = '';
                fot1.setAttribute('src', '');
            }
        }
    });
}
