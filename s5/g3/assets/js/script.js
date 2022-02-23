var navhead = document.querySelector('#navhead');

navhead.addEventListener('click', function(){

    if(document.querySelector('#navigazione').style.display == 'block' ){
        document.querySelector('#navigazione').style.display = 'none';
    } else {
        document.querySelector('#navigazione').style.display = 'block';
    }
});

console.log(navhead)

//bottoni per stile
function visualizza(){
    let bott1 = document.querySelector('#btn1');

    bott1.addEventListener('click', function(){
        document.querySelector('#testo1').style.display = 'block'});}

visualizza();

function colore(){
    let bott2 = document.querySelector('#btn2');

    bott2.addEventListener('click', function(){
        document.querySelector('#testo1').style.color = 'red'});}

colore();

function grassetto(){
    let bott3 = document.querySelector('#btn3');

    bott3.addEventListener('click', function(){
        document.querySelector('#testo1').style.fontWeight = 'bold'});}

grassetto();

function grandezza(){
    let bott4 = document.querySelector('#btn4');

    bott4.addEventListener('click', function(){
        document.querySelector('#testo1').style.fontSize = '5em'});}

grandezza();

function sfondo(){
    let bott5 = document.querySelector('#btn5');

    bott5.addEventListener('click', function(){
        document.querySelector('#testo1').style.backgroundColor = 'yellow'});}

sfondo();

//lista cose da fare
function listaCoseFare(){
    let elementi = document.querySelectorAll('.ascolta');

for(var i=0; i < elementi.length; i++){
    elementi[i].addEventListener('click', function(){
     this.style.textDecoration = 'line-through'})
}} 

listaCoseFare();

