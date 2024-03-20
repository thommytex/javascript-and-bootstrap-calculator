const myField = document.querySelector('#myfield');
const notify = document.querySelector('#notify');
const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const  card = document.querySelector('.card')
let display = document.querySelector('#textToShow');
let trackNum = 1;
let gameScore = document.querySelector('#score')
myField.focus();
let text = "";

function generateWord(){
    for(i=0; i<5; i++){
        let num  = Math.floor(Math.random()* possible.length);
        text += possible.charAt(num)
    }
    display.innerText = text;
};
generateWord()

let score = 0;
// console.log(text);

myField.addEventListener('keyup',(e)=>{
     const inputValue = myField.value;

     if(inputValue.length === 5){
          if(text === inputValue){
              score += 25
              gameScore.innerText = score;
          }
          if(trackNum ===5){
              card.innerHTML = `<h1 class ="text-center fw-bold">Game Over<br>Your Score is<br>${score}</h1>`
          }

         console.log(inputValue);
         text = ""
        generateWord()
         myField.value = "";
         myField.focus();
     }else{
         
     }
     if(inputValue.length < 6){
         notify.innerText = 'password too short'
     }else{
         notify.innerText = 'password is good'
     }
});