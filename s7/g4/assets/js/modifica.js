var param = new URLSearchParams(location.search)
var id = param.get('id')

fetch('https://sofin.wp-admin.it/public/api/v1/user')
.then(response=> response.json())
.then(data => {
    var campi = data

var utente = campi.find(u=> u.id == id) //cerca dentro data l'id che è uguale a id

console.log(utente)

document.querySelector('#nome').value = utente.name;
document.querySelector('#cognome').value = utente.lastname;
document.querySelector('#email').value = utente.email;
document.querySelector('#ruolo').value = utente.role_id;


var campi = ['name', 'lastname', 'email', 'role',];
var bottone = document.querySelector('#aggiu');

bottone.addEventListener('click', function(e){

e.preventDefault()

   let nome = document.querySelector('#nome').value;
   let cognome = document.querySelector('#cognome').value;
   let email = document.querySelector('#email').value;
   let ruolo = document.querySelector('#ruolo').value;

fetch(
    'https://sofin.wp-admin.it/public/api/v1/user/' + id,
    {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name : nome,
            lastname : cognome,
            email : email,
            role_id : ruolo,    
        })
    }
)
.then(response => response.json())
.then(data => {
    alert('Utente '+data.id+' Creato')
    setTimeout(function(){
        window.location.href = 'tabella.html'
    },1000)
})
})
})
