//recupero dati
var btnAccedi = document.getElementById('accedi');

btnAccedi.addEventListener('click', function(e){
    e.preventDefault();

    var arrayy = document.querySelectorAll('.pippo');
    var controllo = true;
    var nome1 = document.querySelector('#user').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    
    arrayy.forEach(elemento => {
        let valore = elemento.value;
            
        if(valore == ""){
            elemento.style.border = '1px solid red';
            controllo = false;
        }
        else{
            elemento.style.border = '';       
        };
    });   

    var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'));

    let checkUser = listaUtenti.find(o => o.email == email && o.password == password && o.username == nome1);

    if(checkUser != undefined){
        alert('Benvenuto')
        setTimeout(function(){
            window.location = 'database.html';
        },600)
    }else{
     alert('Dati sbagliati')
    }
});

class Utente{
    constructor(username, email, password){
      this.username = username;
      this.email = email;
      this.password = password;
    };
};