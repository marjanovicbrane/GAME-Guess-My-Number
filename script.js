'use strict';


//RANDOM NUMBER BETWEEN 1-20
const secretNumber=Math.trunc(Math.random()*20)+1;
//just for debugging
document.querySelector('.number').textContent=secretNumber;

//Adding event listener to the button check and saving into vairable value from the input field.
document.querySelector('.check').addEventListener('click', function (){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    //When we don't enter anything to input field...
    //guess=0 and o is falsy value, so guess is FALSE
    //in this if statement.
    //!FALSE=TRUE
   if(!guess){
    document.querySelector('.message').textContent='👎 No number!';
   }else if(guess===secretNumber){
    document.querySelector('.message').textContent='👍 Correct number!';
   }else if(guess>secretNumber){
    document.querySelector('.message').textContent='📈 Too high';
   }else if(guess<secretNumber){
    document.querySelector('.message').textContent='📉 Too low';
   }
})
