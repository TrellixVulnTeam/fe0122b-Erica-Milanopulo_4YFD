
fetch('https://sofin.wp-admin.it/public/api/v1/user')
.then(response=> response.json())
.then(data => {

var bottone = document.querySelector('#aggiu');

bottone.addEventListener('click', function(e){

e.preventDefault()

var nome = document.querySelector('#nome').value;
var cognome = document.querySelector('#cognome').value;
var email = document.querySelector('#email').value;
var ruolo = document.querySelector('#ruolo').value;

fetch(
    'https://sofin.wp-admin.it/public/api/v1/user',
    {
        method: 'POST', // or 'PUT'
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
