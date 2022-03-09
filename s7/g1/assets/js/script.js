//funzione textHTML se funzione è "" 'campo obbligatorio'
//input email = input ripeti email
//psw1 = psw2
//creo array vuoto 'bacinella'
//tutti input devono creare un array
//creare una classe 'nessuno'
//memorizzarsi nel localstorage
//non eliminare i dati al ricarico della pagina

let btnInvio = document.getElementById('bottone');

btnInvio.addEventListener('click', function(e){

  //permette di bloccare invio del form e quindi di procedere con messaggi di errore
  e.preventDefault(); 

    //con query selector all creiamo un array
    var arrayy = document.querySelectorAll('.pippo');
    var psw2Val = document.querySelector('#psw2').value;
    var psw1Val = document.querySelector('#psw1').value;
    var pippo1 = document.getElementById('user1').value;
    var pippo2 = document.getElementById('email').value;
    //variabile di controllo
    var controllo = true; 
    
    //parametro elemento fa riferimento al singolo elemento dell'array
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

        if(psw1Val != psw2Val){
        document.getElementById('span').innerText= 'La password non corrisponde'
        controllo = false;
       }else{
        document.getElementById('span').innerText= ''
       }

    //se è tutto a posto va inserire i dati nel local storage
    if(controllo) {     
      var utenti = new Utente (pippo1, pippo2, psw1Val, psw2Val);

    let utenteMemorizzato = memorizzaDati(utenti);
    
    if(utenteMemorizzato){
    setTimeout(function(){
      window.location = 'formLogin.html'
    },600);    
    }
  }
});

  
//creo una classe che DEVE STARE FUORI DALLA FUNZIONE
 class Utente{
        constructor(username, email, password){
          /*this.id = (() =>{ //creo una proprietà
            let newId = localStorage.getItem('id') == null ? 1: Number(localStorage.getItem('id'))+1
            localStorage.setItem('id', newId)
            return newId //serve per valorizzare l'id altrimenti non lo trova
        })()*/
          this.id = this.getId();
          this.username = username;
          this.email = email;
          this.password = password;
          
        };
        getId(){
          let newId = localStorage.getItem('id') == null ? 1: Number(localStorage.getItem('id'))+1
          localStorage.setItem('id', newId)
          return newId //serve per valorizzare l'id altrimenti non lo trova
        }
  };

  //salvataggio dati nel local storage
  function memorizzaDati (nuovoUtente){
    
    //è la chiave del local storage dove verranno salvati i valori
     let elementiSalvati = localStorage.getItem('utenti'); 
     let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
     //qui inserisci il controllo per verificare se la mail inserita appartiene ad un utente già registrato
     //prefribilmente utilizza il metodo find()
     //con funzioni freccia se hai solo un parametro non servono le tonde. Inoltre con funzioni freccia non si può usare return
     //old user è il parametro
     var target = dataBase.find(oldUser => oldUser.email == nuovoUtente.email || oldUser.username == nuovoUtente.username);
     
     //find se non trova niente da UNDEFINED
     if(target == undefined){  
     dataBase.push(nuovoUtente);
     localStorage.setItem('utenti', JSON.stringify(dataBase));
    return true;
     
    //quando invio form mi rimanda alla pagina del login   

    }else{
      Swal.fire('Email o Nome Utente già esistenti. Inserisci una nuova mail per registrarti');
      return false;
    }
  };


  








