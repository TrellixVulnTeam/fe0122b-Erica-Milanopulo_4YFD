function tasti(valore) {
	let display = document.getElementById('display');
	let numero = valore.id;
	let attualeValore = display.value;
	var charsToSearch = ["+","-","*","/",":"];
	var lastchar =  attualeValore.charAt(attualeValore.length - 1);
	const match = charsToSearch.find(element => {
	  if (element.includes(lastchar)) {
		return true;
	  }
	});
	if (match !== undefined && charsToSearch.indexOf(valore.id) > -1 ) {
	  alert('un solo operatore!');
	  display.value = display.value.replace(/.$/, numero);
	}else {
		display.value += numero;
	}
	
}
function operazione() {
   let display = document.getElementById('display');
   display.value = eval(display.value);
   operazioneCliccata = false;
}

function cancella() {
   let display = document.getElementById('display').value = "";}

