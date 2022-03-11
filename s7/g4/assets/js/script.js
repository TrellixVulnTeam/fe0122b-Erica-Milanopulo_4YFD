//CHIAMATA GET --> prendo dati
/*fetch('https://sofin.wp-admin.it/public/api/v1/user')
.then(response => response.json()) //con una funzione freccia se non ci sono graffe è come se ci fosse un return
//il return manda la response.json al prossimo THEN
.then(data => data.forEach(function (element) {
    let riga = document.createElement('tr');
        let tableRow = document.createElement(`td`);
        let tableRow1 = document.createElement(`td`);
        let tableRow2 = document.createElement(`td`);
        let tableRow3 = document.createElement(`td`);
        
        tableRow.innerText = element.name;

        tableRow1.innerText = element.lastname;

        tableRow2.innerText = element.email;

        tableRow3.innerText = element.role.nicename;

      let contenitore = document.querySelector('#tab')

      contenitore.append(riga);
      riga.append(tableRow, tableRow1, tableRow2, tableRow3)
}))*/

//USANDO IL CICLO FORIN
var tabella = document.querySelector('#tab')
let intestazione = ['Nome', 'Cognome', 'Email', 'Ruolo', ' '];
intestazione.forEach(function (titoli) {
    let tableHead = document.createElement('th');
    tabella.append(tableHead);
    tableHead.innerText = titoli;
});
fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(function (data) {

        var campi = ['name', 'lastname', 'email', 'role',];


        data.forEach(function (elemento) {
            var tabella = document.querySelector('#tab');

            let cancella = document.createElement('button');
            cancella.innerText = 'Cancella'
            cancella.classList.add('elimina');

            let modifica = document.createElement('a');
            modifica.innerText = 'Modifica'
            modifica.classList.add('aggiungi');
            modifica.href = '/modifica.html?id=' + elemento.id /*localhost/modifica.html?id=*/

            modifica.addEventListener('click', function () {
                window.location = 'modifica.html'
            });

            let riga = document.createElement('tr');

            tabella.append(riga);



            for (let prop in elemento) {
                if (campi.includes(prop)) {

                    let contenuto = typeof elemento[prop] == "object" ? elemento[prop].nicename : elemento[prop];
                    let tableData = document.createElement('td');
                    tableData.innerText = contenuto
                    riga.append(tableData);
                    riga.append(cancella);
                    riga.append(modifica)
                };

            }

            cancella.addEventListener('click', function () {
                fetch('https://sofin.wp-admin.it/public/api/v1/user/' + elemento.id, {
                    method: "DELETE",
                })
                    .then(response => response.json())
                    .then(data => {
                        alert('L\'utente eliminato')
                        riga.remove();
                    });
            });
        });
    })

//AGGIUNGI
var botNuovo = document.getElementById('nuovo');

botNuovo.addEventListener('click', function () {
    window.location = 'NuovoU.html'
});



//CHIAMATA POST --> utilizzata per creare qualcosa (es.creo un nuovo utente)

/*fetch(
    'https://sofin.wp-admin.it/public/api/v1/user',
    {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name : 'Nunzio',
            lastname : 'Buio',
            email : 'tesjhfsdukjy@test.com',
            role_id : 1,
            password : 'sfdafsdafsda'
        }),
    }
)
.then(response => response.json())
.then(data => {
    alert('Utente '+data.id+' Creato')
})*/

//PUT SERVE PER AGGIORNARE UN UTENTE MA DEVO AGGIUNGERE ALL'URL, DOPO USER NUMERODELLID
