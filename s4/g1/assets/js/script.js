function changeBackColor() {
    document.getElementById('titolo').style.backgroundColor = '#FF0000'
} 

function changeButtonStyle() {
    document.getElementById('bottone').style.color = 'green';
    document.getElementById('bottone').
    style.backgroundColor = 'black';
}

function cresci() {
    document.getElementById('grow').style.fontSize = '2rem';
}

function reset() {
    document.getElementById('titolo').style.backgroundColor = '';
    document.getElementById('bottone').style.color = '';
    document.getElementById('bottone').
    style.backgroundColor = '';
    document.getElementById('grow').style.fontSize = '';
}